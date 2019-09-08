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
        $('.secondPage').show()

    })
    .fail(err => {
        resetLogin()
        iWantLogin()
        console.log(err)
    })
}

$('.g-signin2').click(function(){
    $('.firstPage').hide()
})

function logout(){
    $('.secondPage').hide()
    iWantLogin()
    var auth2 = gapi.auth2.getAuthInstance()
    localStorage.removeItem('token')
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
      
    localStorage.removeItem('token')
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
    $('.firstPage').show()
}
