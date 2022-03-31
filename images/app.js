(function() {
	const btn = document.querySelectorAll('nav > .a');
	const cursor = document.querySelector('.cursor');
	
	const update = function(e) {
		const span = this.querySelector('span');
		
		if(e.type === 'mouseleave') {
			span.style.cssText = ''; 
		} else {
			const { offsetX: x, offsetY: y } = e,
					{ offsetWidth: width, offsetHeight: height } = this,
					walk = 20,
					xWalk = (x / width) * (walk * 2) - walk,
					yWalk = (y / height) * (walk * 2) - walk;

			span.style.cssText = `transform: translate(${xWalk}px, ${yWalk}px);`;
		}
	}
	
	const handleCurosr = (e) => {
		const { clientX: x, clientY: y } = e;
		cursor.style.cssText =`left: ${x}px; top: ${y}px;`;
	}
	
	btn.forEach(b => b.addEventListener('mousemove', update));
	btn.forEach(b => b.addEventListener('mouseleave', update));
	window.addEventListener('mousemove', handleCurosr);	
})();



// var $mouseX = 0, $mouseY = 0;
// var $xp = 0, $yp =0;

// $(document).mousemove(function(e){
//     $mouseX = e.pageX;
//     $mouseY = e.pageY;    
// });

// var $loop = setInterval(function(){
// // change 12 to alter damping higher is slower
// $xp += (($mouseX - $xp)/10);
// $yp += (($mouseY - $yp)/10);
// $(".cursor").css({left:$xp +'px', top:$yp +'px'});  
// }, 12);
