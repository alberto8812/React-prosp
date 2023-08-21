import React, { ChangeEvent, FormEvent, useState } from 'react'

export const useForms = <T>(initStates:T) => {
    const [formData, setFormData] = useState(initStates);



    const onchange=(event:ChangeEvent<HTMLInputElement>)=>{
       
      setFormData(prev=>(
        {...prev,[event.target.name]:event.target.value}
    ) );
        
           
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

    }

    
  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

    const resetFrom=() =>{
      setFormData({...initStates});
    }

  return {
    formData,
    onchange,
    onSubmit,
    resetFrom,
    isValidEmail
  }
}
