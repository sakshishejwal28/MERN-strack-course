import { useState } from "react";

 export default function useCustom(initalvalue = 0){
  const [count , setcount]= useState(initalvalue)

  const increment = ()=> setcount(count +1);
  const decrement = () => setcount(count -1);
  const reset = () => setcount(initalvalue);

  return{
    count , increment ,decrement , reset
  };
 }