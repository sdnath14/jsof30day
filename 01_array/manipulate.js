//creating an empty array
// const arr= Array()
// let emptyarray=Array(4).fill(7);
// console.log(emptyarray);
// //concat an array
// let first=[1,2,3];
// const second=[4,5,6];
// let myfinalarr=first.concat(second);
// console.log(myfinalarr);
// ++++++++ check if an element is exist in my array+++++
let fruits=['banana','orange','apple','avacado'];
//let index = fruits.indexOf('coconut');
let index=fruits.indexOf('orange');
//console.log(arr.indexOf('coconut'));
if(index===-1){
    console.log("this element does not exist in this array");
}else{
    console.log("this element does exist in this array");
}
//+++++++using ternary here++++++++++++
const num=[1,3,4,5,6]
let number=num.indexOf(9);
number===-1? console.log("this number does not exist"): console.log("this number does exist");      