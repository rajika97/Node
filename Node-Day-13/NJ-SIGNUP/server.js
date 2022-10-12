var express = require("express");
var path = require("path");
const { MongoClient } = require("mongodb");
var bodyParser = require("body-parser");
var crypto = require("crypto");

var app = express();

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "node_SIGNUP";

app
  .get("/", function (req, res) {
    res.set({
      "Access-Control-Allow-Origin": "*",
    });
    return res.redirect("/public/index.html");
  })
  .listen(3000);

console.log("Server listening at : 3000");
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

var getHash = (pass, phone) => {
  var hmac = crypto.createHmac("sha512", phone);

  //passing the data to be hashed
  data = hmac.update(pass);
  //Creating the hmac in the required format
  gen_hmac = data.digest("hex");
  //Printing the output on the console
  console.log("hmac : " + gen_hmac);
  return gen_hmac;
};

// Sign-up function starts here. . .
app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;
  var password = getHash(pass, phone);

  var data = {
    name: name,
    email: email,
    password: password,
    phone: phone,
  };

  //   mongo.connect(new_db, function (error, db) {
  //     if (error) {
  //       throw error;
  //     }
  //     console.log("connected to database successfully");
  //     //CREATING A COLLECTION IN MONGODB USING NODE.JS
  //     db.collection("details").insertOne(data, (err, collection) => {
  //       if (err) throw err;
  //       console.log("Record inserted successfully");
  //       console.log(collection);
  //     });
  //   });
  async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("documents");

    // the following code examples can be pasted here...

    return "done.";
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

  console.log("DATA is " + JSON.stringify(data));
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  return res.redirect("/public/success.html");
});
