function init() {
  // Function to handle both alert and div changes
  function myEventFunction() {
    // Show an alert
    alert('Hello');

    // Get the div4 element
    var d4 = document.getElementById('div4');
    console.log(d4);  // Log the element to check if it's found

    // Log to console and change styles/content
    if (d4) {
      console.log('I was clicked');
      d4.style.backgroundColor = '#C00';  // Change background color to red
      d4.innerHTML = '<strong>Goodbye</strong>';  // Change content to "Goodbye"
    } else {
      console.error('div4 element not found!');
    }
  }

  // Get the div4 element
  var d4 = document.getElementById('div4');
  console.log(d4);  // Log here to check before adding event listener

  // Add a single event listener to handle all actions
  if (d4) {
    d4.addEventListener('click', myEventFunction);
  } else {
    console.error('div4 element is undefined or not found when adding event listener.');
  }
}

// Load the script after the DOM is ready
window.addEventListener('load', init);
