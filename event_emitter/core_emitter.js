var emitter = require("events");
var emtr= new emitter();
emtr.on("greet",function(name){
    console.log("hi "+name+" there from greet");
});

emtr.emit("greet","uzaif");
