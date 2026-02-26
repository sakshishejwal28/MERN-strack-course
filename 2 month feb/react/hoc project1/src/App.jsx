import 'bootstrap/dist/css/bootstrap.min.css';

 
import DetailCard from './componants/DetailCard';
function App() {
//javascript
console.log("ppppppppppppp");
//variable
const name= "hoc" //we can not change value
let age= 20 // we can change
console.log(name,"hoc ===>");
console.log(age, "age==>");
//string
const a="hoc tech solution";
//array
const b=["apple","text","pune",2345];
//object
const data ={
  name:"text",
  city:"pune"
};
//if else
  const fullname="hoc"
if(fullname=="hoc"){
  console.log(true)
}
else{
  console.log(false)
}
//function
function addnumber(){
  console.log("click")
}
//.map
const carddata =[
  {
CardTitle:"title-1",
 discription:"rose",
  },
  {
CardTitle:"title-1",
 discription:"rose",
  },
   {
CardTitle:"title-1",
 discription:"rose",
  },
  {
CardTitle:"title-1",
 discription:"rose",
  },
   {
CardTitle:"title-1",
 discription:"rose",
  },
  {
CardTitle:"title-1",
 discription:"rose",
  },
];
console.log(carddata ,"------")

  return (
    <>
    <button className='btn btn-primary'onClick={addnumber}>click me</button>

      <div className="container">
        <div className="row my-2">
          {
             carddata .map((each)=>(
               
          <div className="col-md-3">
          <DetailCard CardTitle={each.CardTitle} discription={each.discription}/>
              
          </div>
          )) }
        </div>
      </div>

    </>
  )
}

export default App
