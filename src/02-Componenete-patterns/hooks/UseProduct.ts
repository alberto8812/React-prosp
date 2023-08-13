import { useState } from "react";
import { Product, onChangeArgs } from "../interface/interfaces";

interface Props{
  Product:Product;
  onChange?:(arg:onChangeArgs) => void;
  Count?:number;
}

export const UseProduct = ({onChange,Product,Count=0}:Props) => {

    const [Counter, setCounter] = useState(Count);


    const increaseBy=(value:number)=>{
        const newValue=Math.max(Counter+value,0)
        setCounter(newValue)
        onChange && onChange({Count:newValue,Product});
    };



  return {Counter,increaseBy}
}