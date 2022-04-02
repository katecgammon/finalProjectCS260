const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb+srv://cs260:cs260password@cluster0.fw2fw.mongodb.net/hikes', {
  useNewUrlParser: true
});

  const db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error:"));
 db.once("open", function( ) {
     console.log("hurray! we connected");
 });
// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/hikes', async (req, res) => {
  const hike = new Hike({
    title: req.body.title,
    location: req.body.location,
    difficulty: req.body.difficulty,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await hike.save();
    res.send(hike);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
// Create a scheme for items in the museum: a title and a path to an image.
const hikeSchema = new mongoose.Schema({
  title: String,
  location: String,
  difficulty: String,
  description: String,
  path: String,
});

// Create a model for items in the museum.
const Hike = mongoose.model('Hike', hikeSchema);

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});


app.listen(4000, () => console.log('Server listening on port 4000!'));

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Get a list of all of the items in the museum.
app.get('/api/hikes', async (req, res) => {
  try {
    let hikes = await Hike.find();
    res.send(hikes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/hikes/:id', async (req, res) => {
  try {
    await Hike.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.put('/api/hikes/:id', async (req, res) => {
  try {
    let hike = await Hike.findOne({
      _id: req.params.id
    });
    hike.title = req.body.title;
    hike.location = req.body.location;
    hike.difficulty = req.body.difficulty;
    hike.description = req.body.description;
    hike.save();
    //To edit it, simply change its properties and then call item.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
