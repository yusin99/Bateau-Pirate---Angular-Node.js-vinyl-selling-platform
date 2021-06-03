const { json } = require("body-parser");
var express = require("express");
var router = express.Router();
const { database } = require("../config/helpers");
/* GET home page. */
router.get("/", function (req, res, next) {
  let page =
    req.query.page !== undefined && req.query.page !== 0 ? req.query.page : 1; // set current page number
  const limit =
    req.query.limit !== undefined && req.query.limit !== 0
      ? req.query.limit
      : 10; // setting limit of items per page

  let startValue;
  let endValue;
  if (page > 0) {
    startValue = page * limit - limit; //10,20,30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }
  database
    .table("vinyl as v")
    .join([
      {
        table: "categories_musique as c",
        on: "c.idCategorie = v.idCategorie",
      },
    ])
    .slice(startValue, endValue)
    .sort({ idVinyl: 0.1 })
    .getAll()
    .then((prods) => {
      if (prods.length > 0) {
        res.status(200).json({
          count: prods.length,
          products: prods,
        });
      } else {
        res.json({
          message: "No products found",
        });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
