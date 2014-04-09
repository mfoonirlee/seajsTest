define(function (require, exports, module) {
	var $ = require('jquery');
	
	var Block = function(id, len, parent){
		this.id = id;
		this.len = len;
		this.parent = parent;
	}
	module.exports = Block;

	Block.prototype.init = function(y) {
		if(this.parent)
		{
			var d = document.createElement("div");
			d.className = "block";
			d.id = this.id;
			d.style.width = this.len + "px";
			d.style.top = y * 10 + "px";
			this.node = d;
			d.title = this.len;
			this.parent.appendChild(d);
		}
	};

	Block.exchangeNode = function(block1, block2){
		var d1 = block1.node,
			d2 = block2.node,
			tmp1 = $(d1).position().top,
			tmp2 = $(d2).position().top;
		$(d1).css("top", tmp2);
		$(d2).css("top", tmp1);
	}
});
