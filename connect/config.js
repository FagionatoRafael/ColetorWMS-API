const { MongoClient } = require('mongodb');
const envs = require('../config')
 
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