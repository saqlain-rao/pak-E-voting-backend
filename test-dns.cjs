const dns = require('dns');

const originalResolveSrv = dns.resolveSrv;
const originalLookup = dns.lookup;
const originalPromisesResolveSrv = dns.promises.resolveSrv;
const originalPromisesLookup = dns.promises.lookup;

const srvRecords = [
  { name: 'ac-vngm77b-shard-00-00.jv7ili2.mongodb.net', port: 27017, priority: 1, weight: 1 },
  { name: 'ac-vngm77b-shard-00-01.jv7ili2.mongodb.net', port: 27017, priority: 1, weight: 1 },
  { name: 'ac-vngm77b-shard-00-02.jv7ili2.mongodb.net', port: 27017, priority: 1, weight: 1 }
];

dns.resolveSrv = (hostname, callback) => {
  if (hostname === '_mongodb._tcp.cluster0.jv7ili2.mongodb.net') {
    return callback(null, srvRecords);
  }
  return originalResolveSrv(hostname, callback);
};

dns.promises.resolveSrv = async (hostname) => {
  if (hostname === '_mongodb._tcp.cluster0.jv7ili2.mongodb.net') {
    return srvRecords;
  }
  return originalPromisesResolveSrv(hostname);
};

const ipMap = {
  'ac-vngm77b-shard-00-00.jv7ili2.mongodb.net': '159.41.246.187',
  'ac-vngm77b-shard-00-01.jv7ili2.mongodb.net': '159.41.176.155',
  'ac-vngm77b-shard-00-02.jv7ili2.mongodb.net': '159.41.160.94',
  'cluster0.jv7ili2.mongodb.net': '159.41.246.187'
};

dns.lookup = function(hostname, options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }
  if (ipMap[hostname]) {
    return callback(null, ipMap[hostname], 4);
  }
  return originalLookup(hostname, options, callback);
};

dns.promises.lookup = async function(hostname, options) {
  if (ipMap[hostname]) {
    return { address: ipMap[hostname], family: 4 };
  }
  return originalPromisesLookup(hostname, options);
};

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
