const fs=require('fs')

fs.writeFile('one.txt',"Hello Gurunanak College",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created successfully");
})