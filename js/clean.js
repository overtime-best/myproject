/*global $, window*/

$(function () {
    'use strict';
    var myNavbar = $('.navbar');
    $('.header').height($(window).height());
    
    //Ad And Remove Active Class
    
    

    
    //adjust change the navbar background and color
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > myNavbar.height()) {
            if (!myNavbar.hasClass('style')) {
                myNavbar.addClass('style');
                myNavbar.css('border-bottom', '1px solid rgba(0, 0, 0, .5)');
                $('.navbar h2').css({'color': '#000', 'text-shadow': '3px 3px 2px #999', 'font-weight': 'bold', 'font-size': '16px'});
            }
        } else {
            myNavbar.removeClass('style');
            myNavbar.css('border-bottom', '1px solid rgba(255, 255, 255, .3)');
            $('.navbar h2').css({'color': '#fff', 'text-shadow': '3px 3px 2px #999', 'font-size': '18px', 'transition': '.6s all ease-in-out'});
        }
        
        //Sync Links 
        
        $('.public').each(function () {
            if ($(window).scrollTop() + 30 >= $(this).offset().top) {
                $('.links li[data-value="' + $(this).attr('id') + '"]').addClass('active').siblings().removeClass('active');
            }
        });
        
        //Show chevron Up After Scroll
        if ($(this).scrollTop() <= $('.header').offset().top) {
            $('.chevron').fadeOut(1000);
        } else {
            $('.chevron').fadeIn(1000);
        }
    });
    // Smoth Scroll To Elements 
    
    $('.links li').on('click', function () {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 500);
    });
    
    
    
    // nice overlay hover 
    
    $('.images .row >div').on({
        mouseenter: function () {
            $('#' + $(this).data('hover')).fadeIn(500);
        },
        mouseleave: function () {
            $('#' + $(this).data('hover')).fadeOut(500);
        }
    });
    
    //Chevron Up 
    
    $('.chevron').on({
        mouseenter: function () {$('.chevron i').addClass('top-down');
                                },
        mouseleave: function () {$('.chevron i').removeClass('top-down');
                                }
    });
    $('.chevron i').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    
    // Nice Scroll
    
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '8px',
        cursorborderradius: '0',
        cursorborder: 'none'
    });
});