define(function(require, exports, module) {
	var Util = {};

	module.exports = Util;
	/*
	* @describe : create a series of different number
	* @param : start value
	* @param : end value
	* @param : isRandom
	* @ret : array
	*/
	Util.getContinuingNum = function(startNum, endNum, isRan){
		var res = [], 
			isDiff = isDiff || false,
			j = 0, 
			tmp;

		if(startNum > endNum)
			return -1;

		for(var i = startNum; i <= endNum; i++,j++){
			res[j] = i;
		}

		if(!isRan)
			return res;
		else{
			for(; j > 0; j--){
				i = Math.floor(Math.random() * j);
				tmp = res[i];
				res[i] = res[j - 1];
				res[j - 1] = tmp;
			}
			return res;
		}
	}
	/*
	* @describe : create a series of different number
	* @param : start value
	* @param : stepper
	* @prarm : total
	* @param : isRandom
	* @ret : array
	*/
	Util.getNumByStepper = function(startNum, stepper, totalNum, isRan){
		var res = [], 
			isDiff = isDiff || false,
			j = 0, 
			tmp;

		for(var i = 0; i <= totalNum; i++,j++){
			res[j] = startNum + i * stepper;
		}

		if(!isRan)
			return res;
		else{
			for(; j > 0; j--){
				i = Math.floor(Math.random() * j);
				tmp = res[i];
				res[i] = res[j - 1];
				res[j - 1] = tmp;
			}
			return res;
		}
	}
});
