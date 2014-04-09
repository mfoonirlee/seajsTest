define(function(require) {
	var Block = require('./block'),
		Util = require('./util'),
		i, node,
		d = document.getElementById('tab1'),
		nodeArr = [],
		sort = require('sortChoose'),
		timer, step = 0, animateArr,
		CONST_LEN = 50,
		utilNumArr = Util.getNumByStepper(10, 5, CONST_LEN, true);

	if(utilNumArr.length === undefined)
		return;

	for(i = 0; i < CONST_LEN; i++){
		node = new Block(i, utilNumArr[i], d);
		node.init(i);
		nodeArr.push(node);
	}

	window.sortAuto = function(){
		var i = 0;
		
		if(animateArr.length <= 0){
			console.log("No sort result.");
			return;
		}

		timer = setInterval(function(){
			Block.exchangeNode(animateArr[i].a, animateArr[i].b);
			i++;
			if(i == animateArr.length){
				clearInterval(timer);
				console.log("There are " + i +" times exchanges in total.");
			}
		}, 150);
	}
	window.stopAutoSort = function(){
		clearInterval(timer);
	}

	animateArr = sort(nodeArr, "len");
});
