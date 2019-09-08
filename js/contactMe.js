function harusIsi() {
    var empty = document.formMe.nama.value
    var empty1 = document.formMe.email.value
    var empty2 = document.formMe.subject.value
    if (empty == '' && empty1 == '' &&
        empty2 == '') {
        console.log('Please Input Form')
    } else if (empty == '') {
        console.log('Please Input Name')
    } else if (empty1 == '') {
        console.log('Please Input Email')
    } else if (empty2 == '') {
        console.log('Please Input Subject')
    }
}