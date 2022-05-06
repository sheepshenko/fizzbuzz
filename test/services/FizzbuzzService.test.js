const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("../../lib/utilis/Readers");

const explorers = Reader.readJsonFile("explorers.json");

describe("Test para metodos en ExplorerService", () => {
    test("Validar Score 1", () => {             
        const explorer1 = {name: "Explorer 1", score: 1}
        const score = FizzbuzzService.applyVAlidationInExplorer(explorer1);
        expect(score.trick).toBe(1);
    });

    test("Validar Score 3", () => {
        const explorer3 = {name: "Explorer 3", score: 3}
        const score = FizzbuzzService.applyVAlidationInExplorer(explorer3);
        expect(score.trick).toBe('FIZZ');
    });

    test("Validar Score 5", () => {
        const explorer5 = {name: "Explorer 5", score: 5}
        const score = FizzbuzzService.applyVAlidationInExplorer(explorer5);
        expect(score.trick).toBe('BUZZ');
    });

    ttest("Validar Score 15", () => {
        const explorer15 = {name: "Explorer 15", score: 15}
        const score = FizzbuzzService.applyVAlidationInExplorer(explorer15);
        expect(score.trick).toBe('FIZZBUZZ');
    });

});