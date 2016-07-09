var fs = require("fs");
console.log("------------------------------SyncTask------------------------")
var sync_data=fs.readFileSync("ex_buffer.js",'utf-8');
console.log(sync_data);
console.log("------------------------------AsyncTask------------------------")
var async_data = fs.readFile("ex_buffer.js","utf-8",function(err,data){
   if(err){
       console.log(err);
   } 
   console.log(data);
});
console.log("Async Task is Still Running");