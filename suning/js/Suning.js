$(function(){
    document.documentElement.scrollTop=1;
//右侧栏
    var right1=$(".right");
    var rightbtn=$(".rightbtn");
    var rightbox=$(".right-box");
    for (var i = 0; i < rightbtn.length;i++) {
    	rightbtn[i].index=i;
    	hover(rightbtn[i],function(){
    		for (var j = 0; j < right1.length; j++) {
    			right1[j].style.display="none";
    		};
    		right1[this.index].style.display="block";
    	},function(){
    		for (var k = 0; k < right1.length; k++) {
    			right1[k].style.display="none";
    		};
    	})
    };



//banner左侧导航
var listnav=$(".list-nav");
var listnavImg=$(".listnav-img");
for (var i = 0; i < listnav.length; i++) {
    listnav[i].index=i;
    hover(listnav[i],function(){
        var newword9=$(".word-9",this);
        for (var j = 0; j < newword9.length; j++) {
            $("a",newword9[j])[0].style.color="#2b2b2b";
        };
        listnavImg[this.index].style.display="block";
    },function(){
        var newword9=$(".word-9",this);
        for (var j = 0; j < newword9.length; j++) {
            $("a",newword9[j])[0].style.color="#ffffff";
        };
        listnavImg[this.index].style.display="none";
    })
};
var topfindNavLeft=$(".topfind-nav-left")[0];
hover(topfindNavLeft,function(){
    $(".word-4",topfindNavLeft)[0].style.textDecoration="underline";
},function(){
    $(".word-4",topfindNavLeft)[0].style.textDecoration="none";
})


//楼层选项卡效果
function floorMove(newword,innerright){
for (var i = 0; i < newword.length; i++) {
    newword[i].index=i;
    newword[i].onclick=newword[i].onmouseover=function(){
        for (var j = 0; j < innerright.length; j++) {
            innerright[j].style.display="none";
            newword[j].style.fontWeight="normal";
            newword[j].style.borderBottom="0px";
            newword[j].style.color="#666666";
        };
        innerright[this.index].style.display="block";
        newword[this.index].style.fontWeight="bold";
        newword[this.index].style.borderBottom="3px solid #ff6b80";
        newword[this.index].style.paddingBottom="5px";
        newword[this.index].style.color="#222222";
    }
};
}
floorMove($(".word-12",$(".floor1")[0]),$(".floor1-inner-right",$(".floor1")[0]));
floorMove($(".word-12",$(".floor1")[1]),$(".floor1-inner-right",$(".floor1")[1]));
floorMove($(".word-12",$(".floor1")[2]),$(".floor1-inner-right",$(".floor1")[2]));
floorMove($(".word-12",$(".floor1")[3]),$(".floor1-inner-right",$(".floor1")[3]));
floorMove($(".word-12",$(".floor1")[4]),$(".floor1-inner-right",$(".floor1")[4]));
floorMove($(".word-12",$(".floor1")[5]),$(".floor1-inner-right",$(".floor1")[5]));
floorMove($(".word-12",$(".floor1")[6]),$(".floor1-inner-right",$(".floor1")[6]));
floorMove($(".word-12",$(".floor1")[7]),$(".floor1-inner-right",$(".floor1")[7]));
floorMove($(".word-12",$(".floor1")[8]),$(".floor1-inner-right",$(".floor1")[8]));
floorMove($(".word-12",$(".floor1")[9]),$(".floor1-inner-right",$(".floor1")[9]));


//苏宁社区轮播
var left=$(".show-leftbtn")[0];
var right=$(".show-rightbtn")[0];
var snsqRightBox=$(".snsq-right-box")[0];
var flag1=true,flag2=true;
right.onclick=function(){
  if(flag2){
    flag2=false;
    animate(snsqRightBox,{left:-1000},500,function(){
        var first=getFirst(snsqRightBox);
        appendObj(snsqRightBox,first);
        snsqRightBox.style.left="0px";
        flag2=true;
    })
  }
}
left.onclick=function(){
  if(flag1){
    flag1=false;
    var first=getFirst(snsqRightBox);
    var last=getLast(snsqRightBox);
    addBefore(last,first);
    snsqRightBox.style.left="-1000px";
    animate(snsqRightBox,{left:0},500);
    flag1=true;
  }
}

//下拉框
//左
var headinnerLeft=$(".headinner-left")[0];
var wzdhBox=$(".wzdh-box")[0];
hover(headinnerLeft,function(){
    animate(wzdhBox,{height:242},200);
    wzdhBox.style.borderBottom="1px solid #bbb";
},function(){
    animate(wzdhBox,{height:0},200);
    wzdhBox.style.borderBottom="0";
})
//右

$(".topbtn").each(function(index){
  this.index=index;
  $(this).hover(function(){ 
     var heights=$(this).find(".word1-box").find(".word1-1").find("a").length;
     $(".word1-box").css("height","0").eq(this.index).animate({height:heights*30},500); 
     // if(){
     //  $(".word1-box").eq(this.index).css("borderBottom","1px solid #bbb")
     // }  
  },function(){
     $(".word1-box").css("height","0")
  })
})



//banner轮播
//1.鼠标移入移出
$(".bannerinner-center").hover(function(){
    $(".bannerleft,.bannerright").animate({opacity:1},200);
    clearInterval(t) 
  },function(){
    $(".bannerleft,.bannerright").animate({opacity:0},200)
    t=setInterval(move,3000)
  })
//2.自动轮播
var colorarr=["#570c9d","#995bfc","#f8f9fb","#995bfc","#8803ff","#fe3b77","#570c9d","#f8f9fb","#ff3bff","#fe6d00","#bc1b2d","#8803ff","#ff3bff","#570c9d","#ab09fd","#f8f9fb","#995bfc","#fe3b77","#ff3bff","#8803ff","#ee7001","#995bfc","#bc1b2d","#8803ff","#995bfc","#fe3b77","#f8f9fb"]
var t=setInterval(move,3000);
var num=0;
function move(){
    num++;
    if(num>$(".btn").length-1){
        num=0;
    }
    $(".btn").css("background","#fff").eq(num).css("background","yellow").parent().css("display","block").animate({top:-15},100).addClass("aa").parent().css("background","rgba(0,0,0,0.8)");
    $(".bg").not(".aa").animate({top:0}).css("display","none").parent().css("background","rgba(0,0,0,0.5)").end().end().removeClass("aa");
    $(".banner-imgbox a").css({display:"none",opacity:0.5,}).eq(num).css("display","block").animate({opacity:1},300); 
    $(".banner").css("background",colorarr[num])
  }
//3.箭头点击事件
$(".bannerright").click(function(){
     $(".bg").stop();
     move();
  })
  $(".bannerleft").click(function(){
    $(".bg").stop();
     num-=2;  
     if(num<=-2){
     num=$(".btn").length-2;
     }
     move();
  })
//4.每一个按钮的移入移出事件
    $(".btn").each(function(index){
        this.index=index;
        $(this).hover(function(){
        $(".bannerinner-center a").css({display:"none",opacity:0.5}).eq(this.index).css("display","block").animate({opacity:1},300);
        $(".btn").css("background","#fff") 
        $(this).css("background","yellow");
        $(".banner").css("background",colorarr[this.index])
        },function(){
           num=this.index;  
        })
    })

//5.btninner的移入移出效果
$(".box-2").each(function(index){
     this.index=index;
     var that=this;
      $(this).hover(function(){
      $(this).siblings().css("background","rgba(0,0,0,0.5").end().css("background","rgba(0,0,0,0.8)");
      $(".bg").css({top:0,display:"none"});
      var num=$(this).find(".btn").length;
      if(this.index<2){
      $(this).find(".bg").css({
        width:300,
        height:num*15,
        display:"block",
        top:-num*15,
        left:0
      }).find(".btn").css({
        margin:5,
        float:"left",
        display:"block"
      }).wrap("<div class='wrap'></div>").after("<a href='#'></a>");
      }else{
      $(this).find(".bg").css({
        width:300,
        height:num*15,
        display:"block",
        top:-num*15,
        right:0,
        left:"",
        textAlign:"left"
       }).find(".btn").css({
        margin:5,
        float:"left",
        display:"block"
       }).wrap("<div class='wrap'></div>").after("<a href='#'></a>");
       }
      //此时轮播图的切换 
      $(".btn").css("background","#fff");
      $(".box-2 a").css({display:"none","opacity":0.5});
      $(this).find(".btn").eq(0).css("background","yellow")
      $(".box-2").eq(this.index).find("a").eq(0).css("display","block").animate({opacity:1})
      //此时wrap 中的a的hover效果
      $(".wrap a").each(function(index){ 
      this.index=index;
      $(this).hover(function(){
      $(".wrap a").css("color","#fff");
      $(this).css("color","yellow");
      $(".btn").css("background","#fff");
      $(this).prev().css("background","yellow");
      $(".box-2 a").css({display:"none",opacity:0.5});
      $(".box-2").eq(that.index).find("a").eq(this.index).css("display","block").animate({opacity:1})
      },function(){})
  })},function(){
      $(this).find(".bg").css({
        width:70,
        height:15,
        display:"block",
        left:0,
        top:-15,
        textAlign:"center"
      }).find(".btn").css({
        margin:"",
        display:"inline-block",
        float:""
      }).unwrap().next().remove();
     })
   })


//顶部关闭图片
var closeBtn=$(".closebtn")[0];
var topBanner=$(".topbanner-box")[0];
closeBtn.onclick=function(){
    topBanner.style.display="none";
}


//返回顶部 楼层快速到达
var floors=$(".floor1");
var floornavbox=$(".floor-nav")[0];
var floorbtns=$(".in-floor-nav");
window.onscroll=function(){
    var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
    // if(obj.srcollTop>=100){
    //     floornavbox.style.display="block";
    // }
    // if(obj.scrollTop<100){
    //     floornavbox.style.display="none";
    // }
    if(obj.scrollTop>=1450){
        floornavbox.style.display="block";
    }
    if(obj.scrollTop<1450){
        floornavbox.style.display="none";
    }
    rightbtn[6].onclick=function(){
        animate(obj,{scrollTop:0},500)
    }
    num=0;
    if(obj.scrollTop==514*num){
       floorbtns[0].style.background="#ff6600";
    }
}
    for (var i = 0; i < floorbtns.length; i++) {
        floorbtns[i].aa=floors[i].offsetTop;
        floorbtns[i].index=i;
        floorbtns[i].onclick=function(){
            var bb=document.documentElement.scrollTop!=0?document.documentElement:document.body;
            animate(bb,{scrollTop:this.aa},500);
            // floorbtns[this.index].style.background="#ff6600"
        }
        // floorbtns[i].onmouseout=function(){
        //     floorbtns[this.index].style.background="#ddd"
        // }
    };




})