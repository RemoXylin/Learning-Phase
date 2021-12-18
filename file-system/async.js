const {readFile,writeFile}=require('fs');

readFile('./file-system/first.txt',
'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
   const first = result

readFile('./file-system/second.txt',
'utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second=result

writeFile('./file-system/fourth.txt',
`here is result: ${first} + ${second}`,
(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})
})
})