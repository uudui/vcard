 //PC端跳转
        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod","MicroMessenger");
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
	// 图片延迟替换函数
	function lazy_img(){			
			var lazy = $('.lazy-bk');
			lazy.each(function(){
				var self = $(this),
					srcImg = self.attr('data-bk');

				$('<img />')
					.on('load',function(){
						if(self.is('img')){
							self.attr('src',srcImg)
						}else{
							self.css({
								'background-image'	: 'url('+srcImg+')',
								'background-size'	: 'cover'
							})
						}
					})
					.attr("src",srcImg);

				self.removeClass('lazy-bk');
			})	
	}
	
	var qrcode=function(txt){
		$('#qrcode').empty();
		//$('#qrcode').qrcode({width: 200,height: 200,text: txt});
		txts="http://www.33cm.cn/qrcode?size=7&text="+txt;
		$('#qrcode').html('<img src="../images/load.gif" style="max-width:100%" />');
		$('<img />').on('load',function(){
						$('#qrcode').find('img').attr('src',txts)
					})
					.attr("src",txts);
		}	

	$(function(){
		$('.qrtab li').on('click',function(){
			var _this=$(this);
			var info=_this.attr('data-info');
			var index=_this.index();
			_this.addClass('cur').siblings('li').removeClass('cur');
			$('.qrimg li').eq(index).show().siblings('li').hide();
			qrcode(utf16to8(info)); 
			
		})
		$('.closeqr').on('click',function(){
			$('.showqrcode').hide();
			})
		$('.qrcode_icon,.barqrcode').on('click',function(){
			var liinfo=$('.qrtab li').eq(0).attr('data-info');
			qrcode(liinfo);
			$('.showqrcode').show();
		})
	})	

	function utf16to8(str) {  
    var out, i, len, c;  
    out = "";  
    len = str.length;  
    for(i = 0; i < len; i++) {  
    c = str.charCodeAt(i);  
    if ((c >= 0x0001) && (c <= 0x007F)) {  
        out += str.charAt(i);  
    } else if (c > 0x07FF) {  
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    } else {  
        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    }  
    }  
    return out;  
}  

	