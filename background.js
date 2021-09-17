//Loading up the dependencies
importScripts("chromeext-msg-wrapper/background.port.js");



let app = new Port();

app.get("sqrt",function(req,res){
    res.send(Math.sqrt(req.body));
});