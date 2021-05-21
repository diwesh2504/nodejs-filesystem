const fs=require('fs');
const cors=require('cors');
const express=require("express");
const app=express();

app.use(cors());
//1. To Create .txt file
app.get("/createfile",function (req,res){
    var timestamp=new Date();
    var filename=timestamp.getDate()+"-"+timestamp.getHours()+timestamp.getMinutes()+timestamp.getSeconds();
    fs.writeFile(`${filename}.txt`,`${timestamp}`,()=>{console.log("File Created")});
    res.json({
        message:"File Created",
        filename:`${filename}.txt`
    })
    
})
//2. To Retrieve all .txt files

app.get("/readfolder",function (req,res){
    var txt_files=[];
    fs.readdir(__dirname, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        
        files.forEach(function (file) {
            if(file.endsWith(".txt")){
                txt_files.push(file);
            }     
        });
        res.json({
            file_names:txt_files
        })
    });
    
})
app.listen(proccess.env.PORT||3000,()=>{
    console.log("Backend start");
})