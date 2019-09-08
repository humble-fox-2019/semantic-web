function loginForm(){
    $('.firstPage').hide()
    $.ajax({
        method: "post",
        url: 'http://localhost:3000/users/loginform',
        data: {
            email: $('#emailLogin').val(),
            password: $('#passwordLogin').val()
        }
    })
    .done(data =>{
        
        localStorage.setItem('token', data.token)
        resetLogin()
        $('#welcome').empty().text(`Hallo ${data.username}`).show()
        $('#logout').show()
        getAllCompany()
        $('.secondPage').show()
        
    })
    .fail(err => {
        resetLogin()
        iWantLogin()
        $('.errorForm').css('visibility', 'visible').text('User does not exist.')
        console.log(err)
    })       
}
function onSignIn(googleUser) {
    $('.firstPage').hide()
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: "post",
        url: 'http://localhost:3000/users/logingoogle',
        data: {
            token: id_token
        }
    })
    .done(data =>{
        localStorage.setItem('token', data.token)
        resetLogin()
        $('#welcome').empty().text(`Hallo ${data.username}`).show()
        $('#logout').show()
        getAllCompany()
        $('.secondPage').show()

    })
    .fail(err => {
        resetLogin()
        iWantLogin()
        $('.errorForm').css('visibility', 'visible').text('User does not exist.')
        console.log(err)
    })
}

function logout(){
    $('.secondPage').hide()
    $('.thirdPage').hide()
    
    var auth2 = gapi.auth2.getAuthInstance()
    localStorage.removeItem('token')
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    localStorage.removeItem('token')
    iWantLogin()
      
}
function resetLogin(){
    $('.errorForm').css('visibility', 'hidden').empty() 
    $('#emailLogin').val("")
    $('#passwordLogin').val("")
}

function iWantLogin(){
    resetLogin()
    $('#success').hide()
    $('#registerForm').hide()
    $('#skipRegister').hide()
    $('#loginForm').show()
    $('#doRegister').show()
    $('.g-signin2').show()
    $('.firstPage').show()
}
