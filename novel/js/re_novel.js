	$(function(){
        	$("#t3").click(function(){
        		
        		$("#t3").attr("class","hot_1");
        		$("#t1").attr("class","hot_2");
        		$("#t2").attr("class","hot_3");
        		$("#ts3").attr("class","selected");
        		$("#ts1").attr("class","selecte");
        		$("#ts2").attr("class","selecte");
        		
        		
        		
        	});

        	$("#t2").click(function(){
        		
        		$("#t2").attr("class","hot_1");
        		$("#t3").attr("class","hot_2");
        		$("#t1").attr("class","hot_3");
        		$("#ts2").attr("class","selected");
        		$("#ts3").attr("class","selecte");
        		$("#ts1").attr("class","selecte");
        		
        		
        	});	

        	$("#t1").click(function(){
        		
        		$("#t1").attr("class","hot_1");
        		$("#t2").attr("class","hot_2");	
        		$("#t3").attr("class","hot_3");
        		$("#ts1").attr("class","selected");
        		$("#ts2").attr("class","selecte");
        		$("#ts3").attr("class","selecte");
        		
        		
        	});

        	function t3next(){
        		$("#t3").click();
        	  var t= setInterval(function(){
        			t2next();
        			clearInterval(t);
        		},3000);
        		
        	}
        	function t2next(){
        		$("#t2").click();
        	   var t=setInterval(function(){
        			t1next();
        			clearInterval(t);
        		},3000);
        		 
        	}
        	function t1next(){
        		$("#t1").click();
        	 var t=setInterval(function(){
        		clearInterval(t);
				t3next();
			},3000);
        	    
        	}
 
            //加个定时器，正常轮播
            
		  var t1=setInterval(function(){
				t3next();
				clearInterval(t1);
			},3000);
        	
        	});
