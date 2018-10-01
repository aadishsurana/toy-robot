var fs = require('fs');

class InputFile {
    constructor(fileName) {
        this.fileCommands = fs.readFileSync(fileName).toString().split("\n")
    }

    isValidFirstCommand() {
        let firstCommand = this.fileCommands[0].toUpperCase();
        let commandDetails = firstCommand.split(" ");
        if (commandDetails[0] === "PLACE") {
            return true;
        }
        return false;
    }

    /**
     * Read the File contents and get individual commands 
     */
    fileOutput() {
        let commands = [];
        this.fileCommands.forEach(line => {
            let values = line.trim().split(" ");
            let name = values[0].toUpperCase();
            let params = values[1];
            if (params) {
                params = values[1].split(",");
            }

            commands.push({
                name: name,
                params: params
            })
        });
        return commands;
    }
}

module.exports = {
    InputFile: InputFile
}; 