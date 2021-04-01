function stateComboBox(){
	var allStates = new Array ("", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NB", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY");
	usStates = allStates.length;
	// create select list
	document.write("<select>")
	for ( x=0; x<usStates; x++ ){
		document.write("<option>" + allStates[x] + "</option>")
	}
	document.write("</select>")
}
function checkObjectives(obj){
	// get name of THIS checkbox
	thisBoxName = obj.id;
	// split it's parts
	thisParts = thisBoxName.split("_");
	thisPrefix = thisParts[0];
	thisSuffix = thisParts[1];
	// set prefix of THAT checkbox
	if( thisPrefix == "pri" ){ thatPrefix = "sec"; }
	else{ thatPrefix = "pri" }
	// set suffix of THAT checkbox (same as THIS)
	thatSuffix = thisSuffix;
	// set what THAT object must be
	thatBoxName = thatPrefix+"_"+thatSuffix;
	//if THIS box is unchecking, do nothing to THAT one 
	if( !obj.checked ){
		// alert("I will do nothing!");
	}
	else{
		// alert("I must make sure "+thatBoxName+" is unchecked!");
		thatBox = eval("document.getElementById('" + thatBoxName + "')");
		thatBox.checked = false;
	}
}
function checkAndHide(obj, target){
	thisBoxName = obj.id;
	// split it's parts
	thisParts = thisBoxName.split("_");
	thisPrefix = thisParts[0];
	thisSuffix = thisParts[1];
	// make an object of it's conterpart
	thatElementName = target + "_" + thisSuffix;
	counterPart = eval("document.getElementById('" + thatElementName + "')");
	if ( obj.checked ){
		counterPart.className = "view";
	}
	else{
		counterPart.className = "hide";
	}
}
function checkAndHideAll(prefix, target){
	// get number of elements in the form and loop them
	countElements = document.forms[0].elements.length;
	countPrefix = prefix.length;
	for(x=0; x<countElements; x++){
		thisElement = document.forms[0].elements[x];
		if(thisElement.id){
			if( thisElement.id.substring(0, countPrefix) == prefix ){
				checkAndHide(thisElement, target);
			}
		}
	}
}
function disableAllCheckboxes(){
	countElements = document.forms[0].elements.length;
	for( x=0; x<countElements; x++ ){
		thisElement = document.forms[0].elements[x];
		//alert( thisElement.type )
		if( thisElement.type == "checkbox" ){
			thisElement.disabled = true;
		}
	}
}
