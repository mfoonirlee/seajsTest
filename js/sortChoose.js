define(function (require, exports, module) {
	/**
	* @describe : sort by choose sort
	* @param : obj arr
	* @param : sorting obj attr
	*/
	function sort(objArr, sortAttr){
		var i, j, tmp, len = objArr.length, resArr = [], st, et;
		
		if(len < 0)
			return -1;

		// st = (new Date()).getTime();
		// console.log(st);
		for(i = 0; i < len - 1; i++){
			for(j = i; j < len; j++){
				if(objArr[i][sortAttr] > objArr[j][sortAttr]){
					tmp = objArr[i];
					objArr[i] = objArr[j];
					objArr[j] = tmp;
					resArr.push({a : objArr[i], b: objArr[j]});
				}
			}
		}
		// et = (new Date()).getTime();
		// console.log(et);
		// console.log("Bubble sort time is:" + (et - st) + "ms");

		return resArr;
	}
	module.exports = sort;
});
