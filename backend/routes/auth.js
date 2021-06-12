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
      { state: "true", email: req.body.email, username: req.body.username },
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
      pseudo: req.pseudo,
      prenom: req.prenom,
      nom: req.nom,
      photoUrl: req.photoUrl,
      idClient: req.idClient,
      type: req.type,
      role: req.role,
    });
  }
);
