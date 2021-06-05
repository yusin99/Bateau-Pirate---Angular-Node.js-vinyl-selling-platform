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
      "com.date_commande,com.status_commande,c.prenom,c.nom,v.nomVinyl",
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
      "com.montant_HT,com.date_commande,com.status_commande,c.prenom,c.nom,v.nomVinyl,ac.quantite",
    ])
    .filter({ "ac.id": orderId })
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
router.post("/new", function (req, res) {
  let { idClient, vinyl, commandes } = req.body;
  // console.log(idClient);
  // console.log(vinyl);
  console.log(idClient, vinyl);
  if (idClient !== null && idClient > 0 && !isNaN(idClient)) {
    database
      .table("commandes")
      .insert({
        idClient: idClient,
      })
      .then((newOrderId) => {
        if (newOrderId > 0) {
          vinyl.forEach(async (v) => {
            let data = await database
              .table("vinyl")
              .filter({ idVinyl: v.idVinyl })
              .withFields(["quantite_dispo", "prixHT"])
              .get();
            let inCart = v.quantite;
            const prixTotal = data.prixHT * inCart;
            console.log(data.prixHT + " EUR");
            // console.log(inCart);
            // console.log(data);

            // Deduct the number of pieces ordered from the quantity column in database
            if (data.quantite_dispo > 0) {
              data.quantite_dispo = data.quantite_dispo - inCart;
              if (data.quantite_dispo < 0) {
                data.quantite_dispo = 0;
              }
            } else {
              data.quantite_dispo = 0;
            }
            console.log(prixTotal);
            // Insert order details with respect to the newly generated order id

            database
              .table("articles_commande")
              .insert({
                idCommande: newOrderId,
                idVinyl: v.idVinyl,
                quantite: inCart,
                montant_HT: prixTotal,
              })
              .then((newId) => {
                database
                  .table("vinyl")
                  .filter({ idVinyl: v.idVinyl })
                  .update({ quantite_dispo: data.quantite })
                  .then((successNum) => {
                    // database
                    //   .table("commandes")
                    //   .filter({ idCommande: newOrderId })
                    //   .insert({ montant_HT: prixTotal })
                    //   .then(() => {})
                    //   .catch((err) => {
                    //     console.log(err);
                    //   });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        } else {
          res.json({
            message: "New order failed while adding order details",
            success: false,
          });
        }

        res.json({
          message: `Order successfully places with order id ${newOrderId}`,
          success: true,
          orderId: newOrderId,
          vinyl: vinyl,
        });
      })
      .catch((err) => console.log(err));
    // database
    //   .table("commandes")
    //   .filter({ idCommande: newOrderId })
    //   .insert({ montant_HT: prixTotal })
    //   .then(() => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
  } else {
    res.json({ message: `New order failled`, success: false });
  }
});
// Payment Gateway fake
router.post("/payment", function (req, res) {
  setTimeout(() => {
    res.status(200).json({ success: true });
  }, 3000);
});
module.exports = router;
