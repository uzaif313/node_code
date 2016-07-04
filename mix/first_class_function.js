function greet(){
    console.log("hi there");
}

greet();


function logFunction(fn){
    fn();
}

logFunction(greet);

logFunction(function(){
    console.log("Some anonymous function is called");
});
var myFunction= function(){
    console.log("Variable as function");
}
logFunction(myFunction);

