const { expect } = require('chai');

var Robot = require('../src/Robot').Robot;
var Table = require('../src/Table').Table;

describe("Robot", () => {
    let robot;

    beforeEach(() => {
        robot = new Robot(new Table(5, 5));
    });

    it("should successfully place robot at (4,4) facing SOUTH", () => {
        robot.place(4, 4, "SOUTH");
        expect(robot.canPlace(4,4)).to.be.true;
        expect(robot.x).to.be.equal(4);
        expect(robot.y).to.be.equal(4);
        expect(robot.facing).to.be.equal('SOUTH');
    });

    it("should not place robot when positioned outside of table", () => {
        expect(robot.canPlace(5,5)).to.be.false;
    });

    it("should move robot from (2,2) facing NORTH to (2,4) facing NORTH within table", () => {
        robot.place(2, 2, "NORTH");
        robot.move();
        robot.move();
        expect(robot.x).to.be.equal(2);
        expect(robot.y).to.be.equal(4);
        expect(robot.facing).to.be.equal('NORTH');
    });

    it("should move robot from (2,2) facing SOUTH to (2,0) facing SOUTH within table", () => {
        robot.place(2, 2, "SOUTH");
        robot.move();
        robot.move();
        expect(robot.x).to.be.equal(2);
        expect(robot.y).to.be.equal(0);
        expect(robot.facing).to.be.equal('SOUTH');
    });

    it("should move robot from (2,2) facing EAST to (4,2) facing EAST within table", () => {
        robot.place(2, 2, "EAST");
        robot.move();
        robot.move();
        expect(robot.x).to.be.equal(4);
        expect(robot.y).to.be.equal(2);
        expect(robot.facing).to.be.equal('EAST');
    });

    it("should move robot from (2,2) facing WEST to (1,2) facing WEST within table", () => {
        robot.place(2, 2, "WEST");
        robot.move();
        expect(robot.x).to.be.equal(1);
        expect(robot.y).to.be.equal(2);
        expect(robot.facing).to.be.equal('WEST');
    });

    describe("Avoid fall", () => {
        it("should not move robot from (0,0) facing SOUTH to avoid fall", () => {
            robot.place(0, 0, "SOUTH");
            robot.move();
            expect(robot.x).to.be.equal(0);
            expect(robot.y).to.be.equal(0);
            expect(robot.facing).to.be.equal('SOUTH');
        });

        it("should not move robot from (4, 0) facing EAST to avoid fall", () => {
            robot.place(4, 0, "EAST");
            robot.move();
            expect(robot.x).to.be.equal(4);
            expect(robot.y).to.be.equal(0);
            expect(robot.facing).to.be.equal('EAST');
        });

        it("should not move robot from (0,0) facing WEST to avoid fall", () => {
            robot.place(0, 0, "WEST");
            robot.move();
            expect(robot.x).to.be.equal(0);
            expect(robot.y).to.be.equal(0);
            expect(robot.facing).to.be.equal('WEST');
        });

        it("should not move robot from (4,4) facing NORTH to avoid fall", () => {
            robot.place(4, 4, "NORTH");
            robot.move();
            expect(robot.x).to.be.equal(4);
            expect(robot.y).to.be.equal(4);
            expect(robot.facing).to.be.equal('NORTH');
        });
    });

    describe("Change direction", () => {
        it("should change direction from NORTH to WEST when turned LEFT", () => {
            robot.place(0, 0, "NORTH");
            robot.rotate('LEFT');
            expect(robot.facing).to.be.equal('WEST');
        });

        it("should change direction from NORTH to EAST when turned RIGHT", () => {
            robot.place(0, 0, "NORTH");
            robot.rotate('RIGHT');
            expect(robot.facing).to.be.equal('EAST');
        });

        it("should change direction from SOUTH to EAST when turned LEFT", () => {
            robot.place(0, 0, "SOUTH");
            robot.rotate('LEFT');
            expect(robot.facing).to.be.equal('EAST');
        });

        it("should change direction from SOUTH to WEST when turned RIGHT", () => {
            robot.place(0, 0, "SOUTH");
            robot.rotate('RIGHT');
            expect(robot.facing).to.be.equal('WEST');
        });

        it("should change direction from WEST to SOUTH when turned LEFT", () => {
            robot.place(0, 0, "WEST");
            robot.rotate('LEFT');
            expect(robot.facing).to.be.equal('SOUTH');
        });

        it("should change direction from WEST to NORTH when turned RIGHT", () => {
            robot.place(0, 0, "WEST");
            robot.rotate('RIGHT');
            expect(robot.facing).to.be.equal('NORTH');
        });

        it("should change direction from EAST to NORTH when turned LEFT", () => {
            robot.place(0, 0, "EAST");
            robot.rotate('LEFT');
            expect(robot.facing).to.be.equal('NORTH');
        });

        it("should change direction from EAST to SOUTH when turned RIGHT", () => {
            robot.place(0, 0, "EAST");
            robot.rotate('RIGHT');
            expect(robot.facing).to.be.equal('SOUTH');
        });
    });

    it("should move from (1,1) facing NORTH and turned RIGHT to (3,1) facing EAST", () => {
        robot.place(1, 1, "NORTH");
        robot.rotate('RIGHT');
        robot.move();
        robot.move();
        expect(robot.x).to.be.equal(3);
        expect(robot.y).to.be.equal(1);
        expect(robot.facing).to.be.equal('EAST');
    });

    it("should skip the command which leads to fall of robot and execute the next valid command", () => {
        robot.place(4, 4, "NORTH");
        robot.rotate('RIGHT');
        robot.move();
        expect(robot.x).to.be.equal(4);
        expect(robot.y).to.be.equal(4);
        expect(robot.facing).to.be.equal('EAST');

        robot.rotate('RIGHT');
        robot.move();
        expect(robot.x).to.be.equal(4);
        expect(robot.y).to.be.equal(3);
        expect(robot.facing).to.be.equal('SOUTH');
    });
})