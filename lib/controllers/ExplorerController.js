const FizzbuzzService = require("../services/FizzbuzzService");
const ExplorerService = require("../services/ExplorerService");
const Reader = require("../../lib/utilis/Readers");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filter = ExplorerService.filterByMission(explorers,mission);
        return filter;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const filterusername = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return filterusername;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const totalexplorers = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return totalexplorers;
    }
}


module.exports = ExplorerController;