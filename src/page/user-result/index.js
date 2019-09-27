'use strict'

require('./index.css');
require('../common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function)(){
	var type = _mm.getUrl('type') || 'default',
	$element = $('.'+ type +'-success');
	$element.show();
}