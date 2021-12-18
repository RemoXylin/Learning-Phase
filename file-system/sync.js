const {readFileSync, writeFileSync}=require('fs');

const first=readFileSync('./file-system/first.txt','utf-8')
const second=readFileSync('./file-system/second.txt','utf-8')

console.log(first,second)
writeFileSync('./file-system/third.txt',
`result:${first} + ${second}`,
{flag:'a'})

// flag copy the whole content