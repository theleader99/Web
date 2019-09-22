let http = require("http");
let url = require("url");
let fs = require("fs");
 
let server = http.createServer((req, res) => {
    let urlData = url.parse(req.url, true);
    let fileName = "./views" + urlData.pathname;
 
    if(urlData.pathname === "/") {
        fileName = "./views/master.html";
    }
 
    fs.readFile(fileName, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("404 Not Found");
 
            return res.end();
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
 
        return res.end();
    });
});
 
server.listen(3000, "localhost", () => {
  console.log(`Hello Chiến Thắng, I'm running at localhost:3000/`);
});