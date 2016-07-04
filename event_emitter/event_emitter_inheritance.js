var emittr = require("events");
var util = require("util");

function Gretter(f_name,l_name){
   this.firstname = f_name;
   this.lastname = l_name; 
}

Gretter.prototype.greet=function(){
    console.log("Hi "+this.firstname+" "+this.lastname);
    this.emit("greet");
}
util.inherits(Gretter,emittr);
var uzaif = new Gretter("uzaif","nilger");
uzaif.on("greet",function(){
    console.log("uzaif nilger greet event called");
})
var aman = new Gretter("aman","nilger");
aman.on("greet",function(){
    console.log("aman nilger greet event called");
})

uzaif.greet();
aman.greet();