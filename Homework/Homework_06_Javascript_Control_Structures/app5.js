console.log("**** **** ****");
console.log("Ex 5. compute how many times a certain element appears in an array ");


function element(arr, x){
    console.log('Array elements: ' + arr);
    var y = arr.length;
    var result = 0;
    for (i = 0; i < y; i++ ){
        if (x == arr[i]){
            result++;
        }
    }
    console.log('The chosen element is: ' + x + ' and it apears ' + result + ' times');
}


element([1,2,33,33,1,23, 42, 1, 42, 53, 1, 0, 2, 392], 1);