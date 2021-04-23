function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#details").click(function() { scrollToAnchor('details');});
$("#register").click(function() { scrollToAnchor('register');});
$("#sessions").click(function() { scrollToAnchor('sessions');});
$("#sponsors").click(function() { scrollToAnchor('sponsors');});
$("#venue").click(function() { scrollToAnchor('venue');});

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#backtotop').fadeIn();
		} else {
			$('#backtotop').fadeOut();
		}
	});

	$('#backtotop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});