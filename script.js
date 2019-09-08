var slideIndex = 1;
showDivs( slideIndex );

function plusDivs( counter ) {
    showDivs( slideIndex += counter );
}

function showDivs( n ) {
    let i;
    let x = document.getElementsByClassName( "mySlides" );
    if ( n > x.length ) 
        slideIndex = 1

    if ( n < 1 ) 
        slideIndex = x.length
    slide( slideIndex );
}
function slide ( index ){
    let slide = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot")
    for ( i = 0; i < slide.length; i++ ) {
        slide[i].style.display = "none";  
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[index- 1].style.display = "block";  
    dots[index-1].className += " active"; 
}