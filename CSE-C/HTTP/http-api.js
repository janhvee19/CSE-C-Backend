const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async (req,res) => {
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })//header pretty-print
    //const response = await fetch("https://dummyjson.com/products");
    //const data = await response.json();
    const response = await axios.get("https://dummyjson.com/products");
    const allProducts = response.data.products;
    let frontend = `<html><head></head><body>`
    allProducts.forEach((product)=> {
        frontend += `<div><img src = ${product.thumbnail}></div>`
    })
    frontend += `</body></html>`
    //const jdata = JSON.parse(data);
    res.end(frontend);
});
server.listen(port, () =>{
    console.log("first server listening on port" + port)
});