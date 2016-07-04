var Emitter = require("./emitter");
var Events = require("./config").events;
var emtr = new Emitter();
console.log(Events.GREET);
emtr.on(Events.FILESAVE,function(){
	console.log("File is saveing now please hold on a minitues");
})

emtr.on(Events.GREET,function(){
	console.log("Hi there form Events Greet");

});

emtr.on(Events.GREET,function(){
	console.log("Hej there form Events Greet");
})

emtr.emit(Events.GREET);
emtr.emit(Events.FILESAVE);