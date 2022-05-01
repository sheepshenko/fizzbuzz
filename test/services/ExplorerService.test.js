const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utilis/Readers");

const explorers = Reader.readJsonFile("explorers.json");

describe("Test para metodos en ExplorerService", () => {
    test("Filtrar por mission", () => {
        const mission = ExplorerService.filterByMission(explorers, "node");
        expect(mission).toEqual([{"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1", "score": 1, "stacks": ["javascript", "reasonML", "elm"]}, {"githubUsername": "ajolonauta2", "mission": "node", "name": "Woopa2", "score": 2, "stacks": ["javascript", "groovy", "elm"]}, {"githubUsername": "ajolonauta3", "mission": "node", "name": "Woopa3", "score": 3, "stacks": ["elixir", "groovy", "reasonML"]}, {"githubUsername": "ajolonauta4", "mission": "node", "name": "Woopa4", "score": 4, "stacks": ["javascript"]}, {"githubUsername": "ajolonauta5", "mission": "node", "name": "Woopa5", "score": 5, "stacks": ["javascript", "elixir", "elm"]}, {"githubUsername": "ajolonauta11", "mission": "node", "name": "Woopa11", "score": 11, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta12", "mission": "node", "name": "Woopa12", "score": 12, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta13", "mission": "node", "name": "Woopa13", "score": 13, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14", "mission": "node", "name": "Woopa14", "score": 14, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta15", "mission": "node", "name": "Woopa15", "score": 15, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}]);
    });

    test("Contar el numero de explorers por mission", () => {
        const mission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(mission).toBe(10);
    });

    test("Lista de usernames de explorers por mission", () => {
        const mission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(mission).toContain("ajolonauta1");
    });
});