const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
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
    await storiesCollection.insertOne(story);
}

async function getStory(storyID) {
    console.log(storyID);
    const storyObjectID = new ObjectId(storyID);
    const story = await storiesCollection.findOne({_id : storyObjectID});
    console.log(story);
    return story;
}

async function getStoryKeys() {
    const storyIDs = [];
    const stories = await storiesCollection.find({}, {_id : 1}).toArray();
    for (const story in stories) {
        storyIDs.push(stories[story]._id);
    }
    return storyIDs;
}

module.exports = {
    postStory,
    getStory,
    getStoryKeys,
};