import { useState } from "react";

interface Props{
  onChange?:() => void;
}

export const UseProduct = ({onChange}:Props) => {

    const [Counter, setCounter] = useState(0);


    const increaseBy=(value:number)=>{
        setCounter(counter=>Math.max(counter+value,0))
        onChange && onChange();
    };



  return {Counter,increaseBy}
}