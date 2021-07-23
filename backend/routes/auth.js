const express = require("express");
const { check, validationResult, body } = require("express-validator");
const router = express.Router();
const helper = require("../config/helpers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// LOGIN ROUTE
router.post(
  "/login",
  [helper.hasAuthFields, helper.isPasswordAndUserMatch],
  (req, res) => {
    let token = jwt.sign(
      { state: "true", email: req.body.email, pseudo: req.body.pseudo },
      helper.secret,
      {
        algorithm: "HS512",
        expiresIn: "4h",
      }
    );
    res.json({
      token: token,
      auth: true,
      email: req.email,
      nom: req.nom,
      pseudo: req.pseudo,
      prenom: req.prenom,
      photoUrl: req.photoUrl,
      idClient: req.idClient,
      role: req.role,
      type: req.type,
    });
  }
);
// REGISTER ROUTE
router.post(
  "/register",
  [
    check("email")
      .isEmail()
      .not()
      .isEmpty()
      .withMessage("Field can't be empty")
      .normalizeEmail({ all_lowercase: true }),
    check("mdp")
      .escape()
      .trim()
      .not()
      .isEmpty()
      .withMessage("Field can't be empty")
      .isLength({ min: 6 })
      .withMessage("must be 6 characters long"),
    body("email").custom((value) => {
      return helper.database
        .table("clients")
        .filter({
          $or: [{ email: value }, { pseudo: value.split("@")[0] }],
        })
        .get()
        .then((user) => {
          console.log(user);
          if (user) {
            console.log(user);
            return Promise.reject(
              "Email / Username already exists, choose another one."
            );
          }
        });
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(422).json({ errors: errors.array() });
    } else {
      let email = req.body.email;
      let pseudo = req.body.pseudo;
      let mdp = await bcrypt.hash(req.body.mdp, 10);
      let prenom = req.body.prenom;
      let nom = req.body.nom;

      /**
       * ROLE 777 = ADMIN
       * ROLE 555 = CUSTOMER
       **/
      helper.database
        .table("clients")
        .insert({
          pseudo: pseudo,
          mdp: mdp,
          email: email,
          role: 555,
          nom: nom || null,
          prenom: prenom || null,
        })
        .then((lastId) => {
          if (lastId > 0) {
            res.status(201).json({ message: "Registration successful." });
          } else {
            res.status(501).json({ message: "Registration failed." });
          }
        })
        .catch((err) => res.status(433).json({ error: err }));
    }
  }
);

module.exports = router;
