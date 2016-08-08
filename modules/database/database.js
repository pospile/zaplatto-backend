var Datastore = require('nedb')
    , db = new Datastore({ filename: require("../../config.json").database, autoload: true });

db.find({}, function (err, docs) {
    console.log(docs);
});

var insertReceipt = function (receipt, callback) {
    db.insert(receipt, function (err, _receipt) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        console.log("Receipt saved");
        callback(_receipt);
    });
};


exports.InsertReceipt = function (receipt, callback) {
    insertReceipt(receipt, callback);
};