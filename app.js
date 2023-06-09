const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Mahesh@2001',
//     database:'releases_db'
// })
connection.connect(function (err) { 
    if (err) throw err;
    console.log("connection is established");

}
)
app.listen(port, () => { 
    console.log(`server stared at ${port}`);
})
app.get("/", (req, res)=>{ 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.post("/", (req, res) => { 
    var postData = req.body;
    delete postData.submit;
    // connection.query('INSERT INTO releases SET?', postData, function (err, results) { 
    //     if (err) throw err;
    //     console.log("last record inserted at:", results.insertID);
    // })
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