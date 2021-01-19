// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(`Server listening. Running on ${port}`);
}

//sends projectData object upon get request
app.get('/all', function (req, res) {
    res.send(projectData);
  });

//posts data as explained in addData function below
app.post('/add', addData);

//opted to pull only required data 
function addData(req, res){
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.journalEntry = req.body.content;
    res.send(projectData);
}
