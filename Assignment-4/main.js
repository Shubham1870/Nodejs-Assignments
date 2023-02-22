const fs=require("fs")
const http=require("http")

fs.writeFileSync("index.js",`<h1> Hello World </h1>
<p> This is shubham ......</p>`)

const server=http.createServer((req,res)=>{
   fs.readFile("index.js",(err,data)=>{
      res.writeHead(200,{"Content-type":"text/html"})
      res.end(`<h1> Hello World </h1>
      <p> This is Shubham</p>`)
      })
   })


server.listen(5000,()=>console.log("server up"))


