// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    var result = [];

    for(var i=0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
            
        }
    }
    return result;
}

var array = [3, 7, -23, 0, 2.5, -4];
var filteredArray = removeNegatives(array);
console.log(filteredArray);