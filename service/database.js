const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const storiesCollection = db.collection('stories');

testConnection();

async function testConnection() {
    try {
        await db.command({ ping : 1});
        console.log("Connected to Database");
    } catch (e) {
        console.log("Error trying to reach database");
        console.log(e);
        process.exit(1);
    }
}

async function postStory(story) {
    console.log("in post story");
    await storiesCollection.insertOne(story);
}

module.exports = {
    postStory
};