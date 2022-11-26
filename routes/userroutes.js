const controller=require('../controller/usercontroller')

const routes=(app)=>{
    app.post('/signin',controller.userSignin)

    app.post('/signup',controller.userSignupcheck)
}

module.exports=routes