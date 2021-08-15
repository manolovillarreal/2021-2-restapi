const fs = require("fs")

const loadCollection = async(collectionName) => {
    let collection = [];
    try {
        collection = require(`./db/${collectionName}.json`);
    } catch (error) {

    }

    return collection;
}
const saveCollection = async(collectionName, doc) => {
    let collection = await loadCollection(collectionName);
    collection.push(doc);
    let data = JSON.stringify(collection);
    console.log(__dirname);
    fs.writeFile(`./jsonDB/db/${collectionName}.json`, data, (err) => {
        if (err) {
            console.log(err.message);
            throw new Error(`Error guardando el archivo ${collectionName}.json`);
        } else {
            console.log("Save OK");
            return
        }
    })
}

exports.modules = {
    loadCollection,
    saveCollection
}