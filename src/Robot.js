class Robot {
    constructor(table) {
        this._table = table;
    }

    canPlace(xPos, yPos) {
        if (xPos < this._table.x && yPos < this._table.y) {
            return true;
        }
        return false;
    }

    place(xPos, yPos, facing) {
        this.x = parseInt(xPos)
        this.y = parseInt(yPos)
        this.facing = facing
    }

    move() {
        let facing = this.facing;

        switch (facing) {
            case 'NORTH':
                if (this.y < (this._table.y - 1)) {
                    this.y += 1
                }
                break;

            case 'SOUTH':
                if (this.y > 0) {
                    this.y -= 1
                }
                break;

            case 'EAST':
                if (this.x < (this._table.x - 1)) {
                    this.x += 1
                }
                break;

            case 'WEST':
                if (this.x > 0) {
                    this.x -= 1
                }
                break;
        }
    }

    rotate(newFacing) {
        switch (this.facing) {
            case 'NORTH':
                this.facing = (newFacing === 'LEFT') ? 'WEST' : 'EAST'
                break;

            case 'SOUTH':
                this.facing = (newFacing === 'LEFT') ? 'EAST' : 'WEST'
                break;

            case 'EAST':
                this.facing = (newFacing === 'LEFT') ? 'NORTH' : 'SOUTH'
                break;

            case 'WEST':
                this.facing = (newFacing === 'LEFT') ? 'SOUTH' : 'NORTH'
                break;
        }
    }
};

module.exports = {
    Robot: Robot
};