function getAllItem(companyId){
    
    $.ajax({
        method: "get",
        url: `http://localhost:3000/items/${companyId}`,
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        putDataItem(data)
        $('#companyId').val(companyId)
        $('#openRegisterItem').show().click(()=>{
            $('.secondPage').hide()
            $('.thirdPage').show()
            $('.registerItem').show()
        })
    })
    .fail(err =>{
        console.log(err)
    })
}

function putDataItem(data){
    $('.wrapper12').empty()
    $.each(data, function(index, value){
        $('.wrapper12').append(
            `
            <div class="boxItem${index}">
                <p id="item${index}">${value.name}</p>
                <p id="itemPrice${index}">${value.price}</p>
                <a href="#" id="editItem${index}">Edit</a>
                <a href="#" id="removeItem${index}">Delete</a>
            </div>  
            `
        )
       
        $(`#removeItem${index}`).click(()=>{
            removeItem(value._id)
            $(`.boxItem${index}`).remove()
        })
        $(`#editItem${index}`).click(()=>{
            $('.secondPage').hide()
            $('.registerItem').hide()
            $('.editItem').show()
            $('.thirdPage').show()
            $(`#editItemSubmit`).click(()=>{
                patchItem(value._id)
            })
        })
  
    })
}
function removeItem(_id){
    $.ajax({
        method: "delete",
        url: `http://localhost:3000/items/${_id}`,
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{

    })
    .fail(err =>{
        console.log(err)
    })
}

function patchItem(_id){
    $.ajax({
        method: "patch",
        url: `http://localhost:3000/items/${_id}`,
        data: {
            name: $('#nameItemEdit').val(),
            price: $('#priceItemEdit').val()
        },
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        $('.editItem').hide()
        $('.thirdPage').hide()
        $('#nameItemEdit').val("")
        $('#priceItemEdit').val("")
        getAllItem()
        $('.secondPage').show()
    })
    .fail(err =>{
        console.log(err)
    })
}

function registerItem(){
    $.ajax({
        method: "post",
        url: `http://localhost:3000/items/${$('#companyId').val()}`,
        data: {
            name: $('#nameItem').val(), 
            price: $('#priceItem').val()
        },
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(data=>{
        doneRegisterItem()
        getAllItem($('#companyId').val())
        $('.secondPage').show()
    })
    .fail(err =>{
        console.log(err)
    })
}

function doneRegisterItem(){
    $('#nameItem').val("")
    $('#priceItem').val("")
    $('.thirdPage').hide()
    $('.registerItem').hide()
}