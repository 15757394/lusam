// JavaScript Document
jQuery(document).ready(function(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('nav-up-selected');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
});

$(document).ready(function() {
	$(".slideInner").slide({
		slideContainer: $('.slideInner a'),
		effect: 'easeOutCirc',
		autoRunTime: 5000,
		slideSpeed: 1000,
		nav: true,
		autoRun: true,
		prevBtn: $('a.prev'),
		nextBtn: $('a.next')
	});
});


function WeChat(name,cursel,n){
 for(i=1;i<=n;i++){
  var menuw=document.getElementById(name+i);
  var WeChat=document.getElementById("WeChat_"+name+"_"+i);
  menuw.className=i==cursel?"cur":"";
  WeChat.style.display=i==cursel?"block":"none";
  
 }
}


   function setTab(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("con_"+name+"_"+i); 
menu.className=i==cursel?"hover":""; 
con.style.display=i==cursel?"block":"none"; 
} 
}


   function setTab2(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menuq=document.getElementById(name+i); 
var conq=document.getElementById("conq_"+name+"_"+i); 
menuq.className=i==cursel?"hover":""; 
conq.style.display=i==cursel?"block":"none"; 
} 
}

   function setTab3(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menuw=document.getElementById(name+i); 
var conw=document.getElementById("conw_"+name+"_"+i); 
menuw.className=i==cursel?"hover":""; 
conw.style.display=i==cursel?"block":"none"; 
} 
}












