console.log("Version: " + require("./package.json").version);
console.log("©zaplatto.cz 2016");
var fs = require("fs");

console.log("Starting required services.");

//require("./modules/router.js");
var config = require("./config.json");
config.directory = __dirname;
config.database = config.directory + "\\" + config.db_name;
//console.log(config);
fs.writeFile("./config.json", JSON.stringify(config), {}, function (err, data) {
    if (err) throw err;
    require("./modules/router.js");
});
