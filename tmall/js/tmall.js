window.onload=function(){
	//var a=document.documentElement.scrollTop!=0?document.documentElement:document.body;
	document.documentElement.scrollTop=1;
//热门品牌
		var btns=getClass('word-11');
		var cons=getClass('hbcontent-center');
		for (var i = 0; i < btns.length; i++) {
			btns[i].index=i;
			btns[i].onclick=function(){
				for (var j = 0; j < cons.length; j++) {
					btns[j].style.color="#7d7d7d";
					btns[j].style.borderBottom="none";
                    cons[j].style.display="none";
				};
				btns[this.index].style.color="#000";
				btns[this.index].style.borderBottom="2px solid #000";
				cons[this.index].style.display="block";
			}
		}

//中间广告
	var btns1=getClass("word-7");
	var cons1=getClass("centerbanner-bottom")[0];
	var colors=["#e8e8e8","#fbb148","#9dd01b","#a5c301","#f2edea","#f2d26b","#5facf0","#efab2c","#525eb4","#f9f4fa","#e4d5be","#d7edfb","#f74368","#ebdfd3","#f3e1c9","#0272d8"];
	var img=getClass("abox-1")[0];
	var imgs=img.getElementsByTagName('a');
	for (var i = 0; i < btns1.length; i++) {
		btns1[i].index=i;
		btns1[i].onmouseover=function(){
			clearInterval(t)
			for (var j = 0; j < imgs.length; j++) {
				btns1[j].style.background="#181818";
				imgs[j].style.opacity="0";
				imgs[j].style.display="none"                
			};
			btns1[this.index].style.background="#4a4a4a";
			btns1[this.index].style.paddingLeft="20px";
			btns1[this.index].style.width="170px";
			cons1.style.background=colors[this.index];
			animate(imgs[this.index],{opacity:1},500)
			imgs[this.index].style.display="block"; 
			//imgs[this.index].style.opacity="1";
		}
		btns1[i].onmouseout=function(){
			for (var k = 0; k < btns1.length; k++) {
				btns1[k].style.background="#181818";
				btns1[k].style.paddingLeft="0px";
			    btns1[k].style.width="190px";
			};
			t=setInterval(move,2000);
			num=this.index+1;
		}
	};
	var num=1;
	var t=setInterval(move,2000)
	function move(){
		if(num>15){
			num=0;
		}
		for (var h = 0; h < imgs.length; h++) {
			imgs[h].style.opacity="0";
			btns1[h].style.background="#181818";
			imgs[h].style.display="none";
		};
		btns1[num].style.background="#4a4a4a";
		cons1.style.background=colors[num];
		animate(imgs[num],{opacity:1},500);
		imgs[num].style.display="block";
		num++;
	}



//桃心
	var btns2=getClass("hbcontent-box",cons[i]);
	var cons2=getClass("xin")
	for (var i = 0; i < btns2.length; i++) {
		btns2[i].index=i;
		btns2[i].onmouseover=function(){
             for (var i = 0; i < cons2.length; i++) {
             	cons2[i].style.display="none";
             };
             cons2[this.index].style.display="block";
		}
		btns2[i].onmouseout=function(){
             for (var i = 0; i < cons2.length; i++) {
             	cons2[i].style.display="none";
             };
		}
	};

//顶部下拉框
var topbtn1=$(".word-1")[5];
var topcon1=$(".wdtb-box")[0];
topbtn1.onmouseover=function(){
    topbtn1.style.background="#fff";
    topcon1.style.display="block"
}
topbtn1.onmouseout=function(){
    topbtn1.style.background="#f2f2f2";
    topcon1.style.display="none"
}

var topbtn2=$(".word-1")[10];
var topcon2=$(".scj-box")[0];
topbtn2.onmouseover=function(){
    topbtn2.style.background="#fff";
    topcon2.style.display="block"
}
topbtn2.onmouseout=function(){
    topbtn2.style.background="#f2f2f2";
    topcon2.style.display="none"
}

var topbtn3=$(".word-1")[14];
var topcon3=$(".sjzc-box")[0];
topbtn3.onmouseover=function(){
    topbtn3.style.background="#fff";
    topcon3.style.display="block"
}
topbtn3.onmouseout=function(){
    topbtn3.style.background="#f2f2f2";
    topcon3.style.display="none"
}

var topbtn4=$(".word-1")[15];
var topcon4=$(".wzdh-box")[0];
topbtn4.onmouseover=function(){
    topbtn4.style.background="#fff";
    topcon4.style.display="block"
}
topbtn4.onmouseout=function(){
    topbtn4.style.background="#f2f2f2";
    topcon4.style.display="none"
}


//右侧栏
var rightbtns=$(".sidebar");
var rightback=$(".sidebarbox1");
var rightcons=$(".rightcon");
for (var i = 0; i < rightbtns.length; i++) {
	rightbtns[i].index=i;
	rightbtns[i].onmouseover=function(){
		var aa=this;
		aa.flag=true;
		rightcons[this.index].style.display="block";
		rightback[this.index].style.background="red";
		animate(rightcons[this.index],{right:38,opacity:1},300,function(){
			if(!aa.flag){
				animate(this,{right:80,opacity:0.6},150,function(){
					this.style.display="none";
				})
			}
		})
	}
	rightbtns[i].onmouseout=function(){
		for (var k = 0; k < rightcons.length;k++) {
			rightback[k].style.background="#000"
		};
		var aa=this;
		if(rightcons[this.index].style.right=="38px"){
		animate(rightcons[this.index],{right:80,opacity:0.6},300,function(){
			this.style.display="none"
		})
	   }else{
	   	aa.flag=false;
	   }
	}
};



//楼层图片
var floorImgs=$(".floor-img");
for (var i = 0; i < floorImgs.length; i++) {
	floorImgs[i].index=i;
	floorImgs[i].onmouseover=function(){
		for (var j = 0; j < floorImgs.length; j++) {
			//floorImgs[j].style.marginLeft="0px";
			animate(floorImgs[j],{marginLeft:0},100);
		};
		//floorImgs[this.index].style.marginLeft="-10px";
		animate(floorImgs[this.index],{marginLeft:-10},200);
	}
	floorImgs[i].onmouseout=function(){
		for (var h = 0; h < floorImgs.length; h++) {
			//floorImgs[h].style.marginLeft="0px";
			animate(floorImgs[h],{marginLeft:0},100);
		};
	}
};




//楼层导航 搜索框 返回顶部
var floorbtn=$(".floorbar")[0];
var floorbtns=$(".floorbox");
var floors=$(".floor auto");
var find=$(".topnav-top1")[0];
var shang=$(".shang")[0];
window.onscroll=function(){
	var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
    if(obj.scrollTop>=1278){
        floorbtn.style.display="block";
        find.style.display="block";
    }
    if(obj.scrollTop<1278){
    	floorbtn.style.display="none";
    	find.style.display="none";
    }
    shang.onclick=function(){
    	//obj.scrollTop=0;
    	animate(obj,{scrollTop:0},500)
    }
}
for (var i = 0; i < floorbtns.length; i++) {
	floorbtns[i].aa=floors[i].offsetTop;
	floorbtns[i].onclick=function(){
	   var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
       animate(obj,{scrollTop:this.aa},500)
	}
};




//楼层brand轮播
function lunbo(obj,leftbtn,rightbtn){
var flag1=true,flag2=true;
var floort=setInterval(floormove,2000);
function floormove(){
	animate(obj,{left:-191},500,function(){
	     var floorfirst=getFirst(obj);
	     appendObj(obj,floorfirst);
	     obj.style.left="0px";
	     flag1=true;
       });
}
leftbtn.onmouseover=rightbtn.onmouseover=function(){
			clearInterval(floort);
		}
leftbtn.onclick=function(){
	if(flag1){
	   flag1=false;
	   floormove()
    }
}
rightbtn.onclick=function(){
	if(flag2){
	    flag2=false;
	    var floorfirst=getFirst(obj);
	    var floorlast=getLast(obj);
	    addBefore(floorlast,floorfirst);
	    obj.style.left="-181px";
	    animate(obj,{left:0},500,function(){
		flag2=true;
	    })
    }
}
leftbtn.onmouseout=rightbtn.onmouseout=function(){
	floort=setInterval(floormove,2000);
}
}
var imgFloorbox=$(".img-floorbox");
var leftbtn=$(".leftbtn");
var rightbtn=$(".rightbtn");
lunbo(imgFloorbox[0],leftbtn[0],rightbtn[0]);
lunbo(imgFloorbox[1],leftbtn[1],rightbtn[1]);
lunbo(imgFloorbox[2],leftbtn[2],rightbtn[2]);
lunbo(imgFloorbox[3],leftbtn[3],rightbtn[3]);
lunbo(imgFloorbox[4],leftbtn[4],rightbtn[4]);
lunbo(imgFloorbox[5],leftbtn[5],rightbtn[5]);
lunbo(imgFloorbox[6],leftbtn[6],rightbtn[6]);
lunbo(imgFloorbox[7],leftbtn[7],rightbtn[7]);
lunbo(imgFloorbox[8],leftbtn[8],rightbtn[8]);
lunbo(imgFloorbox[9],leftbtn[9],rightbtn[9]);
lunbo(imgFloorbox[10],leftbtn[10],rightbtn[10]);
lunbo(imgFloorbox[11],leftbtn[11],rightbtn[11]);
lunbo(imgFloorbox[12],leftbtn[12],rightbtn[12]);








}







	

