
const {loginpage}=require('../models/index')

const getuserbyemail=async(data)=>{
    const response=await loginpage.create({
        EmailID:data.EmailID,
        password:data.password,
        userName:data.userName
    })
    return response
}
const verifyemail=async(data)=>{
    const response=await loginpage.findOne({
        where:{
            EmailID:data
        }
    });
    return response;
}
const verifyactualpassword=async(password)=>{
    const response=await loginpage.findOne({
        where:{
            password:password
        }
    });
    return response;
}

module.exports={getuserbyemail,verifyemail,verifyactualpassword}
