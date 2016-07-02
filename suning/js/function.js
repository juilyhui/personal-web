//兼容性的获取类名对象
function getClass(selector,obj){
    if(typeof selector!="string"){
        return false;
    }
    obj=obj||document;
    if(obj.getElementsByClassName){
    return obj.getElementsByClassName(selector)
    }else{
        var arr=[];
        var alls=obj.getElementsByTagName("*")
        for (var i = 0; i < alls.length; i++) {
            if(/*判断类名里面有没有selector*/check(alls[i],selector)){
                arr.push(alls[i])
            }
        };
        return arr;
    }
}
function check(longstr,selector){
    var arr=longstr.split("")
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==selector){
            return false;
        }
    };
    return true;
}


//兼容性的获取对象的值
//传一个参数表示获取，传两个参数表示赋值
function getText(obj,val){
   if(val==undefined){
      if(obj.textContent){
   	    return obj.textContent;
      }else{
   	    return obj.innerText;
      }
   }else{
   	  if(obj.textContent){
   	    obj.textContent=val;
      }else{
   	    obj.innerText=val;
      }
   }
}



//兼容性的获取对象样式属性的函数
//实参的形式 getStyle(one,"width")
function getStyle(obj,attr){
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];
  }
}

//获取 识别标签名、类名、id的函数
function $(selector,obj){
  obj=obj||document;
  if(typeof selector=="string"){
    selector=selector.replace(/^\s*|\s*$/g,"")//正则
    if(selector.charAt(0)=="."){
      return getClass(selector.slice(1),obj);
    }else if(selector.charAt(0)=="#"){
      return obj.getElementById(selector.slice(1));
    }else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
      return obj.getElementsByTagName(selector);
    }
  }else if(typeof selector=="function"){
      window.onload=function(){
        selector();
      }
  }
}

//获得 元素子节点 和 非空文档子元素 集合 的函数
//obj 父元素
//type  true或false或者为空 默认值是false
    //  true  获取元素节点和非空文本
    //  false  只获取元素节点
function getChilds(obj,type){
   type=type==undefined?false:type;
   var aa=obj.childNodes;
   var arr=[];
   for (var i = 0; i < aa.length; i++) {
    if(type==false){
     if(aa[i].nodeType==1){
      arr.push(aa[i])
     }
    }else{
      if(aa[i].nodeType==1||(aa[i].nodeType==3&&trim(aa[i].nodeType!=""))){
        arr.push(aa[i])
      }
    }
   };
   return arr;
}

//去掉某个字符串两边空格的函数
function trim(){
  return str.replace(/^\s*|\s*$/g,"")
}

//获得第一个子元素，并且一定是个元素节点
function getFirst(obj,type){
   return getChilds(obj,type)[0];
}

//获得最后一个子元素，并且一定是个元素节点
function getLast(obj,type){
   var len=getChilds(obj,type).length;
   return getChilds(obj,type)[len-1];
}

//获得 下一个兄弟元素
function getNext(obj){
   var next=obj.nextSibling;
   if(next==null){
    return null;
   }
   while(next.nodeType!=1){
     if(next==null){
       return null;
       }
       next=next.nextSibling;
   }
   return next;
}



//获得 上一个兄弟元素
function getPreviuos(obj){
   var pre=obj.previousSibling;
   if(pre==null){
    return null;
   }
   while(pre.nodeType!=1){
     if(pre==null){
       return null;
       }
       pre=previous.previousSibling;
   }
   return pre;
}

//获取某个元素的父元素
function getParent(obj){
  return obj.parentNode;
}

//将a插入b前面 
function addBefore(a,b){
   var parent=b.parentNode;
   parent.insertBefore(a,b)
}


//将a插入b后面
function addAfter(a,b){
  var next=getNext(b);
  var parent=b.parentNode;
  parent.insertBefore(a,next);
}

//删除某元素节点
function removeObj(obj){ 
   var parent=obj.parentNode;
   parent.removeChild(obj);
}

//用newobj替换oldobj
function replaceObj(newobj,oldobj){
  var parent=oldobj.parentNode;
  parent.replaceChild(newobj,oldobj)
}

//返回克隆某个对象的结果
   //参数bull   true  克隆全部,包括内部元素
   //           false  仅克隆元素节点
function cloneObj(obj,bull){
  bull=false||bull;
  return obj.cloneNode(bull);
}

//将obj追加到parent中
function appendObj(parent,obj){
   parent.appendChild(obj)
}


//获得元素到浏览器的左边距
function getLeft(obj){
  var newobj=obj.parentNode;
  var left=obj.offsetLeft;
  //只要newobj（obj的父元素）不是body，就继续执行
  while(newobj.nodeName!="BODY"){
      if(getStyle(newobj,"position")!="static"){
        left=left+newobj.offsetLeft+parseInt(getStyle(newobj,"borderLeftWidth"));
      }
      newobj=newobj.parentNode;
  }
  return left;
}


//获得元素到浏览器的上边距
function getTop(obj){
  var newobj=obj.parentNode;
  var top=obj.offsetTop;
  //只要newobj（obj的父元素）不是body，就继续执行
  while(newobj.nodeName!="BODY"){
      if(getStyle(newobj,"position")!="static"){
        top=top+newobj.offsetTop+parseInt(getStyle(newobj,"borderTopWidth"));
      }
      newobj=newobj.parentNode;
  }
  return top;
}


//在IE6中模拟固定定位
function setFixed(obj,left,top){
   obj.style.position="absolute";
   setInterval(function(){
     var o=document.documentElement;
     var newleft=o.scrollLeft+left;
     var newtop=o.scrollTop+top;
     obj.style.left=newleft+"px";
     obj.style.top=newtop+"px";
   },60)
}


//兼容性的对一个对象进行添加事件
    //event 的实参形式是 "click"
function addEvent(obj,event,fun){
  if(obj.addEventListener){
     obj.addEventListener(event,fun,false);
  }else{
    obj.attachEvent("on"+event,fun);
  }
}


//兼容性的对一个对象进行删除事件
function removeEvent(obj,event,fun){
  if(obj.removeEventListener){
     obj.removeEventListener(event,fun,false);
  }else{
    obj.detachEvent("on"+event,fun);
  }
}


//获取浏览器宽高
    //获取方式：var width=offsetWindow().width;
function offsetWindow(){
   var obj={};
   obj.height=document.documentElement.clientHeight;
   obj.width=document.documentElement.clientWidth;
   return obj;

}


//拖拽函数
function drag(obj){
   this.obj=obj;
   this.ox=0;
   this.oy=0;
   this.cx=0
   this.cy=0;;
   this.left=0;
   this.top=0;
   this.down();
}
drag.prototype={
  down:function(){
    var that=this;
    this.obj.onmousedown=function(e){
    var ev=e||that.getEvent(e);
    that.ox=ev.offsetX;
    that.oy=ev.offsetY;
    that.move;
    }
  },
  getEvent:function(a){
    return a||window.event;
  },
  move:function(){
    var that=this;
    document.onmousemove=function(e){
      var ev=that.getEvent(e);
      that.cx=ev.clientX;
      that.cy=ev.clientY;
      that.left=that.cx-that.ox;
      that.top=that.cy-that.oy;
      that.obj.style.left=that.left+"px";
      that.obj.style.top=that.top+"px";
    }
  }
}



//滚轮事件函数
//fun1为向上滚动事件；fun2为向下滚动事件
function mousewheel(obj,fun1,fun2){
    if(obj.attachEvent){
             obj.attachEvent("onmousewheel",scrollFn);
        }else if(obj.addEventListener){
             obj.addEventListener("mousewheel",scrollFn,false);
             obj.addEventListener("DOMMouseScroll",scrollFn,false);
        }
        function scrollFn(e){
            var ev=e||window.event;
            console.log(ev.wheelDelta); 
            if(ev.detail==-3||ev.wheelDelta==120){
              fun1.call(obj);  //向上滚动时调用fun1
            }else if(ev.detail==3||ev.wheelDelta==-120){
              fun2.call(obj);  //向下滚动时调用fun2
            }
        }
    }



  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }



 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件,相当于onmouseover和onmouseout
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,getEvent(e));
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,getEvent(e));
        }
      }
    }
} 
function getEvent(e){
  return e||window.event;
} 