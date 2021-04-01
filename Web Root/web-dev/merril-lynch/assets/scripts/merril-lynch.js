function tmt_winLaunch(theURL,winName,targetName,features) { 
eval(winName+"=window.open('"+theURL+"','"+targetName+"','"+features+"')")
}

function makeRemoteSpecial(URL) {
	remote=window.open(URL,"window","width=435,height=450,alwayRaised=yes,scrollbars=no,resizable=no");
}

function makeRemoteLeapfrog(URL) {
	remote=window.open(URL,"window","width=635,height=650,alwayRaised=yes,scrollbars=no,resizable=no");
}

function makeRemoteMltoday(URL) {
	remote=window.open(URL,"window","width=615,height=600,alwayRaised=yes,scrollbars=yes,resizable=no");
}

function makeRemoteGallery(URL){
	remote=window.open(URL,"window","width=700,height=400,alwayRaised=yes,scrollbars=no,resizable=no");
}

function makeRemoteGalleryTall(URL){
	remote=window.open(URL,"window","width=700,height=670,alwayRaised=yes,scrollbars=no,resizable=no");
}