//javascript
//react js
//node js
//synchronous & asychronous
//callback
//promise
// async await

// set timeout
console.log(1)
setTimeout(()=> {
    console.log(2)
},1000)
console.log(3)

//callback

const getData = (callbackfunction) => {
    console.log("hello get data")

    callbackfunction()
}

// const  callbackfunction = () =>{
//     console.log("call back funtion called")
// }

getData(()=> console.log("call back function called"))

//promise
// resolve pending reject

const mypromises = new Promise((resolve,reject) =>{
const error = false
if(error == true)
{
    resolve("promise rejected")
}else{
reject("promise resolved")
}
})

mypromises.then((res)=>console.log(res)).catch((error)=>console.log(error))

//async await
const mypromise = async () => {
//API integration
//DB call add, delete , update get from DB 
}