// Lets begin an array.
//const myarr=[9,2,3,4,5,1.6];//array of numbers
//suppose i want to print an array and its length
//console.log("numbers are:",myarr);
//console.log("the length is:",myarr.length)
/* +++++++++++++ i want to contain differnt datatypes in an array++++++++++++++++++++
 */
const information=[{Name:'sneha Debnath'},
{country:'india'},{city:'kolkata'},
{Skills:['HTML','CSS','Javascipt']},
{age:19},{sex:'female'}, 47
]
console.log('All about me:',information);
console.log(typeof(information[1]));
// let arr = new Array
let arr = [12,3,3,432,4432,5,34,534,6,45,2,3,3]
console.log(arr.length);

let arr2 = arr.map(e => e*e)
console.log(arr2);


