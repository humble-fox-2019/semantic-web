$(document).ready(() => {
    $('.pushpin').pushpin()
    $("#nav-aboutme").addClass('active')
    setHeight()
    switchTab('#nav-aboutme')
    switchTab('#nav-portfolio')
    switchTab('#nav-contactme')

    $('.age-js').text(getAge())
})

function switchTab(element) {
    $(element).click(() => {
        $('.nav-js').removeClass('active')
        $(element).addClass('active')
    })
}

function setHeight() {
    const leftHeight = $('#left-card').height()
    const rightHeight = $('#right-card').height()
    if (leftHeight > rightHeight) {
        $('#right-card').css('height', leftHeight)
    } else {
        $('#left-card').css('height', rightHeight)
    }
}

const getAge = () => {
    const today = new Date();
    const birthDate = new Date('1994-06-08');
    const age = today.getFullYear() - birthDate.getFullYear();
    return age
}

$('#login-nav').click(function () {
    console.log('login button clicked')
    event.preventDefault()
})