const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const db = require('./database.js');

const app = express();
app.use(express.json());
app.use(cookieParser())
//Express middleware
app.use(express.static('public'));

const users = [];
const stories = {};
const storyIDs = [];
const authCookieName = 'userToken';

const port  = process.argv.length > 2 ? process.argv[2] : 4000;

//midpoint
const verifyAuth = async (req, res, next) => {
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized'});
    }
}

//register user
app.post('/api/auth', async (req, res) => {
    if (getUser('email', req.body.email)) {
        res.status(409).send({ msg: "email already taken"});
    } else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user);
        res.status(204).end();
    }
});

//login user
app.put('/api/auth', async (req, res) => {
    const user = getUser('email', req.body.email);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user);
        res.status(204).end();
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
});

//logout user
app.delete('/api/auth', verifyAuth, (req, res) => {
    const user = getUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    clearAuthCookie(res, user);
    res.status(204).end();
})

//post story
app.post('/api/story', verifyAuth, (req, res) => {
    stories[req.body.idKey] = req.body.story;
    storyIDs.push(req.body.idKey);
    res.send({idKey: req.body.idKey});
    db.postStory(req.body.story);
});

//retrieve story
app.get('/api/story', verifyAuth, (req, res) => {
    const storyID = req.query.storyID;
    const story = stories[storyID];
    res.send({story});
});

//get story keys
//get the keys that can identify stories in the stories map
app.get('/api/storyKeys', verifyAuth, (req, res) => {
    res.send({storyIDs});
})

//update the likes of a story
app.put('/api/stories/likes', verifyAuth, (req, res) => {
    stories[req.body.storyID].likes = req.body.likes;
    res.send(stories[req.body.storyID].likes);
});

//add a comment to a story
app.put('/api/comments', verifyAuth, (req, res) => {
    stories[req.body.storyID].comments.push(req.body.comment);
    res.status(204).end();
});


 
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    user = {
        email: email,
        password: passwordHash
    };
    users.push(user);
    return user;
}

function getUser(field, value) {
    if (value) {
        return users.find((user) => user[field] === value);
    }
}

function setAuthCookie(res, user) {
    user.token = uuid.v4();

    res.cookie(authCookieName, user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    });
}

function clearAuthCookie(res, user) {
    delete user.token;
    res.clearCookie(authCookieName);
}




