// 퀵메뉴 닫기
$('.q_close').click(function () {
    $('.quick').hide();
});

/*-------------------input-------------*/

$('.start').click(function () {
    $('.start').next().slideToggle();
});

$('.traffic_select li').click(function () {
    var txt = $(this).text();
    $(this).parent().prev().text(txt);
    $(this).parent().slideUp();
});

/*------------------도착지---------------------------*/

$('.arrival').click(function () {
    $('.arrival').next().slideToggle();
});


$('.traffic_select li').click(function () {
    var txt = $(this).text();
    $(this).parent().prev().text(txt);
    $(this).parent().slideUp()

});

/*-----------------------tab-------------------*/
$(".tab").click(function () {
 $(this).parent().addClass("on").siblings().removeClass("on");
});
