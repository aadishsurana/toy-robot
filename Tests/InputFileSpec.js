const { expect } = require('chai');

var InputFile = require('../src/InputFile').InputFile;
var validFile = ".\\Tests\\test_data.txt";
var invalidFile = ".\\Tests\\invalid_data.txt";
let Input;

describe("InputFile", () => {
    beforeEach(() => {
        Input = new InputFile(validFile);
    });

    it("should read the file contents", () => {
        expect(Input.fileCommands).to.not.be.empty;
    });

    it("should contain PLACE command as the first line in file", () => {
        expect(Input.isValidFirstCommand()).to.be.true;
    });

    describe("Invalid Command", () => {
        beforeEach(() => {
            Input = new InputFile(invalidFile);
        });

        it("should not contain PLACE command as the first line in file", () => {
            expect(Input.isValidFirstCommand()).to.be.false;
        });
    });

    it("should get param values for the PLACE command", () => {
        expect(Input.fileOutput()[0].params).to.deep.equal(['0', '0', 'SOUTH']);
    });

    it("should get MOVE command from file without any params", () => {
        expect(Input.fileOutput()[2].name).to.be.equal("MOVE");        
        expect(Input.fileOutput()[2].params).to.be.undefined;        
    });
});

