import { ErrorMessage, useField } from 'formik';
import React from 'react'

interface Props{
    label: string;
    name: string;
    placeholder?: string;
    [x: string]:any;//comodin que permite que reciba cualquier paramero

}


export const MySelect = ({label,...props}:Props) => {
    const [field]=useField(props);
    return (
      <>
          <label htmlFor={props.id||props.name}>{label}</label>
          <select  {...field} {...props}/>
          <ErrorMessage name={props.name} component='span'/>
      </>)
}
