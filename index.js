const Reader = require("./lib/utilis/Readers");
//const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json");
console.log(explorers);