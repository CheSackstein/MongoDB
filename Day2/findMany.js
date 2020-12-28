const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Che:Cheche2012@cluster0.mox7t.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("users").collection("users_info");
  // perform actions on the collection object
  client.close();
});
const dbName = "users";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection named "users"
    const collection = db.collection("users_info");

    updated_users = await collection.updateMany(
      {
        last: "Doe",
      },
      { $set: { first: "Joe" } }
    );
    console.log(updated_users);

    all_db_users = await collection.find({});
    all_db_users.forEach((user) => {
      console.log(user);
    });
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);