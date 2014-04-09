define(function (require, exports, module) {
	/**
	* @describe : sort by bubble sort
	* @param : obj arr
	* @param : sorting obj attr
	*/
	function sort(objArr, sortAttr){
		var i, j, tmp, len = objArr.length, resArr = [], st, et;
		
		if(len < 0)
			return -1;

		// st = (new Date()).getTime();
		// console.log(st);
		for(i = 0; i < len - 1; i++)
			for(j = 0; j < len - i - 1; j++)
				if(objArr[j][sortAttr] > objArr[j + 1][sortAttr]){
					tmp = objArr[j];
					objArr[j] = objArr[j + 1];
					objArr[j + 1] = tmp;
					resArr.push({a : objArr[j], b : objArr[j + 1]});
				}
		// et = (new Date()).getTime();
		// console.log(et);
		// console.log("Bubble sort time is:" + (et - st) + "ms");

		return resArr;
	}
	module.exports = sort;
});
