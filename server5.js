const fs=require('fs');
console.log("This is my First Statement")
fs.readFile("one.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
console.log("this is my second statement")