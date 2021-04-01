function T(j) {
	if (j.checked) {
	    Highlight(j,"fromFundList");
	} else {
	    Unhighlight(j,"fromFundList");
	}
}    
function R(j) {
	if (j.checked) {
	    Highlight(j,"fromSearchList");
	} else {
	    Unhighlight(j,"fromSearchList");
	}
}    
function Highlight(j,whereFrom) {
	var n = null;
	if (j.parentNode && j.parentNode.parentNode) {
	    n = j.parentNode.parentNode;
	}
	else if (j.parentElement && j.parentElement.parentElement) {
	    n = j.parentElement.parentElement;
	}
	if (n) {
        if ((whereFrom == "fromFundList") || (whereFrom == "fromAwait")) {
            n.className = "fund_remove";
        }
        if ((whereFrom == "fromSearchList") || (whereFrom == "fromSearchList")) {
            n.className = "selection";
        }
	}
}
function Unhighlight(j,whereFrom) {
	var n = null;
	if (j.parentNode && j.parentNode.parentNode) {
	    n = j.parentNode.parentNode;
	}
	else if (j.parentElement && j.parentElement.parentElement) {
	    n = j.parentElement.parentElement;
	}
	if (n) {
        if ((whereFrom == "fromFundList") || (whereFrom == "fromAwait")) {
            n.className = "xx";
        }
        if ((whereFrom == "fromSearchList") || (whereFrom == "fromAwait")) {
            n.className = "xx";
        }
	}
}
