function saymyname(){
    console.log("s")
    //console.log("4");
}
saymyname()
// function addtwonumber(number1,number2){
//   console.log (number1+number2)

// }
// addtwonumber(3,4)
function addition(num1,num2){
    return num1+num2;
}
const result=addition(5,6);
console.log("additionresult",result);
function justloggmsg(username){
    if(username===undefined){
        console.log("please enter an username");
        return
    }

   return `${username} just logged in`


}
console.log(justloggmsg("sneha"))
