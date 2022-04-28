//1.WAYS TO PRINT IN JAVASCRIPT
//console.log("HELLO WORLD");
//alert("HELLO PETER");
//document.write("THIS IS DOCUMENT WRITE")
//2.Javascript console API
/*console.log(4+6,"ANOTHER LOG");
console.warn("this is warning");
console.error("this is error");*/
//console.clear();
//3. Javascript variables
//Whart are variables?-containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
//4.Data types in JS
//strings
// var str1 = "YOU ARE AMAZING";
// var str2 = "YOU ARE ALSO AMAZING";
//numbers
// var num1=475;
// var num2=56.65;
//objects
// var marks={
//     a:98,
//     b:97,
//     c:100
// }
// console.log(marks);
// //Booleans
// var a=true;
// var b=false;
// console.log(a,b);
// //var und = undefined;
// var und;
// console.log(und);
// var n=null;
// console.log(n);
//At a ver high level there are two types of datatypes in JS
//1.Primitive data types: undefined,null,number,string,boolean,symbol
//2.Reference data types:Arrays and Objects
// var arr = [1,2,"spiderman",3,4,5];
// console.log(arr);
// console.log(arr[2]);
//Operators in JS
//ARITHMETIC OPERATORS
// var m = 45
// var n = 9
// console.log("THE VALUE OF a+b is",m+n);
// console.log("THE VALUE OF a-b is",m-n);
// console.log("THE VALUE OF a*b is",m*n);
// console.log("THE VALUE OF a/b is",m/n);
//Assignment operators
// var o = n;
// o+=1;
// console.log(o);
//Comparison operators
/*var x=65;
var y=78;
console.log(x==y);
console.log(x<=y);
console.log(x>=y);
console.log(x<y);
console.log(x>y);*/
//Logical operators(and,or,not)
/*console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
console.log(true||false);
console.log(!false);
console.log(!true);*/
//functions in JS
//DRY=donot repeat yourself
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1);
// console.log(c2);
//conditions in JS
// var age = 60;
// if(age<=18){
//     console.log("You are a tenager");
// }
// else{
//     console.log("You are not a teenager");
// }
// var arr1 = [1, 2, 3, 4, 5, 6, 7];
// //     // console.log(arr1);
// for(var i=0;i<arr1.length;++i){
//     if(i==2){
//         //break;
//         continue;
//     }
//     console.log(arr1[i]);

//}
// arr1.forEach(function(element){
//     console.log(element);
// })
// let j = 0;
// // while (j<arr1.length){
// //     console.log(arr1[j]);
// //     j++
// // }
// do{
//     console.log(arr1[j]);
//     j++
// }while(j<arr1.length);


