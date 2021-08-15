const fs = require("fs")
class Model {

    constructor(modelName) {
        this.name = modelName;
        this.collection = modelName + 's';
    }

    async find(id) {
        const usuarios = await loadCollection(this.collection);
        if (id) {
            usuarios = usuarios.find(u => u.id === id);
        }
        return usuarios;
    }

    async save(doc) {
        console.log("Goin to save " + this.name + " in " + this.collection + " collections");
        let obj = await saveCollection(this.collection, doc);
        return true;
    }
}

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


module.exports = Model;