const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { uuid } = require("uuidv4");

const users = require("./Data/user.json")
const watched = require("./Data/watched.json")
const bookmarks = require("./Data/bookmarks.json")

const app = express();
const port = 5500;

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

function checkForDuplicates(prev, cur){
    for(let ele in prev){
        if(prev[ele].movie_id === cur.movie_id){
            return true;
        }
    }
    return false;
}

app.get("/", (req, res) => {
    res.json(users);
})

app.post('/login', (req, res) => {
    const user = users.find(user => user.username === req.body.username);
    if (user && user.password === req.body.password) {
        return res.status(200).json({"status": "User Loged in successfully"})
    }
    return res.status(400).json({"status": "Invalid User Credentials"});
})

app.post("/signup", (req, res) => {
    const newUser = req.body;
    newUser.id = uuid();
    const duplicateUser = users.find(user => user.username === req.body.username);
    if(duplicateUser){
        return res.status(400).json({"status": "Username already in use"})
    }
    users.push(newUser);
    return res.status(200).json(newUser);
})

app.post("/watchlist/:username", (req, res) => {
    const username = req.params.username;
    const prev_watchlist = watched.filter(user => user.username === username);
    const new_movie = req.body;
    if(checkForDuplicates(prev_watchlist, new_movie)){
        return res.status(400).json({"status": "Movie is already in watchlist"});
    }
    watched.push(req.body)
    return res.status(200).json({"status": "Movie added to watchlist"})
})

app.get("/watchlist/:username", (req, res) => {
    const username = req.params.username;
    const userWatchList = watched.filter(user => user.username === username);
    return res.status(200).json(userWatchList); 
})

app.post("/bookmarks/:username", (req, res) => {
    const username = req.params.username;
    const prev_bookmarks = bookmarks.filter(user => user.username === username);
    const new_movie = req.body;
    if(checkForDuplicates(prev_bookmarks, new_movie)){
        return res.status(400).json({"status": "Movie is already in bookmarks"});
    }
    bookmarks.push(req.body)
    return res.status(200).json({"status": "Movie added to bookmarks"})
})

app.get("/bookmarks/:username", (req, res) => {
    const username = req.params.username;
    const userBookmarks = bookmarks.filter(user => user.username === username);
    return res.status(200).json(userBookmarks); 
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
})