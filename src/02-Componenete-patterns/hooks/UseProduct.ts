import { useEffect, useState,useRef } from "react";
import { Product, onChangeArgs } from "../interface/interfaces";


interface Props{
  Product:Product;
  onChange?:(arg:onChangeArgs) => void;
  Count?:number;
}

export const UseProduct = ({onChange,Product,Count=0}:Props) => {

    const [Counter, setCounter] = useState(Count);//count viene con un valor inicial, si cpunt llega con un valor el usesteate no vuelve a cambiar 
 
    const isControllled = useRef(!!onChange)//CONTROLA SINO  EXISTE LA FUNCION COLOCA UN TRUE  POR EL DOBLE SIGNO DE ADMIRACION 


    const increaseBy=(value:number)=>{
      console.log(isControllled.current)
      if(isControllled.current){
        console.log(value)
        return onChange!({Count:value,Product});
      }
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