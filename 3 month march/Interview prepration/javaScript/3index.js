//spread operetor
//spread operetor menas (...)
// spread operator only we can use arrays & object
//expand elements (array/object) we can add new element to the array or object
// the spread operator is use to copy one array to another array

const array1 =[1,2,3];
const array2= [4,5,6];
const finalarray=[...array1,...array2];
console.log(finalarray)

//rest operator
 
function sum(...number){
    console.log(number);
    return number.reduce((a,b)=> a+b);
}
console.log(sum(1,2,3,45,52,85));

//clouser
//nested function
 
function mainfunction(){
    let name ="hoc"
    function nastedfunction(){
        let age = "1000"
        console.log(name)
        console.log(age)
    }
    return nastedfunction();

}
console.log(mainfunction());

// immediately invoked function expresion

;(function(){
    console.log("I am immediately invoked function expresion ")
})();

// self invoked function

;(function(){
    console.log("I am  self invoked function ")
})();


//Higher order function
const myfunction=(name)=>{

    const a=5
    console.log(a)
    return "hello"+ name

}
const processedfunction=(fun)=>{
    console.log("processed function",fun("hoc"))

}
console.log(processedfunction(myfunction))
// Extract value easily from arrys/object
// Makes code shorter and cleaner
// object destructuring

const data = {
    Name : "abc", 
    email :"abc@gmail.com ",
    age : 23
}
console.log(data, "==> full data")

const {Name , email,age} = data
console.log(Name)
console.log(email)

// array destructuring

const array =["test1","test2","test3","test4"]
const [a,b]=array
console.log(a)
console.log(b)