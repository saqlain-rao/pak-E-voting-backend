const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://saqlainrao211_db_user:HJvTaSJWCzQ9Gn8p@cluster0.jv7ili2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
