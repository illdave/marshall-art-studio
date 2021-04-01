window.attachEvent( 'onunload', SignalLogout )
function SignalLogout()
{
	if( document.readyState == "complete" )
	{
		if( window.event.clientY < 0 )
		{ 
			var obj = document.getElementById( "EntHeader_loginlink" );
			if( null != obj )
			{
				//obj.click();
			}
		}
	}
}
