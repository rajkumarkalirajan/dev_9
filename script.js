function init() {
  const entryButton = document.getElementById('entrybutton');
  const entryInput = document.getElementById('entryinput');
  const textOutput = document.getElementById('textoutput');
  const div4 = document.getElementById('div4');

  function myEventFunction() {
    alert('Hello');
    
    if (div4) {
      console.log('I was clicked');
      div4.style.backgroundColor = '#C00';  
      div4.innerHTML = '<strong>Goodbye</strong>';  
    } else {
      console.error('div4 not found');
    }
    
    // Update the text output with the value from the input
    const userInput = entryInput.value;
    if (userInput) {
      textOutput.innerText = userInput;
    } else {
      textOutput.innerText = "Show result here"; // Default message
    }
  }

  if (entryButton) {
    entryButton.addEventListener('click', myEventFunction);
  } else {
    console.error('entrybutton element not found');
  }
}

window.addEventListener('load', init);
