import { useState } from "react";

export const UseProduct = () => {

    const [Counter, setCounter] = useState(0);


    const increaseBy=(value:number)=>{
        setCounter(counter=>Math.max(counter+value,0))
    };



  return {Counter,increaseBy}
}