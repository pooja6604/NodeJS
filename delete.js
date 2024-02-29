var fs=require("fs");
console.log("Going to delete an exiting file");
fs.unlink('file.txt',function(err){
    if(err){
        return console.error(err);
    }
    console.log("filedeleted successfully!");
});