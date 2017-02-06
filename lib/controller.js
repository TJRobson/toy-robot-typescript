"use strict";
var process = require("process");
var robot_1 = require("./robot");
var Command = (function () {
    function Command(table) {
        this.table = table;
    }
    Command.prototype.execute = function (command) {
        if (this.robot) {
            switch (command) {
                case 'LEFT':
                    this.robot.turnLeft();
                    break;
                case 'RIGHT':
                    this.robot.turnRight();
                    break;
                case 'MOVE':
                    this.robot.move();
                    break;
                case 'REPORT':
                    process.stdout.write(this.robot.toString() + '\n');
                    break;
                default:
            }
        }
        if (command === 'PLACE' && !this.robot) {
            this.robot = new robot_1["default"]({ position: { x: 3, y: 3 }, direction: 1 });
        }
    };
    return Command;
}());
exports.__esModule = true;
exports["default"] = Command;
//# sourceMappingURL=controller.js.map