var restify = require('restify');
var path = require("path");
var eet = require("./eet/eet.js");

var server = restify.createServer();

var count = 0;

server.use(restify.bodyParser());

/*THIS WILL LOAD THE ZAPLATTO.CZ FRONT-END SERVICE*/
server.get("\/www\/?.*", restify.serveStatic({
    directory: path.resolve(require("../config.json").directory),
    default: 'index.html'
}));

server.post('/objednavka', function create(req, res, next) {
    console.log("request #"+count);
    console.log(req.params);

    eet.SendReceipt(req.params.id_provoz, req.params.id_pokl, req.params.celk_trzba, function (data) {
        res.json(data);
    });

    count++;
    return next();
});

server.listen(process.env.PORT || 3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});



