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
