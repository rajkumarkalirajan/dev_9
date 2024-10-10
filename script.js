<script>
function init() {
  function myEventFunction() {
    alert('Hello');
    var d4 = document.getElementById('div4');
    if (d4) {
      console.log('I was clicked');
      d4.style.backgroundColor = '#C00';  
      d4.innerHTML = '<strong>Goodbye</strong>';  
    } else {
      console.error('div4 not found');
    }
  }
  var d4 = document.getElementById('div4');
  if (d4) {
    d4.addEventListener('click', myEventFunction);
  } else {
    console.error('div4 element not found');
  }
}
window.addEventListener('load', init);
</script>
