function register(){ 
    if($('#passwordRegisterVerify').val()!=$('#passwordRegister').val()){
        $('#passwordRegister').val("")
        $('#passwordRegisterVerify').val("")
        $('.errorForm').empty().text('Your Password does not match').css('visibility', 'visible')
    }else{
        $.ajax({
            method: "post",
            url: 'http://localhost:3000/users/register',
            data: {
                username: $('#usernameRegister').val(),
                password: $('#passwordRegister').val(),
                email: $('#emailRegister').val()
            }
        })
        .done(data =>{
            $('#success').show()
            resetRegister()
        })
        .fail((err, message) => {
            console.log(message)
            $('.errorForm').css('visibility', 'visible').text(err.message)
            
        })
    }   
}

function resetRegister(){
    $('#usernameRegister').val("")
    $('#passwordRegister').val("")
    $('#passwordRegisterVerify').val("")
    $('#emailRegister').val("")
    $('.errorForm').css('visibility', 'hidden').empty()
}

function iWantRegister(){
    console.log($('#skipRegister'))
    resetRegister()
    $('#success').hide()
    $('#loginForm').hide()
    $('#doRegister').hide()
    $('#registerForm').show()
    $('#skipRegister').show()
    $('.g-signin2').show()
    $('.firstPage').show()
}