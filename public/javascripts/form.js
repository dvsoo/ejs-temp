//================== login, form
$('.form_on').on('keyup mouseup', function(){
    $(this).addClass('on');
}).on('blur', function(){
    $(this).removeClass('on');
});
//================== finish login, form





//================== validator

const email_validator = function(email_class){
    const $user_email = $(email_class).val(),
        $error_box = $('.email_content'),
        $email_pattern =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        $email_check = $user_email.match($email_pattern);

    if($email_check === null){
        $('.form-group').removeClass('error');
        $error_box.addClass('error');
        $error_box.find($('.append_box')).text('이메일 형식이 옳지 않습니다');
    }

};
//================== finish validator
