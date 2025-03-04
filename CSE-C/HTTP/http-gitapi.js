const http = require('http');
const axios = require('axios');
const port = 3001;
const server = http.createServer(async (req,res) => {
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })
    const response = await axios.get("https://api.github.com/users");
    const allUsers = response.data;
    let frontend = `<html><head></head><body>`
    allUsers.forEach((user)=> {
        frontend += `<div><img src = ${user.avatar_url}></div>`
    })
    frontend += `</body></html>`
    //const jdata = JSON.parse(data);
    res.end(frontend);
});
server.listen(port, () =>{
    console.log("first server listening on port " + port)
});