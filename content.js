let port = new Port();


let main = async function(){
    console.log("what's the square root of 2?");
    console.log(await port.get("sqrt",2));
};

main();
