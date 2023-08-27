// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. 
// Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). 
// Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

function flatten(arr2d) {
	var flat = [];

	for (let i = 0; i < arr2d.length; i++) {
	  for (let j = 0; j < arr2d[i].length; j++){
	    flat.push(arr2d[i][j]);
	  }
	}
	  return flat;
	}
	console.log(result);