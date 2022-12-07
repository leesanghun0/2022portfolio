/*menu_toggle_btn*/

var toggle = false;

$('.gnb_toggle_btn').click(function(e){
    toggle =! toggle

    e.preventDefault();
    
    if(toggle) {
        $('.header_bottom').slideDown();
        $('.gnb_toggle_btn span').addClass('selected');
        $('.deemed').show();
        $('body').addClass('none_scroll');
    } else {
        $('.header_bottom').slideUp();
        $('.gnb_toggle_btn span').removeClass('selected');
        $('.deemed').hide();
        $('body').removeClass('none_scroll');
    }
});
