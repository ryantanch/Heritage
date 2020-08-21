const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "35.225.152.6",
    database: "heritage",
    user: "node",
    password: "heritage2020",
    port: 3306
  }
});



// const knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: "35.200.227.182",
//     database: "new_schema",
//     user: "node",
//     password: "node@heritage2019~",
//     port: 3306
//   }
// });


module.exports = knex;
