// JavaScript Document

$(function(){
	$('.clorfulSelect').bind('change', function(){
		$(this).removeClass();
		if($(this).val() == 'red'){
			$(this).addClass('red');
		}
		if($(this).val() == 'blue'){
			$(this).addClass('blue');
		}
		if($(this).val() == 'green'){
			$(this).addClass('green');
		}
		if($(this).val() == 'gray'){
			$(this).addClass('gray');
		}
		if($(this).val() == 'black'){
			$(this).addClass('black');
		}
	});
});
