const { MongoClient } = require('mongodb');
const uri = "mongodb://saqlainrao211_db_user:HJvTaSJWCzQ9Gn8p@ac-vngm77b-shard-00-00.jv7ili2.mongodb.net:27017,ac-vngm77b-shard-00-01.jv7ili2.mongodb.net:27017,ac-vngm77b-shard-00-02.jv7ili2.mongodb.net:27017/voting-system?ssl=true&replicaSet=atlas-jv7ili-shard-0&authSource=admin&retryWrites=true&w=majority";
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
