// 퀵메뉴 닫기
$('.q_close').click(function(){
    $('.quick').hide();
})

// 주류+안주 조합 추천 슬라이드
var recWidth = $('.recommend_slide_list li').innerWidth();

$('.r_next').click(function(){
    $('.recommend_slide_list li').first().appendTo('.recommend_slide_list');
})
$('.r_prev').click(function(){
    $('.recommend_slide_list li').last().prependTo('.recommend_slide_list');
});

// 해장 추천 슬라이드
var reliveWidth = $('.relive_slide_list li').innerWidth();

$('.rv_next').click(function(){
    $('.relive_slide_list li').first().appendTo('.relive_slide_list');
})
$('.rv_prev').click(function(){
    $('.relive_slide_list li').last().prependTo('.relive_slide_list');
})

// 꿀조합 레시피 슬라이드
var recipeWidth = $('.recipe_slide_list li').innerWidth();

$('.rp_next').click(function(){
    $('.recipe_slide_list li').first().appendTo('.recipe_slide_list');
})
$('.rp_prev').click(function(){
    $('.recipe_slide_list li').last().prependTo('.recipe_slide_list');
})