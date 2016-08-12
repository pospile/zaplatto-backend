var Datastore = require('nedb')
    , db = new Datastore({ filename: require("../../config.json").database + "produkt.db", autoload: true });

var objednavka =
{
    zaplaceno: "",
    uctenka: "",
    produkty: [{produkt:"", mnozstvi:""}],
    zpracovano: "",
    zamestnanec: ""
}
