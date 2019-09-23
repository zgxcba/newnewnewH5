'use strict'

var _mm = require('util/mm.js');

var _cart = {
	getCartCount:function(resolve,reject){
		_mm.request({
			url:_mm.getServerUrl('/cart/get_cart_project_count.do'),
			//没有指定POST，默认GET请求方式
			success:resolve,
			error:reject
		})
	}
	
}

module.exports = _cart;