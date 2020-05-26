const express = require("express");
const aap = express();
const mongo = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//use middel layer to parse body
aap.use(bodyParser.json());

//Import APIs rout
const apisrout = require("./apis/rout");

aap.use("/posts", apisrout);

//Routes
aap.get("/", (req, res) => {
  res.send("pakistan");
  console.log(req.url);
});

//Listining server
aap.listen(3000);

//connoct to DB

mongo
  .connect(
    process.env.DB_Connection,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("DB Connected")
  )
  .catch((err) => console.log(err));

// mongo
//   .connect(process.env.DB_Connection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Db Connected"))
//   .catch((err) => console.log(err));

//Mongo@321, dbuser-mongo@1

//mongo "mongodb+srv://cluster0-ae9jy.mongodb.net/test" --username dbuser
