$(function(){
	           
        		$("#stype a").click(function(){
        			$(this).parent().each(function(){//移除其余非点中状态
        				$("#stype a").removeClass("sd");
        			});
        			$(this).addClass("sd");//给所点中的增加样式
        			//alert($(this).text());//输出所点的a的内容
        			$("#sdtype").text($(this).text());
        			$("#h3").text($(this).text()+"小说");
        		});
        		$("#snum a").click(function(){
        			$(this).parent().each(function(){//移除其余非点中状态
        				$("#snum a").removeClass("sd");
        			});
        			$(this).addClass("sd");//给所点中的增加样式
        			//alert($(this).text());//输出所点的a的内容
        			$("#sdnum").text($(this).text());
        			$("#sdnum").removeClass("dp");
        			$("#sdnum").addClass("sd");
        		});
        		$("#sdnum").click(function(){
        			$("#snum a").removeClass("sd");
        			$("#sdnum").removeClass("sd");
        			$("#sdnum").addClass("dp");
        		});
        		$("#stime a").click(function(){
        			$(this).parent().each(function(){//移除其余非点中状态
        				$("#stime a").removeClass("sd");
        			});
        			$(this).addClass("sd");//给所点中的增加样式
        			//alert($(this).text());//输出所点的a的内容
        			$("#sdtime").text($(this).text());
        			$("#sdtime").removeClass("dp");
        			$("#sdtime").addClass("sd");
        		});
        		$("#sdtime").click(function(){
        			$("#stime a").removeClass("sd");
        			$("#sdtime").removeClass("sd");
        			$("#sdtime").addClass("dp");
        		});
              
        		
        	});
        	