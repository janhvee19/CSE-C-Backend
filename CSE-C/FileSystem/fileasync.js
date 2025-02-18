//Promises-Javascript
//const fspromise = require('fs').promises;
const fspromise = require('fs/promises');
const read = async () => {
    const data = await fspromise.readFile("./data.txt", "utf-8");
    console.log(data);
}

const write = async () => {
    await fspromise.writeFile("./data2.txt", "My name is janhvee.", "utf-8");
}
//read();
//write();
module.exports = read;