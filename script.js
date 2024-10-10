function init() {
  // Add your JavaScript between these two lines of code
  function myEventFunction() {
    alert('Hello');
  }

  var d4 = document.getElementById('div4');

  // First event listener to show an alert
  d4.addEventListener('click', myEventFunction);

  // Second event listener for other functionalities
  d4.addEventListener('click', function() {
    console.log('I was clicked');
    d4.style.backgroundColor = '#C00';  
    d4.innerHTML = '<strong>Goodbye</strong>';  
  });
}

window.addEventListener('load', init);

