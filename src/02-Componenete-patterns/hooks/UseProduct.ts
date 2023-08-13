import { useState } from "react";
import { Product, onChangeArgs } from "../interface/interfaces";

interface Props{
  Product:Product;
  onChange?:(arg:onChangeArgs) => void;
  value?:number;
}

export const UseProduct = ({onChange,Product,value=0}:Props) => {

    const [Counter, setCounter] = useState(value);


    const increaseBy=(value:number)=>{
        const newValue=Math.max(Counter+value,0)
        setCounter(newValue)
        onChange && onChange({Count:newValue,Product});
    };



  return {Counter,increaseBy}
}