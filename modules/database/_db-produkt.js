var Datastore = require('nedb')
    , db = new Datastore({ filename: require("../../config.json").database + "produkt.db", autoload: true });

var produkt =
{
    jmeno: "",
    cena_bez_dph: "",
    dph: "",
    barcode: "",
    kategorie: "",
    img: "",
    inventar: "",
    kusu: ""
}