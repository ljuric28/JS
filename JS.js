/* console.table([0,1,2,3]);  // array console 
console.log({a:10, b:3});  // object console 
console.error("This is error");
var greeting = "Hello";  // this is variable
console.log(greeting); // calls variable
console.clear();  // clear all
console.warn("This is warning");
console.time("Hello");  // first 
console.log("Hello world");
console.log("Hello world");  // how long somethings types
console.log("Hello world");
console.timeEnd("World"); // end  */

/* var name = "Almasa";  // declaration variable
console.log(name);
name = "Lukas";
console.log(name);

var greeting;  // inicialisation variable
console.log(greeting);
greeting = "Hello";
console.log(greeting); */

/* const name = "Luca";  // can be changed
console.log(name);
name = "Jurič";
console.log(name); */

/* const person = {
    name:"Luca",  
    age: 25
}

person.name = "Jurič";
person.age = 24;   // changed variable 
console.log(person);

const numbers = [0,1,2,3,4,5];
numbers.push(7);   // push number in array
console.log(numbers); */

//TYPES IN JAVASCRIPT PRIMITIV

/* // srting
const name = "Luca Jurič";
//number
const age = 25;
//boolean
const hasKid = true;
// null = returne object bat is a primitive type
const car = null;
// undefined
let test;
// simbol
const sym = Symbol()



// REFERENCE TYPES
// objects
const hobbie = ["movies", "music"];
// object litral
const adress = {
    city: "Zagreb",
    state: 10000
}

const today = new Date();

console.log(today);
console.log(typeof today); */

/* let val;
val = String([1,2,3,4]);
val = (5). toString();  // drugi način 
val = (true). toString();


val = Number("hello")  // returne NaN
val = parseInt(100.10);
val = parseFloat("100.55")
console.log(val);
//console.log(val.length);
console.log(val.toFixed(3));
console.log(typeof val);  */

//ESCEPING STRING
/* 
val = "Hi that's awsome, i can't wait";  // first example
console.log(val);

val = 'hi that\' awsome, i can\'t wait'; // again 
console.log(val); */








// NE VRAĆA VRIJEDNOST ZAŠTOOO??


/* function hello(){
    return "hello";
}


const firstName = "Luca";
const age = 24;
const job = "Frontend Developer";
let html;

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li> ${age < 30 ? 'Over 30' : 'under 30'}</li>
</ul>
`;

document.body.innerHTML = html */




//ARRAY

/* const numbers = [0,25,35,65,48];
const numbers2 = new Array(23,52,65,8,3);
const fruit = ["Banana","Apple","Orange"];
const mixed = [22,"hello world", true, undefined, {a:1, b:2}, new Date()];
let val; */

/* val= numbers.length
val = Array.isArray(numbers2);
val = numbers[3];
numbers[2]= 100;
val = numbers.indexOf(36);
val = numbers.push(2); */
//val = fruit.sort();
//val = numbers.sort();
/* val = numbers.sort(function(x, y){
    return x - y;
});


val = numbers.sort(function(x, y){    // vrati obrnuto sortitano zamjena x i y
    return y - x;
}); */


/* function under50(num){
    return num < 50;
}
val = numbers.find(under50);



console.log(numbers);
console.log(val); */


