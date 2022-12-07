// 메인 슬라이드
var pcSlideList = $('.pc_slide_list li').innerWidth();

$('.pc_slide_list li').last().prependTo('.pc_slide_list');
$('.pc_slide_list').css('margin-left',-100+'vw');

// auto슬라이드 (pc)
setInterval(function(){
    $('.pc_slide_list').animate({marginLeft:'-='+100+'vw'}, 'slow', function(){
        $('.pc_slide_list li').first().appendTo('.pc_slide_list');
        $('.pc_slide_list').css('margin-left',-100+'vw');
    });
}, 2500);



// pc사이즈 메인 슬라이드
$('.pc_next').click(function () {
    $('.pc_slide_list li').first().appendTo('.pc_slide_list');
    $('.pc_slide_list').css('left', -pcSlideList);
});
$('.pc_prev').click(function () {
    $('.pc_slide_list li').last().prependTo('.pc_slide_list');
    $('.pc_slide_list').css('left', +pcSlideList);
});

// 모바일 사이즈 메인 슬라이드
var mbSlideList = $('.mobile_slide_list li').innerWidth();

$('.mb_next').click(function () {
    $('.mobile_slide_list li').first().appendTo('.mobile_slide_list');
    $('.mobile_slide_list').css('left', -mbSlideList);
});
$('.mb_prev').click(function () {
    $('.mobile_slide_list li').last().prependTo('.mobile_slide_list');
    $('.mobile_slide_list').css('left', +mbSlideList);
});


// 퀵메뉴 닫기
$('.q_close').click(function () {
    $('.quick').hide();
})

//팝업창 닫기
$('.p_close1').click(function () {
    $('.popup1').hide();
})
$('.p_close2').click(function () {
    $('.popup2').hide();
})

// 주라기's 픽 슬라이드
var pickWidth = $('.pick_slide_list li').innerWidth();

$('.pick_btn').click(function () {
    $('.pick_slide_list li').first().appendTo('.pick_slide_list');
    $('.pick_slide_list').css('left', -pickWidth);
})
