'use strict'
var emitter = require("events");

class Person{
    constructor(f_name,l_name){
        this.firstname = f_name;
        this.lastname = l_name;
    }
    
    greet(){
        console.log("Hi "+this.firstname+ " "+this.lastname);
    }
}

var uzaif =new Person("Uzaif","Nilger");
uzaif.greet();