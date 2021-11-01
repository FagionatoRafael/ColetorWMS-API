const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 8080;
if(PORT === 8080) {
    require('dotenv').config()
}
 
function Collection() {
    const url = process.env.URL || '';
    const client = new MongoClient(url);

    const dbName = process.env.DBNAME || '';
    client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection(process.env.COLLECTIONNAME || '');
    return collection
}

module.exports = Collection()