        var $index=0;
	    var $exdex=0;
		$(function(){
			/*定义两个变量，保存当前页码和上一页码*/
			
			
			/*小点的鼠标移入事件，触发图片左移还是右移*/
			$(".choose span").mouseover(function(){
				/*获取当前移入的index值*/
				$index=$(this).index();
				//首先让点的颜色变化，表示选中
				$(".choose span").eq($index).addClass("red").siblings().removeClass("red");
				//判断如果index变小，证明图片要往左移动。变大则往右移动
				if($index>$exdex)
				{
					next();
				}
				else if($index<$exdex){
					pre();
				}
				
				//移动完毕将当前index值替换为当前页
				return $exdex=$index;
				
			});
			//下一页点击事件。在右移基础上加了最大index判断
			$(".next").click(function(){
				$index++;
				if($index>2)
				{
					$index=0;
				}
				$(".choose span").eq($index).addClass("red").siblings().removeClass("red");
				next();
				return $exdex=$index;
			});
			//上一页
			$(".pre").click(function(){
				$index--;
				if($index<0)
				{
					$index=2;
				}
				$(".choose span").eq($index).addClass("red").siblings().removeClass("red");
				pre();
				return $exdex=$index;
			});
			//加个定时器，正常轮播
			setInterval(function(){
				$(".next").click();
			},3000);
			/*var atime=setInterval(function(){
				$(".next").click();
			},1000);*/
			
		});
		//左移和右移的事件函数，右移基本原理就是先让exdex定位的left左移百分百，而选中的当前也从屏幕右边移入，left变为0
			function next(){
				$(".content .content_1 .buttom_box .right a").eq($index).stop(true,true).css("left","0").animate("left","0");
				$(".content .content_1 .buttom_box .right a").eq($exdex).stop(true,true).css("left","100%").animate("left","100%");
			}
			function pre(){
				$(".content .content_1 .buttom_box .right a").eq($index).stop(true,true).css("left","0").animate("left","0");
				$(".content .content_1 .buttom_box .right a").eq($exdex).stop(true,true).css("left","100%").animate("left","100%");
			}