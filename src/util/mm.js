'use strict'

var _mm = {
	
	request : function(param){
		//保存this，防止this指向不明
	var _this = this;
		$.ajax({
			type           : param.method  || 'get',
			url            : param.url     || '',
			dataType       : param.type    || 'json',
			data           : param.data    ||  '',
			success        : function(res){
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data,res.msg);
				}else if(10 === res.status){
					//没有登陆状态
					_this.doLogin();
				}else if(1 === res.status){
					//报错
					typeof param.error === 'function' && param.error(res.msg);
				}
				
			},
			error          : function(err){
				typeof param.error === 'function' && param.error(res.statusText);
			}          
		});
	},
	doLogin: function(){
		window.location.href = './user-login.html?redirect='+window.location.href;
		encodeURIComponent(window.location.href);
	}
};
module.exports = _mm;



