const { expect } = require('chai');

var Table = require('../src/Table').Table;

describe("Table", () => {
    it("should initialise table of 5x5 dimension", () => {
        let table = new Table(5, 5);
        expect(table.x).to.equal(5);
        expect(table.y).to.equal(5);
    });
});