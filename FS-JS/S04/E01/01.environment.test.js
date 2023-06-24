const request = require("supertest");
const { expect } = require("../../../test");
const app = require("./01.environment");

describe("S04E01 - 01.environment", () => {
    it("should serve on port 4100", async () => {
        const response = await request(app).get("/");
        
        expect(response.text).to.equal("You reached the / route on the port 4100");
    });
});
