const ExplorerController = require("./controllers/ExplorerController");
const express = require('express');
const { response } = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({message: "FizzBuzz Api welcome!"});
});

app.get('/v1/explorers/:mission', (req,res) =>{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});