$(document).ready(function() {
	$('section#projects a').on('click',  function() {
		$('div#modal img').attr('src', $(this).attr('data-image-url') );
	});

	var nav = $('.navbar-fixed-top');
	var distance = $('.navbar-fixed-top').offset();

    if (distance.top >= 300 ) {
		nav.addClass('effect');
	}
	

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			nav.addClass('effect');
		} else {
			nav.removeClass('effect');
		}
	});

	$('#about .blue-circle').waypoint(function() {
		$('#about .blue-circle').addClass('animated fadeInUp')
	}, {
		offset: '50%'
	});
	// animation of circles in #about

	$('#certs img').waypoint(function() {
		$(this.element).addClass('animated fadeInUp')
	}, {
		offset: '50%'
	});// animation of #certs images	

	$('#certs .codeSign').waypoint(function() {
		$('#certs .codeSign').addClass('animated infinate tada')
	}, {
		offset: '50%'
	});
    // animation of yellow sign

    $('#projects .col-sm-4').waypoint(function() {
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({'opacity':1});
	}, {
		offset: '50%'
	});
    // animation of #projects images

    $('#social div.meetup img').waypoint(function() {
		$(this.element).addClass('animated fadeInRight');	
	}, {
		offset: '50%'
	});
    // animation of #social 

    $('#social .platforms  .social-slide').waypoint(function() {
		$(this.element).addClass('animated fadeInUp');
		$(this.element).css({'opacity':0});
	}, {
		offset: '50%'
	});
    // animation of #social image


    $('#form').bootstrapValidator({
    	message: 'This value is not valid',
    	feedbackIcons: {
    		valid: 'glyphicon glyphicon-ok',
    		invalid: 'glyphicon glyphicon-remove',
    		validing: 'glyphicon glyphicon-refresh',
    	},
    	fields: {
    		name: {
    			validators: {
    				notEmpty: {
    					message: 'This field is required and cannot bee empty'
    				}
    			}
    		},
    		email: {
    			validators: {
    				notEmpty: {
    					message: 'This field is required and cannot bee empty'
    				},
    				emailAddress: {
    					message: 'The input is not a valid address'
    				}
    			}
    		},
    		message: {
    			validators: {
    				notEmpty: {
    					message: 'The massage cannot bee empty?'
    				}
    			}
    		}
    	}

    }).on('success.form.bv', function(e) {
    	e.preventDefault();

    	var $form = $(e.target);

    	var bv = $form.data('bootstrapValidator');

    	$.post($form.attr('action'), $form.serialize(), function(result) {
    		console.log(result);
    	},'json' );
    });
	
	

smoothScroll.init({
	speed: 1000,
	easing: 'easeInOutCubic',
	updateURL: false,
	offset: 0
});




});