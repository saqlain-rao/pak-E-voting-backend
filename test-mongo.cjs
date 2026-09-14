const { MongoClient } = require('mongodb');
const uri = "mongodb://saqlainrao211_db_user:HJvTaSJWCzQ9Gn8p@159.41.246.187:27017,159.41.176.155:27017,159.41.160.94:27017/?ssl=true&authSource=admin&replicaSet=atlas-jv7ili-shard-0&retryWrites=true&w=majority&appName=Cluster0&tlsAllowInvalidHostnames=true";
const client = new MongoClient(uri, {
  servername: 'ac-vngm77b-shard-00-00.jv7ili2.mongodb.net'
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
