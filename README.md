# Toy Robot Simulator
A toy robot simulator written in Node.js

## System Requirements
- NodeJS
- NPM

## Installation
- Install node and npm globally
- Navigate to the root directory `TOY_ROBOT`
- Run the following command to install other dependencies
```
npm install
```
## Running unit tests
```
npm test
```
**NOTE-** If tests are running on Linux or Mac machine then the following file paths needs to be updated in `InputFileSpec.js`
```
var validFile = ".\\Tests\\test_data.txt";
var invalidFile = ".\\Tests\\invalid_data.txt";
```
## Running application with sample data
Run the application through CLI
```
node app.js ./Commands/data_1.txt
node app.js ./Commands/data_2.txt
node app.js ./Commands/data_3.txt
node app.js ./Commands/data_4.txt
```
## Assumptions
- Default table is initialised to (5,5)
- Table will be instantiated with positive coordinates
- PLACE command will contain 3 arguments in X,Y,F format
- Valid file path is passed to `node app.js <FILE_PATH>` while runnning application 