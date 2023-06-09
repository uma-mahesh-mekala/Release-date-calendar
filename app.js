const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;
app.listen(port, () => { 
    console.log(`server stared at ${port}`);
})
app.get("/", (req, res)=>{ 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.post("/", (req, res) => { 
    var postData = req.body;
    delete postData.submit;
    var artistName = req.body.artistName;
    var songTitle = req.body.songTitle;
    var date = (req.body.date).split('-').reverse().join('-h');
    var genre = req.body.genre;
    var url = req.body.url;
    var recordLabel = req.body.recordLabel;
    var image = req.body.image;
    console.log(artistName, songTitle, date, genre, url, recordLabel, image);
    setTimeout(function () {
        res.sendFile("/")
    }, 1000);

})