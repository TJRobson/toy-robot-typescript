"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["NORTH"] = 0] = "NORTH";
    Directions[Directions["EAST"] = 1] = "EAST";
    Directions[Directions["SOUTH"] = 2] = "SOUTH";
    Directions[Directions["WEST"] = 3] = "WEST";
})(Directions = exports.Directions || (exports.Directions = {}));
var Robot = (function () {
    function Robot(options) {
        this.position = options.position;
        this.direction = options.direction;
    }
    Robot.prototype.turnLeft = function () {
        var newDirection = this.direction === 0 ? 3 : this.direction - 1;
        return this.direction = newDirection;
    };
    Robot.prototype.turnRight = function () {
        var newDirection = this.direction === 3 ? 0 : this.direction + 1;
        return this.direction = newDirection;
    };
    Robot.prototype.move = function () {
        switch (this.direction) {
            case 0:
                --this.position.y;
                break;
            case 1:
                ++this.position.x;
                break;
            case 2:
                ++this.position.y;
                break;
            case 3:
                --this.position.x;
                break;
            default:
        }
        return true;
    };
    Robot.prototype.toString = function () {
        return this.position.x + ", " + this.position.y + ", " + this.direction;
    };
    return Robot;
}());
exports.__esModule = true;
exports["default"] = Robot;
//# sourceMappingURL=robot.js.map