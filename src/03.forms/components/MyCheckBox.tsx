import { ErrorMessage, useField  } from "formik";

interface Props{
    label: string;
    name: string;
    [x: string]:any;//comodin que permite que reciba cualquier paramero

}

export const MyCheckBox = ({label,...props}:Props) => {
    const [field]=useField({...props,type: "checkbox"});
  return (
    <>
        <label >
            <input type="checkBox" {...props}{...field} />
            {label}
        </label>
        <ErrorMessage name={props.name} component='span'/>

    </>
    )
}   
