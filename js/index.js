function addLoadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload!="function"){
    window.onload=func;
  }else{window.onload=function(){
    oldonload();
	func();
  }
 }
}
var focusImg=document.getElementById("focusImg");
var imgList=focusImg.getElementsByTagName("li");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
//幻灯片轮播
function showFocusImg(){
  var arr=[];
  for(var i=0;i<imgList.length;i++){
    arr.push(getStyle(imgList[i],"left"));
    }
//幻灯片自动轮播
  setInterval(function(){
	arr.unshift(arr[arr.length-1]);
    arr.pop();
    for(var n=0;n<imgList.length;n++){
	  imgList[n].style.left=arr[n];
	  }    
	},3000);
//幻灯片点击按钮切换 
  prev.onclick=function(){
    arr.push(arr[0]);
	arr.shift();
	for(var n=0;n<imgList.length;n++){
	  imgList[n].style.left=arr[n];
	  }
    }
  next.onclick=function(){
	arr.unshift(arr[arr.length-1]);
    arr.pop();
    for(var n=0;n<imgList.length;n++){
	  imgList[n].style.left=arr[n];
	  }  
	}
  }
  
function showButton(){
  var imgGallery=document.getElementById("imgGallery");
  imgGallery.onmouseenter=function(){
    prev.style.display="block";
    next.style.display="block";
    }
  imgGallery.onmouseleave=function(){
    prev.style.display="none";
    next.style.display="none";
    }
  }
//获取图片的left  
function getStyle(obj,attr){
  if(obj.currentStyle){
	  return obj.currentStyle[attr];
	}else{return getComputedStyle(obj,false)[attr];}
}

addLoadEvent(showFocusImg);
addLoadEvent(showButton);

//飘雪效果jQuery实现
$(function(){
	var $flakecantiner=$("div.flakecantiner");
	var cantinerWidth=$flakecantiner.width();
	var cantinerHeight=$flakecantiner.height();
	var flake=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("&#10052;");
	var mixSize=30;
	var timer=300;
	setInterval(function(){
	    var startPosL=Math.random()*cantinerWidth;
	    var Fopacity=0.7+Math.random()*0.3;
		var Fsize=10+mixSize*Math.random();
		var finalL=Math.random()*cantinerWidth;
		var finalT=cantinerHeight+50+"px";
	    var speed=3000+Math.random()*4000;
		flake.clone().appendTo($flakecantiner).css({"left":startPosL,"opacity":Fopacity,"color":"#FFF","font-size":Fsize})
		     .animate({"left":finalL,"top":finalT,"opacity":0.5},speed,function(){
		  $(this).remove();});
		  },timer);
	})

