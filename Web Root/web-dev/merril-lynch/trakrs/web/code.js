     // convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();

    // *** BROWSER VERSION ***
    // Note: On IE5, these return 4, so use is.ie5up to detect IE5.
    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1));
    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && (is_major >= 4));
    var is_navonly = (is_nav && ((agt.indexOf(";nav") != -1) || (agt.indexOf("; nav") != -1)) );
    var is_nav5 = (is_nav && (is_major == 5));
    var is_nav5up = (is_nav && (is_major >= 5));

    var is_ie   = (agt.indexOf("msie") != -1);
    var is_ie3  = (is_ie && (is_major < 4));
    var is_ie4  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")==-1) );
    var is_ie4up  = (is_ie  && (is_major >= 4));
    var is_ie5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5up  = (is_ie  && !is_ie3 && !is_ie4);

    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_webtv = (agt.indexOf("webtv") != -1);

    // *** JAVASCRIPT VERSION CHECK ***
    // Useful to workaround Nav3 bug in which Nav3
    // loads <SCRIPT LANGUAGE="JavaScript1.2">.
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0
    else if (is_nav3 || is_opera) is_js = 1.1
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3
    else if (is_nav5) is_js = 1.4
    // NOTE: In the future, update this code when newer versions of JS
    // are released. For now, we try to provide some upward compatibility
    // so that future versions of Nav and IE will show they are at
    // *least* JS 1.x capable. Always check for JS version compatibility
    // with > or >=.
    else if (is_nav && (is_major > 5)) is_js = 1.4
    else if (is_ie && (is_major > 5)) is_js = 1.3
    // HACK: no idea for other browsers; always check for JS version with > or >=
    else is_js = 0.0;

    // *** PLATFORM ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
    //        Win32, so you can't distinguish between Win95 and WinNT.
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // is this a 16 bit compiled version?
    var is_win16 = ((agt.indexOf("win16")!=-1) || 
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || 
               (agt.indexOf("windows 16-bit")!=-1) );  

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    // NOTE: Reliable detection of Win98 may not be possible. It appears that:
    //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
    //       - On Mercury client, the 32-bit version will return "Win98", but
    //         the 16-bit version running on Win98 will still return "Win95".
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 || 
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) || 
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||   
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || 
                               (agt.indexOf("68000")!=-1)));
    var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || 
                                (agt.indexOf("powerpc")!=-1)));

    var is_sun   = (agt.indexOf("sunos")!=-1);
    var is_sun4  = (agt.indexOf("sunos 4")!=-1);
    var is_sun5  = (agt.indexOf("sunos 5")!=-1);
    var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
    var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
    var is_irix5 = (agt.indexOf("irix 5") !=-1);
    var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
    var is_hpux  = (agt.indexOf("hp-ux")!=-1);
    var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
    var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
    var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
    var is_aix1  = (agt.indexOf("aix 1") !=-1);    
    var is_aix2  = (agt.indexOf("aix 2") !=-1);    
    var is_aix3  = (agt.indexOf("aix 3") !=-1);    
    var is_aix4  = (agt.indexOf("aix 4") !=-1);    
    var is_linux = (agt.indexOf("inux")!=-1);
    var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
    var is_unixware = (agt.indexOf("unix_system_v")!=-1); 
    var is_mpras    = (agt.indexOf("ncr")!=-1); 
    var is_reliant  = (agt.indexOf("reliantunix")!=-1);
    var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) || 
           (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) || 
           (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1)); 
    var is_sinix = (agt.indexOf("sinix")!=-1);
    var is_freebsd = (agt.indexOf("freebsd")!=-1);
    var is_bsd = (agt.indexOf("bsd")!=-1);
    var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux || 
                 is_sco ||is_unixware || is_mpras || is_reliant || 
                 is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

    var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));

if (is_ie5up && is_mac) {
   		document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_mac_ie5.css" title=master>');
	}
	else if (is_nav4up && is_mac) {
  	 	document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_mac_nav.css" title=master>');
	}
	else if (is_nav4up && is_win) {
   		document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_pc_nav.css" title=master>');
	}
	else if (is_ie4 && is_mac) {
   		document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_mac_ie.css" title=master>');
	}
	else if (is_ie4up && is_win) {
   		document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_pc_ie.css" title=master>');
	}
	else {
   		document.write('<link rel=stylesheet type="text/css" href="/holdrs/styles/ho_styles_pc.css" title=master>');
	}

 //preload the images for the home page only

	function loadImages()
		
			 {
			
			
			button01=new Image();button01.src="/holdrs/images/ho_prinav_but_homeon.gif";
			button02=new Image();button02.src="/holdrs/images/ho_prinav_but_definedon.gif";
			button03=new Image();button03.src="/holdrs/images/ho_prinav_but_holdrson.gif";
			button04=new Image();button04.src="/holdrs/images/ho_prinav_but_faqon.gif";
			button05=new Image();button05.src="/holdrs/images/ho_prinav_but_emailon.gif";
			button06=new Image();button06.src="/holdrs/images/ho_prinav_but_investon.gif";
			button07=new Image();button07.src="/holdrs/images/ho_prinav_but_icon1on.gif";
			button08=new Image();button08.src="/holdrs/images/ho_prinav_but_icon2on.gif";
			button09=new Image();button09.src="/holdrs/images/ho_prinav_but_icon3on.gif";
			button10=new Image();button10.src="/holdrs/images/ho_prinav_but_icon4on.gif";
			button11=new Image();button11.src="/holdrs/images/ho_prinav_but_icon5on.gif";
			button12=new Image();button12.src="/holdrs/images/ho_prinav_but_presson.gif";
			button13=new Image();button13.src="/holdrs/images/ho_prinav_but_currenton.gif";
			button14=new Image();button14.src="/holdrs/images/ho_prinav_but_downloadon.gif";
			button15=new Image();button15.src="/holdrs/images/ho_prinav_but_costbasison.gif";
			button16=new Image();button16.src="/holdrs/images/ho_prinav_but_sitemapon.gif";
			button17=new Image();button17.src="/holdrs/images/ho_prinav_but_manualon.gif";
			button18=new Image();button18.src="/holdrs/images/ho_prinav_but_maniconon.gif";
			button19=new Image();button19.src="/holdrs/images/ho_prinav_but_prospecton.gif";
			button20=new Image();button20.src="/holdrs/images/ho_prinav_but_icon6on.gif";
				
			graphic01=new Image();graphic01.src="/holdrs/images/ho_home_holdrslogo.gif";
			graphic02=new Image();graphic02.src="/holdrs/images/ho_home_logoSmall.gif";
			graphic03=new Image();graphic03.src="/holdrs/images/ho_home_graphic.gif";
			graphic04=new Image();graphic04.src="/holdrs/images/ho_home_graphic1.gif";
			graphic05=new Image();graphic05.src="/holdrs/images/ho_home_graphic2.gif";
			graphic06=new Image();graphic06.src="/holdrs/images/ho_home_graphic3.gif";
			graphic07=new Image();graphic07.src="/holdrs/images/ho_home_graphic4.gif";
			graphic08=new Image();graphic08.src="/holdrs/images/ho_home_graphic5.gif";
			graphic09=new Image();graphic09.src="/holdrs/images/ho_home_graphic6.gif";
			graphic10=new Image();graphic10.src="/holdrs/images/ho_home_graphic7.gif";
			graphic11=new Image();graphic11.src="/holdrs/images/ho_home_multexlogo.gif";
			graphic12=new Image();graphic12.src="/holdrs/images/ho_home_text.gif.gif";
			graphic13=new Image();graphic13.src="/holdrs/images/ho_home_topbar.gif";
			graphic14=new Image();graphic14.src="/holdrs/images/ho_home_wechslerlogo.gif";
			graphic15=new Image();graphic15.src="/holdrs/images/ho_home_animation.gif";
			graphic16=new Image();graphic16.src="/holdrs/images/ho_prinav_but_new_texton.gif";
			
				
				}

//preload the images for the other pags

				
	function loadNavImages()
		
			 {
			
			
			button01=new Image();button01.src="/holdrs/images/ho_prinav_but_homeon.gif";
			button02=new Image();button02.src="/holdrs/images/ho_prinav_but_definedon.gif";
			button03=new Image();button03.src="/holdrs/images/ho_prinav_but_holdrson.gif";
			button04=new Image();button04.src="/holdrs/images/ho_prinav_but_faqon.gif";
			button05=new Image();button05.src="/holdrs/images/ho_prinav_but_emailon.gif";
			button06=new Image();button06.src="/holdrs/images/ho_prinav_but_investon.gif";
			button07=new Image();button07.src="/holdrs/images/ho_prinav_but_icon1on.gif";
			button08=new Image();button08.src="/holdrs/images/ho_prinav_but_icon2on.gif";
			button09=new Image();button09.src="/holdrs/images/ho_prinav_but_icon3on.gif";
			button10=new Image();button10.src="/holdrs/images/ho_prinav_but_icon4on.gif";
			button11=new Image();button11.src="/holdrs/images/ho_prinav_but_icon5on.gif";
			button12=new Image();button12.src="/holdrs/images/ho_prinav_but_presson.gif";
			button13=new Image();button13.src="/holdrs/images/ho_prinav_but_currenton.gif";
			button14=new Image();button14.src="/holdrs/images/ho_prinav_but_downloadon.gif";
			button15=new Image();button15.src="/holdrs/images/ho_prinav_but_costbasison.gif";
			button16=new Image();button16.src="/holdrs/images/ho_prinav_but_sitemapon.gif";
			button17=new Image();button17.src="/holdrs/images/ho_prinav_but_manualon.gif";
			button18=new Image();button18.src="/holdrs/images/ho_prinav_but_maniconon.gif";
			button19=new Image();button19.src="/holdrs/images/ho_secnav_but_overviewon.gif";
			button20=new Image();button20.src="/holdrs/images/ho_secnav_but_benefitson.gif";
			button21=new Image();button21.src="/holdrs/images/ho_secnav_but_taxon.gif";
			button22=new Image();button22.src="/holdrs/images/ho_secnav_but_howon.gif";
			button21=new Image();button21.src="/holdrs/images/ho_secnav_but_riskon.gif";
			button22=new Image();button22.src="/holdrs/images/ho_secnav_but_flexon.gif";
			button23=new Image();button23.src="/holdrs/images/ho_secnav_but_cancellingon.gif";	
			button24=new Image();button24.src="/holdrs/images/ho_prinav_but_prospecton.gif";
			button25=new Image();button25.src="/holdrs/images/ho_prinav_but_icon6on.gif";
							
				
			}

 
  //rollovers for primary and secondary navigation
          	
          	var allNav = new Array("prinav","iconnav","secnav","home","defined","holdrs","faq","proxies",
           	"invest","prospect","icon1","icon2","icon3","icon4","icon5","icon6","press","current","download","email","costbasis",
           	"sitemap","overview","risk","benefits","tax","how","flex","manual","manicon","explicit","newtext","new_text")
    		
    		var gimmeNav=""
    		var gimmeIndex=""
			var gimmeMoreIndex=""
			var gimmeImg=""
			var	gimmeNuvva=""
			var	gimmeThirds=""
			var	gimmeThirdIndex=""
			var binary="off"
		
			function rollies(gimmeNav,gimmeIndex,gimmeMoreIndex,gimmeImg,gimmeNuvva) {
			
			if(binary == "on"){
					binary ="off"
			}
				else{
					binary ="on"
			}
				document[gimmeImg].src = "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeIndex]+binary+".gif";
				document[gimmeNuvva].src= "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeMoreIndex]+binary+".gif";
			}
		            
  			function soloRollies(gimmeNav,gimmeIndex,gimmeImg) {
  			
  			if(binary == "on"){
					binary ="off"
			}
				else{
					binary ="on"
				
			}
				
				document[gimmeImg].src = "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeIndex]+binary+".gif";
			}	
	
			function tripleRollies(gimmeNav,gimmeIndex,gimmeMoreIndex,gimmeImg,gimmeNuvva,gimmeThirds,gimmeThirdIndex) {
			
			if(binary == "on"){
					binary ="off"
			}
				else{
					binary ="on"
			}
				document[gimmeImg].src = "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeIndex]+binary+".gif";
				document[gimmeNuvva].src= "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeMoreIndex]+binary+".gif";
				document[gimmeThirds].src= "/holdrs/images/ho_"+allNav[gimmeNav]+"_but_"+allNav[gimmeThirdIndex]+binary+".gif";	
				
					
			}

	
		
			
			
//this function opens a new window called small_window ,calls the html file "glo_legal.html" and sets the chrome.
			self.name = "full_window"
			
			function newWindow()  {
				legal_window = window.open("glo_legal.html","legal_window","screenX=250,screenY=300,width=510,height=200,scrollbars=no,dependent")
				legal_window.window.focus()
			}
			
					
