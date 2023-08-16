import { useEffect, useState,useRef } from "react";
import { InitialValues, Product, onChangeArgs } from "../interface/interfaces";


interface Props{
  Product:Product;
  onChange?:(arg:onChangeArgs) => void;
  Count?:number;
  initialValues?:InitialValues;
}

export const UseProduct = ({onChange,Product,Count=0,initialValues}:Props) => {

    const [Counter, setCounter] = useState(initialValues?.count || Count);//count viene con un valor inicial, si cpunt llega con un valor el usesteate no vuelve a cambiar 
 console.log(initialValues?.count)
    const isMounted = useRef(false)//CONTROLA SINO  EXISTE LA FUNCION COLOCA UN TRUE  POR EL DOBLE SIGNO DE ADMIRACION 

    const increaseBy=(value:number)=>{
      
        const newValue=Math.max(Counter+value,0)
        setCounter(newValue)
        onChange && onChange({Count:newValue,Product});
     
    };


    useEffect(() => {
   
      if(!isMounted.current) return;
      console.log("paso1")
      setCounter(Count);
     
    }, [Count])


//actualiza  el setCounter con eñ nuveo valor
useEffect(() => {
  isMounted.current=true;
}, [])


  return {Counter,increaseBy}
}