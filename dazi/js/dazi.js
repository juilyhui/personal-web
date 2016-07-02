function game(){
	this.letterArr=["<img src=images/A.png>","<img src='images/B.png'>","<img src='images/C.png'>","<img src='images/D.png'>","<img src='images/E.png'>","<img src='images/F.png'>","<img src='images/H.png'>","<img src='images/I.png'>","<img src='images/J.png'>","<img src='images/K.png'>","<img src='images/L.png'>","<img src='images/M.png'>","<img src='images/N.png'>","<img src='images/O.png'>","<img src='images/P.png'>","<img src='images/Q.png'>","<img src='images/R.png'>","<img src='images/S.png'>","<img src='images/T.png'>","<img src='images/U.png'>","<img src='images/V.png'>","<img src='images/W.png'>","<img src='images/X.png'>","<img src='images/Y.png'>","<img src='images/Z.png'>"];
	this.letterLength=5; //同时下落的个数
	this.speed=3; //下落速度
  window.that=this; //将本对象存放在window的一个属性中
  this.current=0; //每进入下一关后的当前关的得分
  this.diff=5;//难度：每一关需要点中的字母数/得分数
  this.score=0;
  this.die=10;
  this.step=1;
  this.scoreEle=document.getElementsByClassName('son')[0].getElementsByTagName('span')[1];
  this.lifeEle=document.getElementsByClassName('son')[1].getElementsByTagName('span')[1];
  this.stepEle=document.getElementsByClassName('son')[2].getElementsByTagName('span')[1];
	this.span=[];//存放span
	this.randarr=[];//用来保存屏幕上的字母
	this.width=document.documentElement.clientWidth;
	this.height=document.documentElement.clientHeight;
  this.play();
}
game.prototype={
	play:function(){
		this.createEle(this.letterLength);
		this.move();
		this.key();
	},
	key:function(){
		var that=this;
		document.body.onkeydown=function(e){
           var ev=e||window.event;
           var le=String.fromCharCode(ev.keyCode)
           //alert(le)
           for (var i = 0; i < that.span.length; i++) {
               var str=that.span[i].innerHTML
               for (var j = 0; j < str.length; j++) {
                 if(str.substr(j+1,4)==".png"){
                 var str2=str.charAt(j)
                 }
               };
               
           	   if(le==str2){
                  document.body.removeChild(that.span[i])
                  /*that.span[i].style.display="none"; //让这个span隐藏*/
                  that.span.splice(i,1);
                  that.randarr.splice(i,1);
                  that.createEle(1);
                  that.scoreEle.innerHTML=++that.score;
                  //alert(that.scoreEle.innerHTML)
                  that.current.innerHTML=++that.current;
                  if(that.current%that.diff==0){
                        alert("恭喜您已过关！")
                         that.again();
                  }
                  break;
           	   }

           };
		}
	},
  again:function(){
     this.stepEle.innerHTML=++this.step;
     clearInterval(this.t);
     for (var i = 0; i < this.span.length; i++) {
       this.span[i].style.display="none";
     };
     //this.span.splice(0,this.span.length)
     this.span=[];
     this.randarr=[];
     this.letterLength++;
     this.speed++;
     this.die+=2;
     this.lifeEle.innerHTML=this.die;
     this.current=0;//每到下一关，当前关的计数又要从0开始
     this.diff+=5; //每过一关难度加5
     this.createEle(this.letterLength);
     this.move();
  },
	createEle:function(num){
		var arr=this.rand(num);
		//alert(arr)
		for (var i = 0; i < num; i++) {
           var span=document.createElement("span");
           span.style.cssText="position:absolute;left:"+Math.round((Math.random()*(this.width-150)+50))+"px;top:"+Math.round((Math.random()*200-100))+"px;font-size:30px;color:#fff;"
           span.innerHTML=arr[i];
           document.body.appendChild(span);
           this.span.push(span);
		};
       
	},
	move:function(){
         var that=this;
         that.t=setInterval(that.move2,60)
	},
  move2:function(){
          for (var i = 0; i < that.span.length; i++) {
              var tops=that.span[i].offsetTop+that.speed;
              that.span[i].style.top=tops+"px";
            if(tops>that.height){
              //that.span[i].style.display="none";不隐藏也可以，因为整个body设置overflow:hidden
               document.body.removeChild(that.span[i])
                  /*that.span[i].style.display="none"; //让这个span隐藏*/
                that.span.splice(i,1);
                that.randarr.splice(i,1);
                that.createEle(1);
                that.lifeEle.innerHTML=--that.die;
                //alert()
                if(that.die==0){
                  //游戏结束
                    alert("THE END")
                    //document.getElementsByClassName("end")[0].style.display="block";
                    //setInterval(function(){
                        location.reload();
                    //},3000)
                }
                break;
            }
           }
  },
	rand:function(num){
       var arr=[];
       for (var i = 0; i < num; i++) {
       	 var val=this.letterArr[Math.floor(Math.random()*this.letterArr.length)];
      
       	 while(this.check(this.randarr,val)){
       	 	val=this.letterArr[Math.floor(Math.random()*this.letterArr.length)];
       	 }
       	 arr.push(val);
         this.randarr.push(val);
       };

       return arr//alert(arr)

	},
	check:function(arrobj,zhi){
    if(!arrobj instanceof Array){
       console.error("check 中传入的参数应该是数组！");
       return false;
    }else{
       for (var i = 0; i < arrobj.length; i++) {
    	  if(arrobj[i]==zhi){
    		   return true;
    	   }
       };
       return false;
	  }
  }
}
















