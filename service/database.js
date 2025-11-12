const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const storiesCollection = db.collection('stories');
const usersCollection = db.collection('users');

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

async function addUser(user) {
    await usersCollection.insertOne(user);
}

async function getUser(querey) {
    return await usersCollection.findOne(querey);
}

async function updateUser(user) {
    await usersCollection.updateOne({email: user.email}, {$set : user});
}

async function postStory(story) {
    await storiesCollection.insertOne(story);
}

async function getStory(storyID) {
    const storyObjectID = new ObjectId(storyID);
    const story = await storiesCollection.findOne({_id : storyObjectID});
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

async function updateLikes(storyID, newLikes) {
    const storyObjectID = new ObjectId(storyID);
    await storiesCollection.updateOne({_id: storyObjectID}, {$set : {likes: newLikes}});
    const retrievedLikes = await storiesCollection.findOne({_id: storyObjectID});
    return retrievedLikes.likes;
}

async function addComment(storyID, comment) {
    const storyObjectID = new ObjectId(storyID);
    const story = await storiesCollection.findOne({_id : storyObjectID});
    const allComments = story.comments;
    allComments.push(comment);
    await storiesCollection.updateOne({_id: storyObjectID}, {$set: {comments: allComments}});
}

module.exports = {
    postStory,
    getStory,
    getStoryKeys,
    updateLikes,
    addComment,
    getUser,
    addUser,
    updateUser
};