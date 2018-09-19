module.exports = function getZerosCount(number, base) {
  // your implementation
  function sDiv(numBase) {
  	var arrDiv = [];
  	var arrPow = [];
  	for (let i = 2; i <= numBase; i++) {
  		if (numBase % i === 0) {
  			var count = 0;
  			do {
  				numBase /= i;
  				count++;	
  			} while (numBase % i === 0 && numBase >= i)
  			arrDiv.push(i);
  			arrPow.push(count);
  		}
  	}
  	return [arrDiv, arrPow];
  }
  // function compareMin(arr) {
  //   arr.sort(function(a, b) {return a - b;});
  //   return arr[0];
  // }
  var divs = sDiv(base)[0];
  var pows = sDiv(base)[1];
  var arrAtt = [];
  for (let j = 0; j < divs.length; j++) {
    arrAtt[j] = 0;
    for (let k = 1; (number / Math.pow(divs[j], k)) > 1; k++) {
      arrAtt[j] += Math.floor(number / Math.pow(divs[j], k));
    }
    arrAtt[j] = Math.floor((arrAtt[j]) / pows[j]); 
  }
  // return compareMin(arrAtt);
  return Math.min(...arrAtt);
}