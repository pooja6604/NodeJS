var fs=require("fs");
var buf= Buffer.alloc(1024);
console.log("Going to open an exiting file");
fs.open('text.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened successfully!");
    console.log("Going to teuncate the after10 bytes");
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
    }
    console.log("file truncated successfully.");
    console.log("Going to read the same file");
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
        fs.close(fd,function(err){
            if(err){
                console.log(err);
                    }
                console.log("file closed successfully.");            
        });
    });
});
});