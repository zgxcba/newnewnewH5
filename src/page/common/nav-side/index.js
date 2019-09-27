'use strict'

require('./index.css');

var _mm = require('util/mm.js');
var templateIndex = require('./index.string');

var navSide = {
	option: {
		name:'',
		navList:[
		{
			name:'user-center',
			desc:'个人中心',
			href:'./user-center.html'
		},
		{
			name:'order-list',
			desc:'我的订单',
			href:'./user-list.html'
		},
		{
			name:'user-pass-update',
			desc:'修改密码',
			href:'./user-pass-update.html'
		},
		{
			name:'about',
			desc:'关于天猫',
			href:'./about.html'
		}
		]
	},
	init: function(option){
		$.extend(this.option,option);
		this.renderNav();
	},
	renderNav: function(){
		for(var i = 0,iLength = this.option.navList.length; i < iLength; i++){
			if(this.option.navList[i].name === this.option.name){
				this.option.navList[i].isActive = true;
			}
		}
		var navHtml = _mm.renderHtml(templateIndex,{
			navList: this.option.navList
		});
		$('.nav-side').html(navHtml);
	}
}

module.exports = navSide;