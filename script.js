function init(){
//add your javascrip between these two lines of code
		function myEventFunction() {
			alert('Hello');
		}
		
		var d4 = document.getElementById('div4');		
		
		d4.addEventListener('click', myEventFunction);
		
		d4.addEventListener('click, function(){
			console.log('I was click');
			d4.style.backgroundColor = '#C00';
			d4.innerHTML = '<string>Goodbye</strong>';
		});
}

window.addEventListener('load', init);
