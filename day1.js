const a = 1;
if (a>10)
{
console.log(a,"big");
}
else{
    console.log(a,"small");
}
console.log("HOLA");
console.log("BAHAR SE BHOLA");
console.log("ANDAR SE...");
console.log("HUTIYA");
console.log("BAHAR SE BHI HUTIYA");
console.log("ANDAR SE BHI HUTIYA");

// console.log(process);

// setInterval(()=>{
//     console.log("kYA");
// },2000);


// setInterval(()=>{
//     console.log("HUTIYA");
// },1000);

setTimeout(()=>
{
    console.log("KYA");
},1000)

setTimeout(()=>
{
    console.log("HUTIYA...");
},2000)

const mom = "mom";
const sis = "sis";
const hello = (name) => {
    console.log('ur name pls ${name}')
}
hello('abhi')
hello(mom)
hello(sis)