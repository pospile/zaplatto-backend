var Datastore = require('nedb')
    , db = new Datastore({ filename: require("../../config.json").database + "inventar.db", autoload: true });

var inventar =
{
    produkt: "",
    barcode: "",
    pocet: "",
    expirace: "",
    baleni_kusu: ""
}