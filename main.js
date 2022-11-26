const express=require('express')
const app=express()
const routers=require('./routes/userroutes')
const bodyParser=require('body-parser');
const loginpage = require('./models/loginpage');
const port=3000;


app.use(bodyParser.urlencoded({extended:true}));
routers(app)


const data= async(req,res)=>{
    const returns=await loginpage.create({
        EmailID:'satyaaman@gmail.com',
        password:'satya@satya',
        userName:'satya'
    })
    return returns
}

//npm start

app.listen(port,()=>{
    console.log('server is listening to port')
})