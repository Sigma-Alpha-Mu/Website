document.getElementById("navMenu").innerHTML =
	'<ul>'+
		'<li><a href="index.html">Home</a></li>'+
		'<li><a href="about.html">About Us</a></li>'+
		'<li><a href="recruitment.html">Recruitment</a></li>'+
		'<li><a href="philanthropy.html">Philanthropy</a></li>'+
		'<li><a href="brotherhood.html">Brotherhood</a></li>'+
		'<li><a href="leadership.html">Leadership</a></li>'+
	'</ul>';

$(function() {
	$('a').each(function() {
		if ($(this).prop('href')==window.location.href && $(this).parent().parent().children('a')) {
			console.log($(this).parents('li').children('a'));
			$(this).parents('li').children('a').addClass('current');
		}
		else if ($(this).prop('href')==window.location.href){
			$(this).addClass('current');
		}
	});

});
