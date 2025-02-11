const fs = require("fs");

//fs.writeFileSync("./data1.txt","Hello ABES", "utf-8");
//fs.writeFileSync("./data1.txt","Hello ABESEC", "utf-8"); //writes in the data1.txt
//fs.appendFileSync("./data1.txt"," Students", "utf-8"); // add the text in the data1.txt where last changes are done

//fs.renameSync("./data2.txt", "./data3.txt"); //renames the folder
//fs.unlinkSync("./data3.txt"); //deletes data3.txt folder

const data = fs.readFileSync("./data.txt","utf-8");
//console.log(data.toString());
console.log(data)
if(data.match("H")){
    console.log("File contains 'H'");
    const newdata= data.replace("H" , "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8");
}