var express = require("express");
var router = express.Router();
const { database } = require("../config/helpers");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   // res.send("respond with a resource");
// });
// Get all orders
router.get("/", function (req, res) {
  database
    .table("commandes as com")
    .join([
      {
        table: "clients as c",
        on: "com.idClient = c.idClient",
      },
      {
        table: "articles_commande as ac",
        on: "com.idCommande = ac.idCommande ",
      },
      {
        table: "vinyl as v",
        on: "ac.idVinyl = v.idVinyl",
      },
    ])
    .withFields([
      "com.montant_HT,com.date_commande,com.status_commande,c.prenom,c.nom,v.nom",
    ])
    .getAll()
    .then((orders) => {
      if (orders.length > 0) {
        res.status(200).json(orders);
      } else {
        res.json({ message: "No orders found" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get single order
router.get("/:idCommande", function (req, res) {
  const orderId = req.params.idCommande;
  database
    .table("commandes as com")
    .join([
      {
        table: "clients as c",
        on: "com.idClient = c.idClient",
      },
      {
        table: "articles_commande as ac",
        on: "com.idCommande = ac.idCommande",
      },
      {
        table: "vinyl as v",
        on: "ac.idVinyl = v.idVinyl",
      },
    ])
    .withFields([
      "com.montant_HT,com.date_commande,com.status_commande,c.prenom,c.nom,v.nom",
    ])
    .filter({ "ac.idCommande": orderId })
    .getAll()

    .then((orders) => {
      if (orders.length > 0) {
        res.status(200).json(orders);
      } else {
        res.json({ message: `No orders found with order id ${orderId}` });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//Post new order
// router.post("/new", function (req, res) {
//   let { idClient, vinyl } = req.body;
//   console.log(idClient, vinyl);
//   if (idClient !== null && idClient > 0 && !isNaN(idClient)) {
//     database
//       .table("commandes")
//       .insert({
//         idClient: idClient,
//       })
//       .then((newOrderId) => {
//         if (newOrderId > 0) {
//           vinyl.forEach(async (v) => {
//             let data = await database
//               .table("vinyl")
//               .filter({ idVinyl: idVinyl })
//               .get();
//           });
//         }
//       })
//       .catch((err) => console.log(err));
//   }
// });
module.exports = router;
