/*CONNECT TO REST API FOR EET*/
/*REST API ISNT SAVING ANY DATA, JUST PASSING IT TO MINISTRY OF FINANCE SERVERS AND RETURN FIK*/
var request = require("request");
var uuid = require('node-uuid');
var database = require("../database/_db-uctenka.js");

var sendReceipt = function (id_prov, id_pokl, trzba, callback) {
    var date = new Date();
    var options =
    {
        method: 'POST',
        url: "http://api.pospichal.me",
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
        },
        formData:
        {
            uuid_zpravy: uuid.v1(),
            /*uuid_zpravy: 'b3a09b52-7c87-4014-a496-' + "4c7a53cf8255",*/
            dic_popl: 'CZ683555118',
            id_provoz: id_prov,//'181',
            id_pokl: id_pokl,//'1',
            porad_cis: date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()+"/"+date.getHours()+"/"+date.getMinutes()+"/"+require('generate-serial-number').generate(3),//'11111',
            celk_trzba: trzba//'100'
        }
    };

    if (require("../../config.json").debug)
    {
        options.url = "http://25.7.98.111";
    }

    console.log("Pokousim se ulozit uctenku: " + options.formData.porad_cis);
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log("data");
        console.log(body);
        body = JSON.parse(body);
        if (body.hotovo == true)
        {
            options.formData.fik = body.fik;
            options.formData.zpracovano = body.zpracovano.date;
            options.formData.bkp = body.bkp;
            options.formData.pkp = body.pkp;
            database.InsertReceipt(options.formData, callback);
        }
        else
        {
            callback(body);
            console.log("Error, receipt not saved and scheduled to be send again.");
        }
    });
};
exports.SendReceipt = function (id_prov, id_pokl, trzba, callback) {
    sendReceipt(id_prov, id_pokl, trzba, callback);
};