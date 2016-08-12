var Datastore = require('nedb')
    , db = new Datastore({ filename: require("../../config.json").database + "uctenka.db", autoload: true });


var uctenka =
{
    "uuid_zpravy": "",
    "dic_popl": "",
    "id_provoz": "",
    "id_pokl": "",
    "porad_cis": "",
    "celk_trzba": "",
    "fik": "",
    "zpracovano": "",
    "bkp": "",
    "pkp": ""
}


var insertReceipt = function (receipt, callback) {
    db.insert(receipt, function (err, _receipt) {
        console.log("Receipt saved");
        callback(_receipt);
    });
};


exports.InsertReceipt = function (receipt, callback) {
    insertReceipt(receipt, callback);
};