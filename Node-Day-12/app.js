const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";

async function main() {
  // Use connect method to connect to the server
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = client.db().collection("collection");

  // the following code examples can be pasted here..

  try {
    await collection.insertOne({ _id: 1 });
    await collection.insertOne({ _id: 1 }); // duplicate key error
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
  }

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
