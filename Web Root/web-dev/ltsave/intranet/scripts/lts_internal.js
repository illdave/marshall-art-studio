// Make Remote method of opening a new window;
function makeRemoteSpecial(URL) {
	remote=window.open(URL,"window","width=435,height=450,alwayRaised=yes,scrollbars=no,resizable=no");
}

// XHTML Strict version of "target equals" method of opening a new window;
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

// Toggle view;
function toggleView(id) {
	identity=document.getElementById(id);
	if (identity.className == "hide") {
		var newClass="view";
	}
	else {
		var newClass="hide";
	}
	identity.className=newClass;
}
function change(id, newClass) {
	identity=document.getElementById(id);
	identity.className=newClass;
}
function groupToggle(id) {
for (x=0; x<15; x++) {
//alert ('you clicked ' + id + x);
if (document.getElementById(id + x)){
	toggleView(id+x);
	}
}

}
function accountToggle(id) {
if (document.getElementById('plan'+id)){
	toggleView('plan'+id);
	}
if (document.getElementById('arrow_down'+id)){
	toggleView('arrow_down'+id);
	}
if (document.getElementById('arrow_up'+id)){
	toggleView('arrow_up'+id);
	}
if (document.getElementById('testA'+id)){
	toggleView('testA'+id);
	}
if (document.getElementById('testB'+id)){
	toggleView('testB'+id);
	}
if (document.getElementById('testC'+id)){
	toggleView('testC'+id);
	}
if (document.getElementById('testD'+id)){
	toggleView('testD'+id);
	}
}