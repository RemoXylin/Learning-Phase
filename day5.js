// const {writeFileSync}=require('fs')
// for (let i=0; i<10000000;   i++){
//     writeFileSync('./file-system/big.txt', `hola   ${i}\n`,    {flag:'a'})
// }

const {createReadStream}  =   require('fs')
const   stream  =   createReadStream('./file-system/big.txt',{
    highWaterMark:10000,
    encoding:'utf8'})
// default  size    is  64kb
stream.on('data',(result)=>{
    // console.log(`received   ${result.length}   bytes`)
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})


// ThisIsSeparateCode
var http =   require('http')
var fs    = require('fs')

http.createServer(function(req,res){
// const   text=fs.readFileSync('./file-system/big.txt','utf8')
// res.end(text)
const   fileStream=fs.createReadStream('./file-system/big.txt','utf8')
// on   is  to  read    data
fileStream.on('open',()=>{
    // pipe is  to  write   data
    fileStream.pipe(res)
})
fileStream.on('error',(err)=>{
    res.end(err)
})
})
.listen(1993)