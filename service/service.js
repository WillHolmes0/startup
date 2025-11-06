const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cookieParser())

const users = [];
const stories = {};
const storyIDs = [];

const port  = process.argv.length > 2 ? process.argv[2] : 3000;

app.post('/api/auth', async (req, res) => {
    if (getUser('email', req.body.email)) {
        res.status(409).send({ msg: "email already taken"});
    } else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user);
        res.send({ email: user.email});
    }
});

app.put('/api/auth', async (req, res) => {
    const user = getUser('email', req.body.email);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user);
        res.send({email: user.email});
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
});

app.delete('api/auth', (req, res) => {
    const token = req.cookies['token'];
    const user = getUser('token', token);
    if (user) {
        clearAuthCookie(res, user);
    }
    res.send({});
})

app.get('/api/user/me', (req, res) => {
    const token = req.cookies['token'];
    const user = getUser('token', token);
    if (user) {
        res.send({email: user.email});
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
});

app.post('/api/story', (req, res) => {
    stories[req.body.idKey] = req.body.story;
    storyIDs.push(req.body.idKey);
    res.send({idKey: req.body.idKey});
});

app.get('/api/story', (req, res) => {
    const storyID = req.query.storyID;
    const story = stories[storyID];
    res.send({story});
});

app.get('/api/storyKeys', (req, res) => {
    res.send({storyIDs});
})

app.put('/api/stories/likes', (req, res) => {
    stories[req.body.storyID].likes = req.body.likes;
    res.send(stories[req.body.storyID].likes);
});

app.put('/api/comments', (req, res) => {
    stories[req.body.storyID].comments.push(req.body.comment);
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

    res.cookie('token', user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    });
}

function clearAuthCookie(res, user) {
    delete user.token;
    res.clearCookie('token');
}



