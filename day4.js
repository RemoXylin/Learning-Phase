const   http    =   require('http')
const   server =   http.createServer()
server.on('request',(req,res)=>{
    res.end('bhola')
})
server.listen(1993,()=>{
    console.log('listen to  1993')
})