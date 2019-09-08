module.exports = (err, req, res, next) =>{
    let status = err.status || 500
    let message = err.message || "internal server error"
    if(message ==="token is not defined"){
        message = "You need to login first!"
    }else if(err.errors.username){
        if(err.errors.username.properties.type == 'unique'){
            status = 402
            message = "This username has already registered"
        }
    }else if(err.errors.email){
        if(err.errors.email.message == 'Invalid email format'){
            message = "Please enter your correctly"
        }
        else if(err.errors.email.message == 'Email must be filled'){
            message = err.errors.email.message
        }
        else if(err.errors.email.properties.type == 'unique'){
            message = "This email has already registered"
        }
    }else if(err.errors.password){
        if(err.errors.password.kind == 'required'){
            
            message = "Password needs to be filled"
        }
    }
    console.log(message)
    res.status(status).json()
}