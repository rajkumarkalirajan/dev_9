
function init() {
  function myEventFunction() {
    alert('Hello');
    var d4 = document.getElementById('div4');
    if (d4) {
      console.log('I was clicked');
      d4.style.backgroundColor = '#C00';  
      d4.innerHTML = '<strong>Goodbye</strong>'; 
			console.log('Color changed and content updaed to "Goodbye");
    } else {
      console.error('div4 not found');
    }
  }
  var d4 = document.getElementById('div4');
  if (d4) {
    d4.addEventListener('click', myEventFunction);
  } else {
    console.log('Event listener added to div4');
  } else {
		console.error('Element with id="div4" not found during int');
	}
}
window.addEventListener('load', init);

