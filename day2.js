const name=require('./export-system/names')
const hello=require('./export-system/utility.js.js')
const data=require('./export-system/alternate-export-method')

hello('abhi')
hello(name.mom)
hello(name.sis)

console.log(data);
require('./export-system/another-export-method')