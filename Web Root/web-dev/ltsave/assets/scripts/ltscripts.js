function showDiv(sel) {
// case 1
  oneLayer = (document.getElementById)? document.getElementById("layer1"):document.all("layer1");
  if(sel.selectedIndex==0) oneVis="block"
  else oneVis = "none"
  oneLayer.style.display=oneVis;
// case 2
  twoLayer = (document.getElementById)? document.getElementById("layer2"):document.all("layer2");
  if(sel.selectedIndex==1) twoVis="block"
  else twoVis = "none"
  twoLayer.style.display=twoVis;
// case 3
  threeLayer = (document.getElementById)? document.getElementById("layer3"):document.all("layer3");
  if(sel.selectedIndex==2) threeVis="block"
  else threeVis = "none"
  threeLayer.style.display=threeVis;
// case 4
  fourLayer = (document.getElementById)? document.getElementById("layer4"):document.all("layer4");
  if(sel.selectedIndex==3) fourVis="block"
  else fourVis = "none"
  fourLayer.style.display=fourVis;
}  

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
function popWindow(w,h,url,scr,sze) {
	// width, height, scrollable, resizable, url
	var win_width = w;
	var win_height = h;
	var win_scrollable = scr;
	var win_resizeable = sze;
	var win_url = url;
	NewWin = window.open(win_url, 'LTSave', 'width='+ win_width +', height='+ win_height +', top=0, left=0, toolbar=no, menubar=no, scrollbars='+ win_scrollable +', resizable=' + win_resizeable +', status=no');  
	NewWin.focus();
}

function openAny(page, type) {

// default popup settings
	var win_name = "LTSave";
	var win_width = 650;
	var win_height = 475;
	var win_top = 0;
	var win_left = 0;
	var win_toolbar = "no";
	var win_menubar = "no";
	var win_scrollbars = "yes";
	var win_resizable = "no";
	
// alter variables for different types of popup
	switch (type) {
		case 'press':
			var win_name = "PressWindow";
		break;
		case 'slideshow':
			var win_name = "SlideShow";
			var win_width = 620;
			var win_height = 375;
			var win_top = 0;
			var win_left = 0;
			var win_scrollbars = "no";
		break;
		}
		
// create popup window with variables determined above, and focus on it
	NewWin = window.open(page, win_name, "width="+ win_width +", height="+ win_height +", top="+ win_top +", left="+ win_left +", toolbar=" + win_toolbar +", menubar=" + win_menubar +", scrollbars="+ win_scrollbars +", resizable=" + win_resizable);  
	NewWin.focus();
	} 
	
// old school popup window for tour
function popWindow(w,h,url,scr,sze) {
	// width, height, scrollable, resizable, url
	var win_width = w;
	var win_height = h;
	var win_scrollable = scr;
	var win_resizeable = sze;
	var win_url = url;
	NewWin = window.open(win_url, 'LTSave', 'width='+ win_width +', height='+ win_height +', top=0, left=0, toolbar=no, menubar=no, scrollbars='+ win_scrollable +', resizable=' + win_resizeable +', status=no');  
	NewWin.focus();
	if( NewWin.opener == null )
	{
		NewWin.opener = self;
	}
}

// end openAny() window script