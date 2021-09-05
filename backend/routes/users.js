var express = require("express");
var router = express.Router();
const { database } = require("../config/helpers");

router.get("/", function (req, res) {
  database
    .table("clients as clients")
    .withFields([
      "clients.idClient",
      "clients.idParrain",
      "clients.nom",
      "clients.prenom",
      "clients.pseudo",
      "clients.mdp",
      "clients.role",
      "clients.adresse",
      "clients.code_postal",
      "clients.ville",
      "clients.email",
      "clients.tel",
      "clients.date_inscription",
      "clients.photoUrl",
      "clients.type",
    ])
    .getAll()
    .then((users) => {
      if (users.length > 0) {
        res.status(200).json({ count: users.length, users: users });
      } else {
        res.json({ message: "No users found" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete single user
router.delete("/:idClient", async (req, res) => {
  try {
    const clientId = req.params.idClient;
    console.log(clientId);
    database
      .table("clients")
      .filter({ idClient: clientId })
      .remove()
      .then((clients) => {
        if (clients.length >= 0) {
          res.status(200).json(clients);
        } else {
          res.json({ message: `No users found with client id ${clientId}` });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
