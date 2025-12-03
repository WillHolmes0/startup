const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const db = require('./database.js');
const peerProxy = require('./peerProxy.js').peerProxy;

const app = express();
app.use(express.json());
app.use(cookieParser())
//Express middleware
app.use(express.static('public'));

const authCookieName = 'userToken';

const port  = process.argv.length > 2 ? process.argv[2] : 4000;

//midpoint
const verifyAuth = async (req, res, next) => {
    const user = await db.getUser({token: req.cookies[authCookieName]});
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized'});
    }
}

//register user
app.post('/api/auth', async (req, res) => {
    if (await db.getUser({email: req.body.email})) {
        res.status(409).send({ msg: "email already taken"});
    } else {
        const user = await createUser(req.body.email, req.body.password);
        db.addUser(user)
            .then(() =>
                setAuthCookie(res, user)
            )
            .then(() => 
                res.status(204).end()
            );
    }
});

//login user
app.put('/api/auth', async (req, res) => {
    const user = await db.getUser({email: req.body.email});
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user)
        .then(() => 
            res.status(204).end()
        );
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
});

//logout user
app.delete('/api/auth', verifyAuth, (req, res) => {
    res.clearCookie(authCookieName).status(204).end();
});

//post story
app.post('/api/story', verifyAuth, (req, res) => {
    db.postStory(req.body.story)
        .then(() => res.status(204).end()
    );
});

//retrieve story
app.get('/api/story', verifyAuth, (req, res) => {
    db.getStory(req.query.storyID)
        .then((story) => res.send({story})
    );
});

//get story keys
//get the keys that can identify stories in the stories map
app.get('/api/storyKeys', verifyAuth, (req, res) => {
    db.getStoryKeys()
        .then((storyIDs) => {
            res.send({storyIDs});
        });
})

//update the likes of a story
app.put('/api/stories/likes', verifyAuth, (req, res) => {
    db.updateLikes(req.body.storyID, req.body.likes)
        .then((result) => res.send({result})
    );
});

//add a comment to a story
app.put('/api/comments', verifyAuth, (req, res) => {
    db.addComment(req.body.storyID, req.body.comment)
        .then(() => 
            res.status(204).end()
        );
});


 
httpService = app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    user = {
        email: email,
        password: passwordHash
    };
    return user;
}

async function setAuthCookie(res, user) {
    user.token = uuid.v4();
    await db.updateUser(user);
    res.cookie(authCookieName, user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    });
}

peerProxy(httpService);




