$(function () {
    reveal();// 顶部下拉菜单显示
    banner();//第一个轮播图
    bannerTwo();//第二个轮播图
    toggleImg();//切换图片颜色
    mainToggle();//四个块级动画
    blockOneToggle();//第一个块级动画
    blockTwoToggle();//第二个快级动画
    blockThereToggle();//第三个块级动画
    blockFourToggle();//第四个块级动画
    togBox1LeftBlock();//section box1 的切换内容动画
})
// 顶部下拉菜单显示
function reveal() {
    
        $(".active").hover(function () {
            $(this).children("div").show();
        }, function () {
            $(this).children("div").hide();
        })
};
function banner() {
    let i = 0;
    let timer = setInterval(() => Control(), 2000);
    $(".main_block>.center").hover(() => clearInterval(timer), () => timer = setInterval(() => Control(), 2000));
    $(".next").click(() => Control());
    $(".prve").click(() => {
        i--;
        i < 0 ? (i = $(".banner>img").length - 1)(runBanner(i)) : runBanner(i);
    });
    $(".btns>div").hover(function () {
        i = $(this).index();
        runBanner($(this).index());
    });
    function Control() {
        runBanner(i);
        i++;
        if (i == $(".banner>img").length)  i = 0;
    }
    function runBanner(number) {
        $(".banner>img").eq(number).stop(true).fadeIn().siblings().fadeOut();
        $(".btns>div").eq(number).addClass("active").siblings().removeClass("active");
    }
};
function bannerTwo(){
    let i = 0;
    let timer = setInterval(() => runTwoBanner(), 2000);
    function runTwoBanner(){
        $(".box1_img>div").eq(i).stop(true).fadeIn().siblings().fadeOut();
        i++;
        if (i == $(".box1_img>div").length)  i = 0;
    }
};
function toggleImg(){
    $(".box4>.one_block>div").hover(function(){
        let index = $(this).index();
        let oldSrc = $(".box4>.one_block>div").eq(index).find("img").prop("src");
        let newSrc = oldSrc.replace(/1.png/, "2.png");
        $(".box4>.one_block>div").eq(index).find("img").prop("src",newSrc);
    }
    ,function(){    
        let index = $(this).index();
        let oldSrc = $(".box4>.one_block>div").eq(index).find("img").prop("src");
        let newSrc = oldSrc.replace(/2.png/, "1.png");
        $(".box4>.one_block>div").eq(index).find("img").prop("src",newSrc);
    })
};
function mainToggle(){
    $(".one_block>div:nth-child(-n+4)").hover(function(){
        let _index = $(this).index();
        setTimeout(() => {
            $(".one_block>div:nth-child(-n+3)").css("bottom","29px");
        }, 300);
        $(".two_block").css("top","28px");
        $(".two_block>div").eq(_index).show().siblings().hide();
    });
    $(".one_block>div:nth-child(4)").hover(function(){
        setTimeout(() => {
            $(".one_block>div").eq(0).css("bottom","55px");
            let tog = $(this).css("bottom","84px");
        }, 300);
    })
    $(".close_block").click(function(){
        $(".one_block>div:nth-child(-n+4)").css("bottom","0px");
        $(".two_block").css("top","240px");
    })
};
function blockOneToggle(){
    $(".show_block_1>div:nth-child(1)>span").hover(function(){
        $(this).addClass("active1").siblings().removeClass("active1");
        let _index = $(this).index();
        $(".show_block_1>.tog_block>div").eq(_index).show().siblings().hide();
    })
};
function blockTwoToggle(){
        $(".block_2_btn>span").hover(function(){
            $(this).addClass("active2").siblings().removeClass("active2");
            setTimeout(() => {
                let _index = $(this).index();
                $(".block_2_contant>.list").css("marginLeft",`-${_index*160}px`);
            }, 400);
        })
};
function blockThereToggle(){
        $(".block_3_btn>span").hover(function(){
            $(this).addClass("active3").siblings().removeClass("active3");
            setTimeout(() => {
                let _index = $(this).index();
                $(".togmain>.tog_block_3").css("marginLeft",`-${_index*160}px`);
            }, 400);
        })
};
function blockFourToggle(){
    $(".block_btn_4>span").hover(function(){
        $(this).addClass("active4").siblings().removeClass("active4");
        setTimeout(() => {
            let _index = $(this).index();
            $(".tog_main_block4>.block4_toggle").css("marginLeft",`-${_index*160}px`);
        }, 400);
    })
};
function togBox1LeftBlock(){
    $(".main_block>.left>div").hover(function(){
        let _index = $(this).index();
        console.log(_index);
        $(".togLeftBlock").show();
        $(".togLeftBlock>div>div").eq(_index).show().siblings().hide();
    },function(){
        $(".togLeftBlock").hide();
    })
}
