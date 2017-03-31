	$(function(){

        	$("#rt3").click(function(){
        		
        		
        		$("#rt3").attr("class","hot_1");
        		$("#rt1").attr("class","hot_2");
        		$("#rt2").attr("class","hot_3");
        		$("#rts3").attr("class","selected");
        		$("#rts1").attr("class","selecte");
        		$("#rts2").attr("class","selecte");
        		
        		
        	});

        		$("#rt2").click(function(){
        		
        		
        		$("#rt2").attr("class","hot_1");
        		$("#rt3").attr("class","hot_2");
        		$("#rt1").attr("class","hot_3");
        		$("#rts2").attr("class","selected");
        		$("#rts3").attr("class","selecte");
        		$("#rts1").attr("class","selecte");
        		
        	});	

        	$("#rt1").click(function(){
        		
        		
        		$("#rt1").attr("class","hot_1");
        		$("#rt2").attr("class","hot_2");	
        		$("#rt3").attr("class","hot_3");
        		$("#rts1").attr("class","selected");
        		$("#rts2").attr("class","selecte");
        		$("#rts3").attr("class","selecte");
        		
        	});

        	function rt3next(){
        		$("#rt3").click();
        	  var t= setInterval(function(){
        			rt2next();
        			clearInterval(t);
        		},3000);
        		
        	}
        	function rt2next(){
        		$("#rt2").click();
        	   var t=setInterval(function(){
        			rt1next();
        			clearInterval(t);
        		},3000);
        		 
        	}
        	function rt1next(){
        		$("#rt1").click();
        	 var t=setInterval(function(){
        		clearInterval(t);
				rt3next();
			},3000);
        	    
        	}
            //加个定时器，正常轮播
        	var t2=setInterval(function(){
				rt3next();
				clearInterval(t2);
			},3000);
        	
        	});