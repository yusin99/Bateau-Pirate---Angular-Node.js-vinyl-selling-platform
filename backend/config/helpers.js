const Mysqli = require("mysqli");

let con = new Mysqli({
  host: "localhost",
  post: 3006,
  user: "root",
  passwd: "",
  db: "bateaupirate",
});

let db = con.emit(false, "");

module.exports = {
  database: db,
};
