$(function(){
    //搜索类别选择
    $(".searchT").click(function(){
        $(".category").toggle();
    });
    $(".category li").click(function(){
        $(this).addClass("hotLi").siblings().removeClass("hotLi");
        $(".searchT").text($(this).text());
        $(".category").hide();
    });
    $(".searchT2").click(function(){
        $(".category2").toggle();
    });
    $(".category2 li").click(function(){
        $(this).addClass("hotLi").siblings().removeClass("hotLi");
        $(".searchT2").text($(this).text());
        $(".category2").hide();
    });
    //菜单栏
    $(".listTit").mouseenter(function(){
        $(this).children(".reclassify").show();
    })
    .mouseleave(function(){
        $(this).children(".reclassify").hide();
    });
    $(".classifyTit").click(function(){
        $(this).children(".classify").toggle();
    });
    $(".classify").click(function(){
        event.stopPropagation();
    });

    $(".navInfo li").mouseenter(function(){
        $(this).find(".erji").slideDown();
    });
    $(".navInfo li").mouseleave(function(){
        $(this).find(".erji").slideUp();
    })

});
$(".banner2").slide({mainCell:"ul.bd",effect:"left",autoPlay:true});
$(".notice").slide({mainCell:".bd",titCell:".hd p"});
$(".service1").slide({mainCell:".numList",titCell:".rightTit p"});
$(".service2").slide({mainCell:".numList",titCell:".rightTit p"});
$(".service3").slide({mainCell:".numList",titCell:".rightTit p"});
$(".service4").slide({mainCell:".numList",titCell:".rightTit p"});
$(".switchCon").slide({mainCell:".switchA",titCell:".switchTit p"});
$(".qunzu").slide({mainCell:".comList",titCell:".comTit p"});
$(".answer").slide({mainCell:".answerList",titCell:".comTit p"});
$(".huati").slide({mainCell:".readCon",titCell:".readTit p"});
