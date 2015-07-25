function scrollToAnchor(aid){
	var aTag = $("div[id='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}

$("#navOne").click(function(){
	scrollToAnchor('aboutMe');
})

$("#navTwo").click(function(){
	scrollToAnchor('projects');
})

$("#navThree").click(function(){
	scrollToAnchor('services');
})