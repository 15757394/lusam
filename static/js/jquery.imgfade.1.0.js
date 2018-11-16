// JavaScript Document
/** 
//		write by zrthink.com
//		time:2013-04-28 pm
 **/
/*
demo:
	<div id="bannerImg">
		<div data-type="img">
			<div data-type="img-box"><img src="" /></div>
		</div>
		<div data-type="text">
			<div data-type="text-box"><img /></div>
		</div>
		<div data-type="sign">
			<ul>
				<li data-type="sign-box" data-index="0"><a href="javascript:void(0);">&nbsp;</a></li>
			</ul>
		</div>
	</div>
*/

/*
js:
	$('#bannerImg').imgFade({});
*/
 
;(function($){
	$.fn.imgFade = function(options){
		var defaults = {
			autoRunTime : 5000,//自动切换时间间隔
			fadeTime : 200,//淡入淡出过渡时间
			hoverTime : 300//鼠标停留时间触发事件
		};
		var opts = $.extend({},defaults,options);
		return this.each(function(){
			var self = $(this),
				img_wrap = self.find('[data-type="img"]'),
				img_boxs = img_wrap.find('[data-type="img-box"]'),
				len = img_boxs.length,
				text_wrap = self.find('[data-type="text"]'),
				text_boxs = text_wrap.find('[data-type="text-box"]'),
				sign_wrap = self.find('[data-type="sign"]'),
				sign_boxs = sign_wrap.find('[data-type="sign-box"]'),
				timeOutId = null,
				timeOutId2 = null,
				index = -1,
				flag = true,
				_fnAutoImgChange = function(){
					index++;
					if(index >= len){
						index = 0;
					}
					_fnImgChange();
					timeOutId2 = setTimeout(_fnAutoImgChange,opts.autoRunTime);
				},
				/*
				_fnImgChange = function(){
					sign_boxs.eq(index).addClass("current").siblings().removeClass("current");
					img_boxs.not(img_boxs.eq(index)).fadeOut(opts.fadeTime);
					img_boxs.eq(index).fadeIn(opts.fadeTime,function(){
						text_boxs.not(text_boxs.eq(index)).animate({left : '0'},opts.fadeTime / 4).hide();
						text_boxs.eq(index).fadeIn(opts.fadeTime / 8).animate({left : '-15px'},opts.fadeTime);	
					});
					if($('#banner_wrap')){
						$('#banner_wrap').removeClass().addClass('index_bg0' + (index + 1));
					}
				},
				*/
				_fnImgChange = function(){
					if(flag == true){//动画执行完毕
						flag = false;
						sign_boxs.eq(index).addClass("current").siblings().removeClass("current");
						/*
						img_boxs.stop().not(img_boxs.eq(index)).show().animate({ marginLeft : '50px', opacity : '0'},opts.fadeTime,function(){
							img_boxs.eq(index).show().animate({marginLeft : '0', opacity : '1'},opts.fadeTime,function(){
								text_boxs.stop().not(text_boxs.eq(index)).show().animate({left : '0', opacity : '0'},opts.fadeTime / 2,function(){
									text_boxs.eq(index).show().animate({left : '-15px', opacity : '1'},opts.fadeTime);
									flag = true;
								});
							});		
						});
						*/
						text_boxs.stop().not(text_boxs.eq(index)).show().animate({left : '0', opacity : '0'},opts.fadeTime / 2,function(){
							text_boxs.eq(index).show().animate({left : '-8px', opacity : '1'},opts.fadeTime);
						});
						img_boxs.stop().not(img_boxs.eq(index)).show().animate({ marginLeft : '20px', opacity : '0'},opts.fadeTime,function(){
							img_boxs.eq(index).show().animate({marginLeft : '0', opacity : '1'},opts.fadeTime);		
							flag = true;
						});
					}
					else{//动画未执行完毕
						sign_boxs.eq(index).addClass("current").siblings().removeClass("current");
						img_boxs.stop().hide().not(img_boxs.eq(index)).css({ marginLeft : '20px', opacity : '0'});
						img_boxs.eq(index).show().css({marginLeft : '0', opacity : '1'});
						text_boxs.stop().hide().not(text_boxs.eq(index)).css({left : '0', opacity : '0'});
						text_boxs.eq(index).show().css({left : '-8px', opacity : '1'});
						flag = true;		
					}
					if($('#banner_wrap')){
						$('#banner_wrap').removeClass().addClass('index_bg0' + (index + 1));
					}
				},
				_fnMouseClick = function(e){
					//clearTimeout(timeOutId2);
					index = parseInt($(this).attr('data-index'));
					_fnImgChange();
					//timeOutId = setTimeout(_fnImgChange,opts.hoverTime);	
				},
				_fnMouseOver = function(e){
					clearTimeout(timeOutId2);
					//timeOutId = setTimeout(_fnImgChange,opts.hoverTime);	
				},
				_fnMouseOut = function(e){
					//clearTimeout(timeOutId);
					index = parseInt($(this).attr('data-index'));
					timeOutId2 = setTimeout(_fnAutoImgChange,opts.autoRunTime);	
				},
				init = (function(){
					sign_boxs.bind('click',_fnMouseClick);
					sign_boxs.bind('mouseover',_fnMouseOver);
					sign_boxs.bind('mouseout',_fnMouseOut);
					_fnAutoImgChange(index);
				}());
		});
	};
})(jQuery);