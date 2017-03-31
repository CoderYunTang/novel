   
			$(function(){
			
			//用户名
				$("#user_id").blur(function(){
				var user_id=$("#user_id").val();
					if(user_id=="")
					{
						$("#msg_id").html("请输入用户名！");
					   
					}
					else
					{
					    $("#msg_id").html("");
					    $.ajax({
					             url:"ByIduser",
                                 type:"post",
                                 data:"user.users_id="+user_id,
                                 success:function(result)
                                 {
                                     if(result=="NO")
                                     {
                                        $("#msg_id").html("用户名已存在！");
                                       
                                     }
                                    
                                    
                                 }
					    });
					}
				});
				
				
				//用户密码
				$("#user_pwd").blur(function(){
				var user_pwd=$("#user_pwd").val();
				      if(user_pwd=="")
				      {
				         $("#msg_pwd").html("请输入密码！");
				      }
				      else
				      {
				         $("#msg_pwd").html("");
				      }
				});
			
                //重复密码
				$("#user_repwd").blur(function(){
				      var user_pwd=$("#user_pwd").val();
				      var user_repwd=$("#user_repwd").val();
				      if(user_pwd!=user_repwd)
				      {
				         $("#msg_repwd").html("两次输入密码不一致，请重新输入！");
				      }
				      else
				      {
				         $("#msg_repwd").html("");
				      }
				});
				
                                       
			});
			//按钮事件
			function subt()
			{
			var user_id=$("#user_id").val();
			    var user_pwd=$("#user_pwd").val();
		        var user_repwd=$("#user_repwd").val();
				 //用户名
				if(user_id=="")
					{
						$("#msg_id").html("请输入用户名！");
					    $("#user_id").focus();
					    
					}
					else
					{
					    $("#msg_id").html("");
					    $.ajax({
					             url:"ByIduser",
                                 type:"post",
                                 data:"user.users_id="+user_id,
                                 success:function(result)
                                 {
                                     if(result=="NO")
                                     {
                                        $("#msg_id").html("用户名已存在！");
                                        $("#user_id").focus();
                                        
                                     }
                                    
                                    
                                 }
					    });
					}
				//用户密码
				 if(user_pwd=="")
				      {
				         $("#msg_pwd").html("请输入密码！");
				         
				      }
				      else
				      {
				         $("#msg_pwd").html("");
				      }
				//重复密码
				  if(user_pwd!=user_repwd)
				      {
				         $("#msg_repwd").html("两次输入密码不一致，请重新输入！");
				        
				      }
				      else
				      {
				         $("#msg_repwd").html("");
				      }
					
				//单选框
					if(!($(".ck").is(":checked")))
					{
						$("#msg_ck").html("注册本账号须阅读并同意服务协议！");
						return false;
					}
					else
					{
					   //用户名
				if(user_id=="")
					{
						$("#msg_id").html("请输入用户名！");
					    $("#user_id").focus();
					    return false;
					}
					else
					{
					    $("#msg_id").html("");
					    $.ajax({
					             url:"ByIduser",
                                 type:"post",
                                 data:"user.users_id="+user_id,
                                 success:function(result)
                                 {
                                     if(result=="NO")
                                     {
                                        $("#msg_id").html("用户名已存在！");
                                        $("#user_id").focus();
                                        return false;
                                     }
                                    
                                    
                                 }
					    });
					}
				//用户密码
				 if(user_pwd=="")
				      {
				         $("#msg_pwd").html("请输入密码！");
				         return false;
				      }
				      else
				      {
				         $("#msg_pwd").html("");
				      }
				//重复密码
				  if(user_pwd!=user_repwd)
				      {
				         $("#msg_repwd").html("两次输入密码不一致，请重新输入！");
				        return false;
				      }
				      else
				      {
				         $("#msg_repwd").html("");
				      }
					}
			}
			