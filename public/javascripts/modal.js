
//==================== alert
//boolean image
function modal_alert(title, text, image){
    !title ? 'ARE YOU SURE?' : title;

    $('.error_modal').addClass('on');
    $('.error_modal .m_title').text(title);
    $('.error_modal .desc').text(text);
    if(image){
        $('.error_modal .m_title').addClass('confirm');
    }else{
        $('.error_modal .m_title').removeClass('confirm');
    }
}

$('.ok_btn').on('click', function(){
    $('.error_modal').removeClass('on');
});
