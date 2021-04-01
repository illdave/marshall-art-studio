i=0;
timer = Math.round(Math.random()*100)
function setWidthOne() {
	var divName= 'divMagic';
	l = document.all ? document.all[divName]:document.getElementById(divName);
	newWidth = i+'%';
	l.style.width = newWidth;
	i+=1;
	if (i<=100) setWidthTwo();
	else {
	i = 0;
	timer = Math.round(Math.random()*100)
	setWidthTwo();
	}
}
function setWidthTwo() {
	setTimeout('setWidthOne();', timer);
}
