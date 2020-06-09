
$(function(){

    'use strict';

    // Carousel

    // image Hight
    $('.carousel').height( $(window).height() );
    $(window).resize( function() {
        'use strict';
        $('.carousel').height( $(window).height() );
    });

    // Text Center
    $('.carousel').each( function(){
        'use strict';
        $(".carousel .info").css( "top", ($(window).height() - $(".carousel .info").height()) /2 );
    });

    // Button Animation
    $('.carousel button').click(function(){
        'use strict';
        $('html, body').animate({
            scrollTop: $('.footer').offset().top 
        }, 1200);
    })

    // Text Effect

    var theText = $('.typer').data('text'),
        theTextLength = theText.length,
        n = 0,

        theTyper = setInterval (function () {

            $('.typer').each (function () {

                $(this).html ( $(this).html() + theText[n] );

            });

            n += 1;

            if ( n >= theTextLength ) {

                clearInterval (theTyper);

            }

        }, 130);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Works

    $('.work ul li').click (function (){
        'use strict';
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.work ul li').click(function(){

        'use strict';

        if ( $(this).hasClass('all') ){
            $('.work .box .all').removeClass('hidden');
        }
        
        else if ( $(this).hasClass('website') ) {

            $('.work .box .website').removeClass('hidden');
            $('.work .box .art').addClass('hidden');
            $('.work .box .camera').addClass('hidden');
            $('.work .box .design').addClass('hidden');

        }

        else if ( $(this).hasClass('art') ) {

            $('.work .box .art').removeClass('hidden');
            $('.work .box .website').addClass('hidden');
            $('.work .box .camera').addClass('hidden');
            $('.work .box .design').addClass('hidden');

        }

        else if ( $(this).hasClass('camera') ) {

            $('.work .box .camera').removeClass('hidden');
            $('.work .box .website').addClass('hidden');
            $('.work .box .art').addClass('hidden');
            $('.work .box .design').addClass('hidden');

        }

        else if ( $(this).hasClass('design') ) {

            $('.work .box .design').removeClass('hidden');
            $('.work .box .website').addClass('hidden');
            $('.work .box .camera').addClass('hidden');
            $('.work .box .art').addClass('hidden');

        }

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Swiper Liberary

    $(function () {
        'use strict';
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides:true,
            slidesPerView: 'auto',
            loop: false,
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 100,
                modifier: 2,
                slideShadows : true,
            },
            pagination: {
                el: '.swiper-pagination'
            },
            navigation : {
                nextEl: '.swiper-button-next',
                prevEl:'.swiper-button-prev'
            }
        });
            swiper.slideTo(3, false,false);
    });


    $('.test .swiper-slide h3').addClass('text-center');
    $('.test .swiper-slide p').addClass('text-center');
    $('.test .swiper-slide h5').addClass('text-center');

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Navbar (Active & Anemation)
    
    $("nav .collapse ul li").click(function(){

        'use strict';

        if ( $(this).hasClass('link-about') ){
            $('body, html').animate({
                scrollTop: $('.about').offset().top
            }, 1200);
        }

        else if ( $(this).hasClass('link-Portfolio') ){
            $('body, html').animate({
                scrollTop: $('.work').offset().top
            }, 1200);
        }

        else if ( $(this).hasClass('link-serv') ){
            $('body, html').animate({
                scrollTop: $('.serv').offset().top
            }, 1200);
        }

        else if ( $(this).hasClass('link-pricing') ){
            $('body, html').animate({
                scrollTop: $('.pricing').offset().top
            }, 1200);
        }

        else if ( $(this).hasClass('link-test') ){
            $('body, html').animate({
                scrollTop: $('.test').offset().top
            }, 1200);
        }

        else if ( $(this).hasClass('link-contact') ){
            $('body, html').animate({
                scrollTop: $('.footer').offset().top
            }, 1200);
        }

        else {};

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ScrollTop 

    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: $('nav').offset().top
        }, 1200);
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 600 ) {
            
            $('.scroll').css({
                opacity: 1
            });

        } else{

            $('.scroll').css({
                opacity: 0
            });

        }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Focus (Placeholder)

    var placeAttr = '';

    $("[placeholder]").focus(function() {

        placeAttr = $(this).attr('placeholder');

        $(this).attr('placeholder', '');

    }).blur (function (){

        $(this).attr('placeholder', placeAttr);

    });

    //Buttons

    $('button, input, textarea').css( 'outline', 'none' );


    $('.add-tags').on('keyup', function (event) {

        var keyboardkey = event.keyCode || event.wich ;
    
        if ( keyboardkey === 188 ) {
    
            var thisVal = $(this).val().slice(0, -1);
    
            $('.tags').append ("<span class='tag-span'><i class='fa fa-times'></i>"+  thisVal +"</span>");
    
            $(this).val('');
    
        } else {}
    
    });

    $(".tags").on('click', '.tag-span i', function(){

        $(this).parent('.tag-span').fadeOut(300);

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Email Suggest

    var emailProv = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'],

    finalString = '';

    $('.email-suggest').on ('keyup', function () {

        finalString = '';  // Reset Filled

        if (! $('.content-email').next().is('.suggest-box')) {

            $("<ul class='suggest-box'></ul>").insertAfter($('.content-email'));

        }

        for (var i = 0; i < emailProv.length; i++) {

            finalString += '<li>' + $(this).val() + '@' + emailProv[i] + '</li>' ; 

        }

        $('.suggest-box').html(finalString);

        $(this).focus (function () {

            $('.email-suggest').on ('keyup', function () {

                $('.suggest-box').fadeIn (400);

            });

        }).blur (function () {

            $('.suggest-box').fadeOut (400);
        });

    });

    $('body').on ('click', '.suggest-box li', function () {

        $('.email-suggest').val ( $(this).text() );

        $(this).parent('.suggest-box').fadeOut(300).remove();

    });



});





























