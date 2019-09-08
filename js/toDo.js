var mytodoList = document.querySelectorAll('#listMe LI')
for (var i = 0; i < mytodoList.length; i++) {
    var span = document.createElement('SPAN')
    var xmark = document.createTextNode('\u00D7')
    span.className = 'closeMe'
    span.appendChild(xmark)
    mytodoList[i].appendChild(span)
}

var closeMe = document.getElementsByClassName('closeMe')
for (var i = 0; i < closeMe.length; i++) {
    closeMe[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
var listing = document.querySelector('ul#listMe')
listing.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checkMe');
    }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputMe").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        console.log("Please write something");
    } else {
        document.getElementById("listMe").appendChild(li);
    }
    document.getElementById("inputMe").value = "";

    var span = document.createElement("SPAN");
    var markx = document.createTextNode("\u00D7");
    span.className = "closeMe";
    span.appendChild(markx);
    li.appendChild(span);

    for (i = 0; i < closeMe.length; i++) {
        closeMe[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}