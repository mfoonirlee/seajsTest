define(function (require, exports, module) {
	/**
	* @describe : sort by quick sort
	* @param : obj arr
	* @param : sorting obj attr
	*/
	function sort(objArr, sortAttr){
		var i, j, tmp, len = objArr.length, resArr = [], st, et;
		
		if(len < 0)
			return -1;

		// st = (new Date()).getTime();
		// console.log(st);
		function quickSort(objArr, i, j){
			if(i < j){
				var q = partition(objArr, i, j);
				quickSort(objArr, i, q - 1);
				quickSort(objArr, q + 1, j);
			}
		}
		function partition(objArr, p, r){
			var x = objArr[r][sortAttr],
				mid = p,
				tmp, i;

			for(i = p; i < r; i++){
				if(objArr[i][sortAttr] < x){
					if(i != mid){
						tmp = objArr[mid];
						objArr[mid] = objArr[i];
						objArr[i] = tmp;
						resArr.push({a : objArr[mid], b : objArr[i]});
					}
					mid++;
				}
			} 
			tmp = objArr[r];
			objArr[r] = objArr[mid];
			objArr[mid] = tmp;
			resArr.push({a : objArr[mid], b : objArr[r]});
			return mid;
		}

		quickSort(objArr, 0, len - 1);
		// for(i = 0;i < len;i++)
		// 	console.log(objArr[i][sortAttr]);
		// et = (new Date()).getTime();
		// console.log(et);
		// console.log("Bubble sort time is:" + (et - st) + "ms");

		return resArr;
	}
	module.exports = sort;
});

