
// module.exports = function(a,b){
//     return a + b
// }

// module.exports.sum = function(a,b){
//     return a + b
// }

// function math(){
//     this.a = 4;
//     this.b = 6;
    
//     this.sum = function(){
//         return this.a + this.b;
//     }
// }

//Enable module caching with scope variable
//module.exports = new math()
//Enable module caching without scope variable
// module.exports = math

//Exspose only module without exposing its property (a,b)
var a = 5, b = 8;
function sum(){
    return a + b
}

module.exports ={
    sum : sum
}