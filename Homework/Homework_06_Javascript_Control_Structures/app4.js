console.log("**** **** ****");
console.log("Ex 4. compute the maximum of the elements of an array and display it in the console ");


function maxArr(arr){
    console.log('Array elements: ' + arr);
    var max = arr[0];
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    console.log("The maximum element is: " + max);
}

maxArr([1,3,4,88,1]);


