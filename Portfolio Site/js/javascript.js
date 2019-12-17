var m = function showUXUIWork(){
	if(m.style.display === "none"){
		m.style.display = "inline";
	}
	document.getElementsByClassName("uxUI")[0].style.display = "inline";
	document.getElementsByClassName("showMotionVideo")[0].style.display = "none";
	document.getElementsByClassName("graphicDesign")[0].style.display = "none";
	document.getElementsByClassName("coding")[0].style.display = "none";
	document.getElementsByClassName("cadDesign")[0].style.display = "none";

var u = function showMotionVideoWork(){
	if(u.style.display === "none"){
		u.style.display = "inline";
	}
	document.getElementsByClassName("showMotionVideo")[0].style.display = "inline";
	document.getElementsByClassName("uxUI")[0].style.display = "none";
	document.getElementsByClassName("graphicDesign")[0].style.display = "none";
	document.getElementsByClassName("coding")[0].style.display = "none";
	document.getElementsByClassName("cadDesign")[0].style.display = "none";
}

var z = function showGraphicDesignWork(){
	if(z.style.display === "none"){
		z.style.display = "inline";
	}
	document.getElementsByClassName("cadDesign")[0].style.display = "inline";
	document.getElementsByClassName("showMotionVideo")[0].style.display = "none";
	document.getElementsByClassName("uxUI")[0].style.display = "none";
	document.getElementsByClassName("coding")[0].style.display = "none";
	document.getElementsByClassName("cadDesign")[0].style.display = "none";
}

var y = function showCodingWork(){
	if(y.style.display === "none"){
		y.style.display = "inline";
	}
	document.getElementsByClassName("coding")[0].style.display = "inline";
	document.getElementsByClassName("showMotionVideo")[0].style.display = "none";
	document.getElementsByClassName("uxUI")[0].style.display = "none";
	document.getElementsByClassName("graphicDesign")[0].style.display = "none";
	document.getElementsByClassName("cadDesign")[0].style.display = "none";
}

var x = function showCADWork() {
	if(x.style.display === "none"){
		x.style.display = "inline";
	}
	document.getElementsByClassName("showMotionVideo")[0].style.display = "none";
	document.getElementsByClassName("uxUI")[0].style.display = "none";
	document.getElementsByClassName("graphicDesign")[0].style.display = "none";
	document.getElementsByClassName("coding")[0].style.display = "none";
	
}