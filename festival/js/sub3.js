// 퀵메뉴 닫기
$('.q_close').click(function(){
    $('.quick').hide();
})

// 페이지로드
$(document).ready(function(){
    $('.qna_section').hide();
    $('.bar_section').hide();
    $('.result_section').hide();
});

// 시작 페이지에서 '시작하기'버튼 클릭 후 
$('.find_section .find_btn').click(function(){
    $('.find_section').hide(); //시작 페이지 숨김
    $('.qna_section').show(); //q1 표시
    $('.bar_section').show(); // 페이지네이션 표시
    $('.bar_section .bar1').siblings().hide();
});

// q1에서 q2로
$('.qna_section_1 .next_btn').click(function(){
    if($('input[type=radio][name=q1]:checked').is(':checked')){
        $('.qna_section_1').hide(); //q1 숨김
        $('.qna_section_2').show(); //q2 표시
        $('.bar_section .bar2').show();
        $('.bar_section .bar2').siblings().hide();
    } else {
        alert('⭐️체크해 주세요!⭐️');
    }
});

// q2에서 q3으로
$('.qna_section_2 .next_btn').click(function(){
    if($('input[type=radio][name=q2]:checked').is(':checked')){
        $('.qna_section_2').hide(); //q2 숨김
        $('.qna_section_3').show(); //q3 표시
        $('.bar_section .bar3').show();
        $('.bar_section .bar3').siblings().hide();
    } else {
        alert('⭐️체크해 주세요!⭐️');
    }
});

// q3에서 결과 페이지로
$('.qna_section_3 .next_btn').click(function(){
    if($('input[type=radio][name=q3]:checked').is(':checked')){
        $('.qna_section_3').hide(); //q3 숨김
        $('.result_section').show(); //결과페이지 표시
        $('.bar_section').hide(); // 페이지네이션 숨김
    }else {
        alert('⭐️체크해 주세요!⭐️');
    }    
});


