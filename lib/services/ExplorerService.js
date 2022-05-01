class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const getAmountofExploererByMission = this.filterByMission(explorers,mission);
        return getAmountofExploererByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const byMission = this.filterByMission(explorers, mission);
        const listUsernames = byMission.map((explorer) => explorer.githubUsername);
        return listUsernames;
    }
}


module.exports = ExplorerService;