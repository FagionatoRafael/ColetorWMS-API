const collection = require('../connect/config')

const insertCollection = async (body) => {
    const insertResult = await collection.insertOne(body);
    return insertResult
    // console.log('Inserted documents =>', insertResult);
}

const findAllCollection = async () => {
    const findResult = await collection.find({}).toArray()
    // console.log('Found documents =>', findResult);
    return findResult
}

const deleteCollection = async (body) => {
    const deleteResult = await collection.deleteOne(body);
    console.log('Deleted documents =>', deleteResult);
    return deleteResult
}

module.exports = {insertCollection, findAllCollection, deleteCollection}