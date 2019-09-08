function getAllCompany(){
    $.ajax({
        method: "get",
        url: `http://localhost:3000/company/`,
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        putData(data)
    })
    .fail(err =>[
        console.log(err)
    ])
}

function putData(data){
    $('.wrapper11').empty()
    $.each(data, function(index, value){
        $('.wrapper11').append(
            `
            <div class="box${index}">
                <a href="#" id="company${index}">${value.name}</a>
                <p id="companyAddress${index}">${value.address}</p>
                <a href="#" id="editCompany${index}">Edit</a>
                <a href="#" id="removeCompany${index}">Delete</a>
            </div>  
            `
        )
        $(`#removeCompany${index}`).click(()=>{
            removeCompany(value._id)
            $(`.box${index}`).remove()
        })
        $(`#editCompany${index}`).click(()=>{
            $('.secondPage').hide()
            $('.registerCompany').hide()
            $('.editCompany').show()
            $('.thirdPage').show()
            $(`#editCompanySubmit`).click(()=>{
                patchCompany(value._id)
            })
        })
        // $(`#company${index}`).click(()=>{

        // })
    })
}

function registerCompany(){
    $.ajax({
        method: "post",
        url: "http://localhost:3000/company/",
        data: {
            name: $('#nameCompany').val(), 
            address: $('#addressCompany').val()
        },
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        doneRegisterCompany()
        $('.thirdPage').hide()
        getAllCompany()
        $('.secondPage').show()
    })
    .fail(err =>[
        console.log(err)
    ])
}
function doneRegisterCompany(){
    $('#nameCompany').val("")
    $('#addressCompany').val("")
    $('.thirdPage').hide()
    $('.registerCompany').hide()
}
function patchCompany(_id){
    $.ajax({
        method: "patch",
        url: `http://localhost:3000/company/${_id}`,
        data: {
            name: $('#nameCompanyEdit').val(),
            address: $('#addressCompanyEdit').val()
        },
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        $('.editCompany').hide()
        $('.thirdPage').hide()
        $('#nameCompanyEdit').val("")
        $('#addressCompanyEdit').val("")
        getAllCompany()
        $('.secondPage').show()
    })
    .fail(err =>[
        console.log(err)
    ])
}
function removeCompany(_id){
    $.ajax({
        method: "delete",
        url: `http://localhost:3000/company/${_id}`,
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{

    })
    .fail(err =>[
        console.log(err)
    ])
}

function openRegisterCompany(){
    $('.secondPage').hide()
    $('.thirdPage').show()
    $('.registerCompany').show()
}

