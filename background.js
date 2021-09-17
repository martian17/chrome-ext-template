
//Loading up the dependencies
importScripts("chromeext-msg-wrapper/background.port.js");
/*try {
    //importScripts("chromeext-msg-wrapper/background.port.js");
} catch(err){
    console.error(err);
}*/


let app = new Port();

app.get("sqrt",function(req,res){
    res.send(Math.sqrt(req.body));
});