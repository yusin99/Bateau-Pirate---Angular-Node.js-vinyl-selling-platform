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
        on: "v.idCategorie = c.idCategorie",
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

router.get("/category", function (req, res, next) {
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
    .table("categories_musique as c")
    // .join([
    //   {
    //     table: "categories_musique as c",
    //     on: "v.idCategorie = c.idCategorie",
    //   },
    // ])
    .slice(startValue, endValue)
    // .sort({ idVinyl: 0.1 })
    .getAll()
    .then((categories) => {
      if (categories.length > 0) {
        res.status(200).json({
          count: categories.length,
          categories: categories,
        });
      } else {
        res.json({
          message: "No categories found",
        });
      }
    })
    .catch((err) => console.log(err));
});

router.get("/:vinylId", function (req, res, next) {
  let vinylId = req.params.vinylId;

  database
    .table("vinyl as v")
    .join([
      {
        table: "categories_musique as c",
        on: "c.idCategorie = v.idCategorie",
      },
    ])
    .filter({ "v.idVinyl": vinylId })
    .get()
    .then((prods) => {
      console.log(prods);
      if (prods) {
        res.status(200).json(prods);
      } else {
        res.json({
          message: "No product found matching this",
        });
      }
    })
    .catch((err) => console.log(err));
});
// Get All songs
router.get("/piste/:vinylId", function (req, res, next) {
  let vinylId = req.params.vinylId;

  database
    .table("pistes as p")
    .join([
      {
        table: "vinyl as v",
        on: "v.idVinyl = p.idVinyl",
      },
    ])
    .filter({ "p.idVinyl": vinylId })
    .getAll()
    .then((prods) => {
      console.log(prods);
      if (prods) {
        res.status(200).json({
          count: prods.length,
          songs: prods,
        });
      } else {
        res.json({
          message: "No product found matching thiss",
        });
      }
    })
    .catch((err) => console.log(err));
});
// All products from a particular category
router.get("/category/:catName", function (req, res) {
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
  // Fetch the category name from the url
  const cat_nom = req.params.catName;
  database
    .table("vinyl as v")
    .join([
      {
        table: "categories_musique as c",
        on: `v.idCategorie = c.idCategorie WHERE c.nom LIKE '%${cat_nom}%'`,
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
          message: `No products found from category ${cat_nom} category`,
        });
      }
    })
    .catch((err) => console.log(err));
});
module.exports = router;
