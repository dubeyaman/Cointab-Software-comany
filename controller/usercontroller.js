const userservice=require('../services/userservices')


const userSignin=async(req,res)=>{
    const response=await userservice.getuserbyemail(req.body);
    return res.json({
        message:'succesfully signed up',
        code:200,
        success:true,
        data:response
    });
}

const userSignupcheck=async(req,res)=>{
    const response=await userservice.verifyemail(req.body.EmailID);
    if(!response){
        return res.json({
            message:'email is not registered ',
            code:400,
            success:true,
            err:'email is wrong'
        });
    }else{
        const correctpassword=await userservice.verifyactualpassword(req.body.password);
        if(correctpassword){
            return res.json({
                message:'password is correct hence user signed in',
                code:200,
                success:true,
                data:response,
            
            });

        }
        else{
            return res.json({
                message:'password is incorrect',
                code:200,
                success:true,
                err:'again enter the password'
            });
        }
    } 
}

module.exports={userSignin,userSignupcheck}