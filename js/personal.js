/*nav*/
   /*根据窗口宽度选择导航颜色样式*/
$(window).resize(function(){
    var wwidth=$(window).width();
    if(wwidth>=930){
        $(".nav1").css("display","block");
        $(".nav2").css("display","none");
    }else{
        $(".nav2").css("display","block");
        $(".nav1").css("display","none");
    }
})
$(function(){
    /*滚动条的兼容*/
    if(document.documentElement.scrollTop==0){
       	document.documentElement.scrollTop=1
    }
    var aa=document.documentElement.scrollTop!=0?document.documentElement:document.body;


    $(window).resize();
    $(".innav2").click(function(){
        $(".under-innav").slideToggle();
    })
    var innavWords=$(".innav-word");
    var inunderInnav=$(".under-innav>div");

    $("body>.iconfont").click(function(){
        $(aa).animate({"scrollTop":0},300)
    })

    /*大屏导航点击事件*/
        /*点击导航，下面的滑块动画*/
    innavWords.click(function(){
        var navw=$(".innav1").width();
        var aa=navw/4;
        var index=$(this).index();
        $(".slider").animate({"left":index*aa},300)
    })
        $(innavWords[0]).click(function(){
            $(aa).animate({scrollTop:0},300);
        })
        $(innavWords[1]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight())+"px"},300)
        })
        $(innavWords[2]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight()+$(".works-box").outerHeight())+"px"},300)
        })
        $(innavWords[3]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight()+$(".works-box").outerHeight()+$(".skill-box").outerHeight())+"px"},300)
        })
    /*小屏导航点击事件*/
        $(inunderInnav[0]).click(function(){
            $(aa).animate({scrollTop:0},300)
        })
        $(inunderInnav[1]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight())+"px"},300)
        })
        $(inunderInnav[2]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight()+$(".works-box").outerHeight())+"px"},300)
        })
        $(inunderInnav[3]).click(function(){
            $(aa).animate({scrollTop:""+($(".header").outerHeight()+$(".on-about-con").outerHeight()+$(".works-box").outerHeight()+$(".skill-box").outerHeight())+"px"},300)
        })

    /*down-icon 点击页面下拉事件*/
    var header=$(".header");
    var downIcon=$(".down-icon");
    downIcon.click(function(e){
        e.preventDefault();
        $(aa).animate({scrollTop:""+$(".header").outerHeight()+"px"},300)
    })

    /*in-works-con-yuan*/
    var inWorksConYuan=$(".in-works-con-yuan");
    inWorksConYuan.hover(function(){
        $(this).finish(); 
        $(this).animate({opacity:'0.8'},500)       
    },function(){
        $(this).animate({opacity:'0'},200)
    })
   




    /*skill-show 圆环进度条  canvas*/
        /*i     第几个canvas
         *color 颜色
         *per   百分比
         */
    function yuan(i,color,per){
        var canvas=$("canvas")[i];
        var cobj=canvas.getContext("2d");
        var circ = Math.PI * 2;//
        var quart = Math.PI / 2;
        var imd = null;//画布数据
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        imd=cobj.getImageData(0,0,150,150)
        cobj.strokeStyle=color;//颜色
        cobj.lineWidth=8;//宽度
        function draw(current){
            cobj.putImageData(imd, 0, 0);
            cobj.beginPath();
            cobj.arc(75,75,60,-(quart),((circ)*current)-quart,false);
            cobj.stroke();
        }
        var t=0;
        var time=null;
        function loadCanvas(now){
            time= setInterval(function(){
                if(t>now){
                    clearInterval(time);
                }else{
                    draw(t);
                    t+=0.01;
                }
            },20);
        }
        loadCanvas(per);
        time=null;
    }
    
   


   

    /*erweima 鼠标移入二维码出现效果*/
    $(".iconfont").hover(function(){
        $(this).find(".erweima").css("display","block");
    },function(){
        $(this).find(".erweima").css("display","none");
    })


    /*滚轮事件*/
    $(window).scroll(function(){
        /*导航滑块显示*/
        var headh=$(".header").outerHeight()+$(".on-about-con").outerHeight();
        var worksh=$(".works-box").outerHeight();
        var skillh=$(".skill-box").outerHeight();
        if(aa.scrollTop<headh&&aa.scrollTop>=0){
            $(".slider").css({"left":"0"})
        }else if(aa.scrollTop>headh&&aa.scrollTop<headh+worksh){
            $(".slider").css({"left":"25%"})
        }else if(aa.scrollTop>headh+worksh&&aa.scrollTop<headh+worksh+skillh-200){
            $(".slider").css({"left":"50%"})

        }else if(aa.scrollTop>headh+worksh+skillh-200){
            $(".slider").css({"left":"75%"})
        }
        /*右侧显示*/
        var rightside=$(".rightside");
        var iconfont=$("body>.iconfont");
        if(aa.scrollTop>$(".header").outerHeight()){
            rightside.css("display","block")
            iconfont.css("display","block")
        }
        if(aa.scrollTop<$(".header").outerHeight()){
            rightside.css("display","none")
            iconfont.css("display","none")
        }
        /*圆形百分比显示*/
        if(aa.scrollTop>=($(".header").outerHeight()+$(".on-about-con").outerHeight()+200)&&aa.scrollTop<($(".header").outerHeight()+$(".on-about-con").outerHeight()+300)){
            yuan(0,"pink",0.92);
            yuan(1,"pink",0.90);
            yuan(2,"pink",0.85);
            yuan(3,"pink",0.88);
            yuan(4,"pink",0.85);
            yuan(5,"pink",0.83);
            yuan(6,"pink",0.88);
            yuan(7,"pink",0.80);
            yuan(8,"pink",0.80);
            yuan(9,"pink",0.80);
            yuan(10,"pink",0.80);
            yuan(11,"pink",0.80);
            
        }
    })

    /*inon-about-con 鼠标移入遮罩出现动画*/
    $(".inon-about-con").hover(function(){
        $(".yuanbox").find("li").finish();
        var lis=this.getElementsByTagName('li');
        for(var i=0;i<lis.length;i++){
            $(lis[i]).animate({left:""+Math.cos(60*i*Math.PI/180)*150+"px",top:""+Math.sin(60*i*Math.PI/180)*150+"px","opacity":1},1000)
        }
    },function(){
        var lis=this.getElementsByTagName('li');
        for(var i=0;i<lis.length;i++) {
            $(lis[i]).animate({left: "0px", top: "0px","opacity":0},1000)
        }
    })




})