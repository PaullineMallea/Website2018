// Get the modal
var modal5 = document.getElementById('myModal5');

// Get the button that opens the modal
var btn = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal5.style.display = "block";z
                  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal5.style.display = "none";
                  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal5) {
modal5.style.display = "none";
}
}