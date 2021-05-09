const http = require('http')
const { url } = require('inspector')
const routing = require('./routing.js')

const server = http.createServer((req,res)=>{
      const request = req.url
      if(req.method === 'GET'){
         routing(request).then(data =>{
            res.writeHead(200,{
            'Content-Type' : 'text/html; charset = utf-8'
            })
            res.write(data)
            res.end()
         })
      }
})

server.listen(3000, (err)=>{
   if(err) throw new Error
   console.log('server is working')
})