import http from 'http'
import axios from 'axios'
const PORT = 3002;
const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    // const pdata = await fetch("https://dummyjson.com/products")
    // const data = await pdata.json();
    // res.end(JSON.stringify(data));
  
    //https://api.github.com/search/users?q=location:ghaziabad
    const pdata = await axios.get("https://api.github.com/search/users", {
        params: {
            q: "location:ghaziabad"
        }
    });
    const newdata = pdata.data.items;

    let frontend = <html><head></head><body>
    newdata.forEach((product) => {
        frontend += <div> <img src="${product.avatar_url}"> </div>
    });
    frontend += </body></html>
    res.end(frontend);
});

server.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});