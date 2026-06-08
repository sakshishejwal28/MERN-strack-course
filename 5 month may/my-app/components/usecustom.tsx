"use client"
import React,{ useState } from "react"

export default function useCustom(initalvalue = 0){
    const [count, setCount] = useState(initalvalue)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initalvalue);
    return {
        count, increment, decrement, reset
    };

}