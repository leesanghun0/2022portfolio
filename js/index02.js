//-------------------------------메뉴----------------------
$('.menu_toggle_btn').click(function(){
    $('.gnb').slideToggle();
});

//--------------------------스킬 세션-------------------

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_html').addClass('active_gage_html');
        }else{
            $('.progress_gage_html').removeClass('active_gage_html');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_css').addClass('active_gage_css');
        }else{
            $('.progress_gage_css').removeClass('active_gage_css');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_javaScript').addClass('active_gage_javaScript');
        }else{
            $('.progress_gage_javaScript').removeClass('active_gage_javaScript');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_Photoshop').addClass('active_gage_Photoshop');
        }else{
            $('.progress_gage_Photoshop').removeClass('active_gage_Photoshop');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_Illustrator').addClass('active_gage_Illustrator');
        }else{
            $('.progress_gage_Illustrator').removeClass('active_gage_Illustrator');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1200){
            $('.progress_gage_Figma').addClass('active_gage_Figma');
        }else{
            $('.progress_gage_Figma').removeClass('active_gage_Figma');
        }
        fixScroll + scroll;
    }); 
});




//------------------------------포트폴리오세션------
var recWidth = $('.portfolio_list li').innerWidth();

$('.r_next').click(function(){
    $('.portfolio_list li').first().appendTo('.portfolio_list');
})
$('.r_prev').click(function(){
    $('.portfolio_list li').last().prependTo('.portfolio_list');
});

/*----------------------------포트폴리오 모달--------------------*/

/*--------------------토트넘----------------------*/
$(document).ready(function(){
    
    var w = ($(window).width()/2)-($(".modal_box01").width()/2);
    var h = ($(window).height()/2)-($(".modal_box01").height()/2);
    
    $(".modal_box01").css({
        left : w, top : h
    });
    
    $(".totten_btn a").click(function(){
        $(".modal_box01").fadeIn(0);
        $(".modal_bg01").fadeIn(0);
    });
    
    $(".modal_close_btn01").click(function(){
        $(".modal_box01").fadeOut(0);
        $(".modal_bg01").fadeOut(0);
    });
});

/*--------------------------모나미몰----------------------------------------*/
$(document).ready(function(){
    
    var w = ($(window).width()/2)-($(".modal_box02").width()/2);
    var h = ($(window).height()/2)-($(".modal_box02").height()/2);
    
    $(".modal_box02").css({
        left : w, top : h
    });
    
    $(".monamimall_btn a").click(function(){
        $(".modal_box02").fadeIn(0);
        $(".modal_bg02").fadeIn(0);
    });
    
    $(".modal_close_btn02").click(function(){
        $(".modal_box02").fadeOut(0);
        $(".modal_bg02").fadeOut(0);
    });
});

/*---------------------여행사 모달----------------------------------------*/
$(document).ready(function(){
    
    var w = ($(window).width()/2)-($(".modal_box03").width()/2);
    var h = ($(window).height()/2)-($(".modal_box03").height()/2);
    
    $(".modal_box03").css({
        left : w, top : h
    });
    
    $(".yomojomo_btn a").click(function(){
        $(".modal_box03").fadeIn(0);
        $(".modal_bg03").fadeIn(0);
    });
    
    $(".modal_close_btn03").click(function(){
        $(".modal_box03").fadeOut(0);
        $(".modal_bg03").fadeOut(0);
    });
});
/*-----------------------------------페스티벌 모달-----------------------*/
$(document).ready(function(){
    
    var w = ($(window).width()/2)-($(".modal_box").width()/2);
    var h = ($(window).height()/2)-($(".modal_box").height()/2);
    
    $(".modal_box").css({
        left : w, top : h
    });
    
    $(".festival_btn a").click(function(){
        $(".modal_box").fadeIn(0);
        $(".modal_bg").fadeIn(0);
    });
    
    $(".modal_close_btn").click(function(){
        $(".modal_box").fadeOut(0);
        $(".modal_bg").fadeOut(0);
    });
});




/*
---------------경고창-----------------------*/

