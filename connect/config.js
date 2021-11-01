const { MongoClient } = require('mongodb');
const envs = require('../config')
const PORT = process.env.PORT || 8080;
if(PORT === 8080) {
    require('dotenv').config()
}
 
function Collection() {
    const url = envs.URL || '';
    const client = new MongoClient(url);

    const dbName = envs.DBNAME || '';
    client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection(envs.COLLECTIONNAME || '');
    return collection
}

module.exports = Collection()