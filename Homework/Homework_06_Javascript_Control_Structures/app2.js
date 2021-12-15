
console.log("**** **** ****");
console.log("Ex 2. display in the console the odd numbers from 1 to 20");

console.log("Varianta 1");
var nr = 0;
for (let i = 0; i < 20; i++){
    nr = nr + 1;
    if (nr % 2 == 1){
        console.log(nr);
    }
}
console.log("Varianta 2");
for (i = 1; i < 20; i+=2) {
    console.log(i);
   }
