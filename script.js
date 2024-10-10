function init() {
  // Function to handle both alert and div changes
  function myEventFunction() {
    // Show an alert
    alert('Hello');

    // Get the div4 element
    var d4 = document.getElementById('div4');

    // Log to console and change styles/content
    console.log('I was clicked');
    d4.style.backgroundColor = '#C00';  // Change background color to red
    d4.innerHTML = '<strong>Goodbye</strong>';  // Change content to "Goodbye"
  }

  // Get the div4 element
  var d4 = document.getElementById('div4');

  // Add a single event listener to handle all actions
  d4.addEventListener('click', myEventFunction);
}

// Load the script after the DOM is ready
window.addEventListener('load', init);

