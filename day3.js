const http = require('http')
const { runInNewContext } = require('vm')

const server= http.createServer((req,res)=>{
console.log('request sent')
    if(req.url==='/'){
    res.end('HOME PAGE')
}
if(req.url==='/abhijeet'){
    // BLOCKING CODE!!!
    for(let i=0; i<100; i++){
        for(let j=0; j<100; j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end('SMART AND BRAVE')
}
res.end(`
    <h1>oopsy</h1>
    <p>we dont know her</p>
    <a href="/">back to ABHIJEET</a>
`)
})

server.listen(8080,()=>{
    console.log('listenCarefully...')
})

// eventEmitter
const EventEmiter = require('events')

const customemiter = new EventEmiter()

customemiter.on('response',(a)=>{
    console.log(`hola1 ${a}`)
})
customemiter.on('response',(a,b)=>{
    console.log(`hola2 ${b}`)
})
customemiter.on('response',(a,b,c)=>{
    console.log(`hola3 ${c}`)
})
customemiter.on('response',(a,b,c,d)=>{
    console.log(`hola4 ${d}`)
})
customemiter.on('response',(a,b,c,d,e)=>{
    console.log(`hola4 ${e}`)
})
customemiter.emit('response','sameer','bhuvan','rancho','uncle',36)