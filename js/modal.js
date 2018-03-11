// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
                  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
                  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
modal.style.display = "none";
}
}


// var $body = $(document.body);
// var oldWidth = $body.innerWidth();
// $body.css("overflow", "hidden");
// $body.width(oldWidth);

// var $body = $(document.body);
// $body.css("overflow", "auto");
// $body.width("auto");

