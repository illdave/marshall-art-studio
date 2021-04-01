// toggle visibility, the Zeldman way

function toggle ( targetId ) {
	if (document.getElementById) {
			target = document.getElementById( targetId );
					if (target.style.display == "none") {
							target.style.display = "";
					} else {
						target.style.display = "none";
					}
		}
}

// "Target OUT" hack for XHTML Strict

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
