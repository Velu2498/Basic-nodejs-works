/*
const os=require('os'); 
const fs=require('fs'); //fs=file system
const path=require('path');

console.log(os.release())
// console.log(os.uptime())

//create txt
fs.writeFile('my.txt','node la irunthu',(err)=>{
    // err ? throw err : "file created...."
    if(err) throw err

    console.log("file creted....");
})

//create html
fs.writeFile('my.html','<h2>node la irunthu<h2>',(err)=>{
    // err ? throw err : "file created...."
    if(err) throw err

    console.log("file 2 creted....");
})

//find folders
fs.readdir(__dirname,(err,file)=>{
    if(err) throw err

    console.log(file)
})


//creating local host
const express =require("express")
const app=express()
const port = 3000

app.get('/', (req, res) =>{ res.send('Hello World node la irunthuu') })

app.listen(port, () => {console.log(`Example app listening on port ${port}!`) })

app.get('/req:id', (req, res) =>{ res.send(`Hello World node la irunthuu  ${req.params | JSON }  ${req.params.id}`) })

app.get('/req:id', (req, res) =>{ res.status(200).json(` kugiyg ${req}`) })
*/



//creating local host
const express =require("express")
const app=express()
const cors=require("cors")
const bodyp=require("body-parser")
const port = 3000

app.use(cors());
app.use(bodyp.json());



arr=[ ]
app.get('/', (req, res) =>{ res.send('Hello World node la irunthuu') })

app.post('/s',(req,res)=>{
    console.log(req.body)
    arr.push(req.body)
    res.status(200).json({"mess":"sucess"})    
})

app.get('/s', (req, res) =>{ res.json(arr) })

app.listen(port, () => {console.log(`Example app listening on port ${port}!`) })

