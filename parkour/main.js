var myIndex=0;
carousel();

function carousel() {
	// body...
	var i;
    var x = document.getElementsByClassName("mySlider");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function myFunction(x) {
	// body...
	x.classList.toggle("change");
}