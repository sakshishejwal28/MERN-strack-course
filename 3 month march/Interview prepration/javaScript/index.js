console.log("we are using javascript")

//variable
const name = "hoc"
var surname ="tech "
let middlename = "solution "

//function
//normal function
function getMyname(){
    console.log("function1")

}
 getMyname()

//arrow function 
const getYourname =() =>{
    console.log("function2")
}
getYourname()

//parameter
const getMyFullName = (data= "no name") => {
    console.log("my full name ", data)
}

const myName = "nilesh patil"
getMyFullName(myName)

const test = "parth kulkarni"
getMyFullName(test)

getMyFullName()

//array index  0          1         2      3
const items =["test1" , "test2","test3","test4"]
console.log(items,"full item print")
console.log(items[0],"print only 0 index (first value)")
console.log(items[2])



//object
const studentdetails ={
    name : "nilesh",
    city: "karad"
}
console.log(studentdetails, "=> studentdetails full object")
console.log(studentdetails.name, "=> studentdetails name only")