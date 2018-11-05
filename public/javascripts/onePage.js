




//================= index topBtn
$('.top_btn').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(window).on('scroll', function () {
    nowScrollTop = $(this).scrollTop();
    if (nowScrollTop >= 500) {
        $('.top_btnBox').addClass('on');
    } else {
        $('.top_btnBox').removeClass('on');
    }
});




//================= section click
$('.gnb').on('click', 'li > a', function () {
    var sectionScrollTop = $($(this).attr('href')).offset().top;
    $('body, html').animate({scrollTop: sectionScrollTop - 50}, 1000);
    $('.gnbbox, .mobile_btn').removeClass('on');
    return false;
});




//==================== mobile btn
$('.mobile_btn').on('click', function () {
    $('.gnbbox, .mobile_btn').toggleClass('on');
});

