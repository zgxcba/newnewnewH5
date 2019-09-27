'use strict'

require('./index.css');

var _mm = require('util/mm.js');
var header = {
	init: function(){
		this.bindEvent();
		this.onLoad();
	},
	bindEvent: function(){
		var _this = this;
		$('.search-btn').click(function(){
			_this.searchSubmit();
		})
		$('.search-input').keyup(function(e){
			if(e.keycode === 13){
				_this.searchSubmit();
			}
		})
		},
	onLoad:function(){
		var keyword = _mm.getUrlParam('keyword');
		if(keyword){
			$('.search-input').val(keyword);
		}	
	},
	searchSubmit:function(){
		var keyword = $.trim($('#search-btn').val());
		console.log("keyword = ", keyword)
		if(keyword){
			window.location.href = './list.html?keyword='+keyword;
		}else{
			_mm.goHome();
		}
	}
	
}

header.init();