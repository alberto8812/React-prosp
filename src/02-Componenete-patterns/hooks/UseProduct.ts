import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interface/interfaces";

interface Props{
  Product:Product;
  onChange?:(arg:onChangeArgs) => void;
  Count?:number;
}

export const UseProduct = ({onChange,Product,Count=0}:Props) => {

    const [Counter, setCounter] = useState(Count);//count viene con un valor inicial, si cpunt llega con un valor el usesteate no vuelve a cambiar 
 

    const increaseBy=(value:number)=>{
        const newValue=Math.max(Counter+value,0)
        setCounter(newValue)
        onChange && onChange({Count:newValue,Product});
     
    };

//actualiza  el setCounter con eñ nuveo valor
    useEffect(() => {
      setCounter(Count);
    
    }, [Count])


  return {Counter,increaseBy}
}