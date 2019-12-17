function showUXUIWork(){
	showWork("exUI");
	hideWork("showMotionVideo");
	hideWork("cadDesign");
	hideWork("graphicDesign");
	hideWork("coding");
}

function showMotionVideoWork(){
	showWork("showMotionVideo");
	hideWork("cadWork");
	hideWork("uxUI");
	hideWork("graphicDesign");
	hideWork("coding");
}

function showGraphicDesignWork(){
	showWork("graphicDesign");
	hideWork("showMotionVideo");
	hideWork("uxUI");
	hideWork("cadWork");
	hideWork("coding");
}

function showCodingWork(){
	showWork("coding");
	hideWork("showMotionVideo");
	hideWork("uxUI");
	hideWork("graphicDesign");
	hideWork("cadWork");
	}

function showCADWork() {
	showWork("cadDesign");
	hideWork("showMotionVideo");
	hideWork("uxUI");
	hideWork("graphicDesign");
	hideWork("coding");
}

function showWork(className) {
	var list = document.getElementsByClassName(className);
	for(i = 0; i < list.length; i++){
		list[i].style.display = "inline";
	}
}

function hideWork(className) {
	var list = document.getElementsByClassName(className);
	for(i = 0; i < list.length; i++){
		list[i].style.display = "none";
	}
}