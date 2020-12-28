const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection stri;


//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Che:Cheche2012@cluster0.mox7t.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("users").collection("users_info");
  // perform actions on the collection object
  client.close();
});
// The database to use
const dbName = "users";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection named "users"
    const users_collection = db.collection("users_info");

    // Get all users
 
    
 const  userDocuments =[ { _id: '5fa406ec3f4b71a70ae05dab', first: 'Jane', last: 'Doe' },
{ FirstName: 'Jane', LastName: 'Doe', Phone: '045 678 1234', Email:'janedoe@gmail.com', password:'cheese123', passwordConfirm:'cheese123'},
{ FirstName: 'John', LastName: 'Doe', Phone: '087 678 1234', Email:'johndoe@gmail.com', password:'ckhkj123', passwordConfirm:'ckhkj123'},
{ FirstName: 'Jack', LastName: 'Hill', Phone: '089 678 1234', Email:'jackhill@gmail.com', password:'bluepurple', passwordConfirm:'bluepurple' },
{ FirstName: 'Jill', LastName: 'Hill', Phone: '074 678 1234', Email:'jillhill@gmail.com', password:'cheese123', passwordConfirm:'cheese123' }  ]
 

users_collection.insertMany(userDocuments);
console.log(newUserDB);   


  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);