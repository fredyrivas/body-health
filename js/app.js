//$(document).foundation();


$(document).ready(function () {
    setMenu();
    singleButtonEvents();
    handleMenuMobile();
});


$(window).scroll(function (e) {
    evaluateScroll();
});

$(window).resize(function (e) {
    handleMenuMobile();
});

function evaluateScroll() {

    if (!reviewIsMobile()) {
        if (window.pageYOffset > 20) {
            TweenMax.to('.menu-section', .5, {backgroundColor: 'rgba(255, 255, 255, 1)'});
        } else {
            TweenMax.to('.menu-section', .5, {backgroundColor: 'rgba(255, 255, 255, 0.80)'});
        }
    }
}


function setMenu() {
    $.each($('.menu-cat'), function () {
        $(this).bind('click', clickMenu);
    });
}
function clickMenu(e) {

    switch ($(e.currentTarget).index('.menu-cat')) {
        case 0:
            TweenLite.to(window, .5, {scrollTo: 0});
            break;
        case 1:
            TweenLite.to(window, .5, {scrollTo: getElemPos('#home-experiencia-id') - $('.menu-section').height()});
            break;
        case 2:
            TweenLite.to(window, .5, {scrollTo: getElemPos('#tratamientos-id') - $('.menu-section').height()});
            break;
        case 3:
            TweenLite.to(window, .5, {scrollTo: getElemPos('#tecnologia-id') - $('.menu-section').height()});
            break;
        case 4:
            TweenLite.to(window, .5, {scrollTo: getElemPos('#equipos-id') - $('.menu-section').height()});
            break;
        case 5:
            TweenLite.to(window, .5, {scrollTo: getElemPos('#contacto-id') - $('.menu-section').height()});
            break;
    }
}


function getElemPos(_div) {
    var elempos = $(_div).position();
    var newpos = elempos.top;

    return newpos;
}


function singleButtonEvents() {
    $('.body-health-logo').click(function () {
        TweenLite.to(window, .5, {scrollTo: 0});
    });
}


function handleMenuMobile() {
    if(reviewIsMobile()){
        $('.mobile-menu-icon').click(function () {

            if(!$(this).data('opened')){
                $(this).data('opened', true);
                $(this).find('img').attr('src', 'images/mobile-close-menu-icon.png');
                TweenLite.to('.menu-right', .5, {autoAlpha: 1});
            }else{
                $(this).data('opened', false);
                $(this).find('img').attr('src', 'images/mobile-menu-icon.png');
                TweenLite.to('.menu-right', .5, {autoAlpha: 0});
            }
        });

        TweenLite.set('.menu-right', {autoAlpha: 0});
    }else{
        TweenLite.set('.menu-right', {autoAlpha: 1});
    }
}

function reviewIsMobile() {
    var isMobile;
    if ($(window).width() < 768) {isMobile = true;} else {isMobile = false;}
    return isMobile;
}



