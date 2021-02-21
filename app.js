// ----------------- Event Loop -----------------

// const bar = () => {
//    console.log('bar')
// }

// const baz = () => {
//   console.log('baz')
// }
// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }

// foo()

// the above exceuting we call stack

// second example
// const bar = () => {
//   console.log('bar')
// }

// const baz = () => {
//  console.log('baz')
// }
// const foo = () => {
//  console.log('foo')
//  setTimeout(bar,1000)
//  baz()
// }

// foo()

// when the setTimeOut is call the node js start the timer once the timer expires so the call back function put in the message queue and then function exceute at the end of the application


// CallBacks
// to solve delay problem we have callbacks and promises
// allow us to solve this problem and make the code ayschronous
// callback is a function which is pass into another function as an argument

// sychronous function callback


// function getMessage(msg, callback){
//   setTimeout(() => {
//     console.log(msg)
//     callback()
//   },1000)
  

// }

// function DisplayMessage(){
//   console.log('Display Message')
// }


// getMessage('Get Message', DisplayMessage) 


// promises

// is a way to excute the result of a asyncrohous func as soon as possible rather
// display at the end of the application

// let promise = new Promise(function(resolve, reject){
//   setTimeout(()=> resolve('Run Before'),1000)
// });

// promise.then(result=>{
//    console.log(result)
//    displayMessage()
//   },
//   error=>console.log(error)
// )

// function displayMessage(){
//   console.log('message')
// }




/// aysnc await Function
// async are the combination of promises they are higher level of absraction of promises they hide the uncessary code of promises


// function clone(){
//   return new Promise(resolve => {
//    setTimeout(()=>{
//      resolve('Hello')
//    },2000)
//   })
// }


// async function runMsg(callback){
//   const msg = await clone()
//   console.log("Message", msg)
//   callback()
// }

// runMsg(getResult)


// function getResult(){
//   console.log('After Exceution')
// }


// http server

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000;

// const server = http.createServer((req,res) => {
//    res.writeHead(200,{'Content-Type': 'text/plain'})
//   //  res.statusCode = 200;
//   //  res.setHeader('Content-Type', 'text/plain');
//    res.end("welcome to http server");
// })


// server.listen(port, hostname, ()=>{
//   console.log(`server running at http://${hostname}:${port}/`)
// })


// Making Http request

// http.get("http://api.open-notify.org/astros.json", res => {
//    let data = "";
//    res.on('data', chunk=>{
//      data +=chunk
//    })
//    res.on('end', ()=>{
//     let jsonData = JSON.parse(data)
//     console.log(jsonData)
//    })
// })


// HTTP Post Request
// there are many ways to perform http request in node 
// reqres is a website where you can test your api

// const http = require('https')
const axios = require('axios')

const data = JSON.stringify({
  name:"John Doe",
  Job:"Content Writer"
});

// const options = {
//   hostname:'reqres.in',
//   path:'/api/users',
//   method:'POST',
//   header:{
//     'Content-Type':'application/json'
//   }
// }

axios.post("https://reqres.in/api/users", data).then((res)=>{
   console.log(res.status)
   console.log(`Body, ${JSON.stringify(res.data)}`)
}).catch((err)=>{
  console.log(err)
})

// request
// const req = http.request(options, (res)=>{
//   let body = '';
//   console.log('Status code', res.statusCode)


//   res.on('data', (chunk) => {
//      body +=chunk
//   })

//   res.on('end', ()=>{
//     console.log('Body', JSON.parse(data))
//   })
// })

// req.write(data)
// req.end()

// axios post request