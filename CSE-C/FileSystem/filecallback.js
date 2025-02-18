//Asynchronous means that things can happen independently of the main program flow.
const fsCallBack = require('fs');
const read = () => {
    fsCallBack.readFile("./data.txt", "utf-8",(error,data) =>{
        if(error){
            console.error(error.message);
        }
        else{
            console.log(data);
        }
    });
}
read();
console.log("1st");
console.log("2nd");
console.log("3rd");
console.log("4th");