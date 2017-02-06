"use strict";
var process = require("process");
var readline_1 = require("readline");
var controller_1 = require("./controller");
var table_top_1 = require("./table-top");
var table = new table_top_1["default"]();
var controller = new controller_1["default"](table);
var rlOptions = {
    input: process.stdin,
    output: process.stdout,
    terminal: false
};
process.stdout.write('Valid commands: PLACE, LEFT, RIGHT, MOVE, REPORT.\n');
var rl = readline_1.createInterface(rlOptions);
rl.prompt(true);
rl.on('line', function (line) {
    controller.execute(line);
    rl.prompt(true);
});
//# sourceMappingURL=main.js.map