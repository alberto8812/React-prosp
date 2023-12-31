import React from 'react'
import formJson from "../data/custom-fomr.json";
import { Formik,Form } from "formik";
import { MySelect, MyTextInput } from '../components';
import * as Yup from "yup";

console.log(formJson)



const initialValues: {[key:string]:any}= {//va aset un objeto con clave valor que  carga con cualquier informacion

};
const requiredFields:{[key:string]:any}= {//

};

for (const input of formJson) {
    initialValues[input.name] = input.value;  // cacturar el valor inicial
    
    if(!input.Validations)continue; //validaciones que salga

    let schema = Yup.string()
    for(const rule of input.Validations) {
            if(rule.type ==='required'){//esquema para cado uno de los campos
                schema=schema.required('this field is required');
            }
            if(rule.type ==='minlength'){
                schema=schema.min((rule as any).value ||1,'this field is required');
            }
    }
    //crear el objeto
    requiredFields[InputDeviceInfo.name] = schema;
}

const validationScgema=Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dybamic Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationScgema}
            onSubmit={
                (values)=>{
                    console.log(values);
                }
           
            }
        >
            {
                (formik)=>(
                        <Form>

                        {formJson.map(({type,name,placeholder,label,value,options})=>{
                           
                           if(type==="input" || type==='password' || type==='email'){
                                return <MyTextInput type={(type as any)} name={name} label={label}  key={name}/>
                            }else if(type==="select"){
                                return(
                                    <MySelect key={name} label={label}  name={name}   >
                                        <option value="">select option</option>
                                        {
                                            options?.map(({id,label}) =>(
                                                <option value={id} key={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }
                            return ""
                        })}

                            <button type='submit'>Submit</button>
                        </Form>
                )
            }
        </Formik>

    </div>
  )
}
