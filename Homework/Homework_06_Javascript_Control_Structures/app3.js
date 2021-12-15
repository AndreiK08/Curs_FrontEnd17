console.log("**** **** ****");
console.log("Ex 3 - compute the sum of the elements of an array and display it in the console");

function arrSum(arr){
    console.log('Array elements: ' + arr);
    sum = 0;
    for (let i = 0; i <= arr.length - 1; i++ ){
        sum = sum + arr[i];
        
    }
    console.log(sum);
}

arrSum([1,2,3,4,5,6]);

