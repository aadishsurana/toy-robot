var InputFile = require('./src/InputFile').InputFile
var Robot = require('./src/Robot').Robot
var Table = require('./src/Table').Table

var args = process.argv.slice(2);

if (args.length > 0) {
    let filePath = args[0];
    let contents = new InputFile(filePath);

    let commands = contents.fileOutput();

    let robot = new Robot(new Table(5, 5));

    if (contents.isValidFirstCommand()) {
        for (let command of commands) {
            let commandName = command.name

            /**
             * Check if robot is placed within the table boundaries
             */
            if (commandName === 'PLACE' && robot.canPlace(command.params[0], command.params[1])) {
                let x = command.params[0]
                let y = command.params[1]
                let facing = command.params[2]
                robot.place(x, y, facing);
            }
            else if (commandName !== 'PLACE') {
                switch (commandName) {
                    case 'MOVE':
                        robot.move()
                        break;

                    case 'LEFT':
                    case 'RIGHT':
                        robot.rotate(commandName);
                        break;
                        
                    case 'REPORT':
                        console.log("\nOutput:" + robot.x + "," + robot.y + "," + robot.facing + "\n");
                        break;
                }
            }
            else {
                console.log("\nError: Robot is positioned out of the table\n");
                break;
            }
        }
    }
    else {
        console.log("\nError: First command should be PLACE command\n");
    }
}
else {
    console.log("\nError: Missing file path to execute\n");
}