if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("dotenv").config();
const { config } = require("dotenv");
const express = require("express");
var app = express();
const port = 5000;

const mongoose = require("mongoose");

const users = [
  { username: "Me", password: "Me" },

  { username: "Me2", password: "Me2" },
];
var cors = require("cors");

app.use(cors());
app.use(express.json());


const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                            
const url =  "mongodb+srv://Che:Cheche2012@cluster0.mox7t.mongodb.net/people?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
         console.log(personDocument)
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        
        await client.close();
    }
}

run().catch(console.dir);

