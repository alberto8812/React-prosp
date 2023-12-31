import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface FormValues{
    firstName: string;
    lastName: string;
    email: string;

}
export const FormikPag = () => {

const validate=({firstName,lastName,email}:FormValues) => {

  const errors:FormikErrors<FormValues>={};//objeto va a contener todos los errrores
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
   if(!firstName){
        errors.firstName='required';
    }else if(firstName.length>=15){
        errors.firstName='Must be 15 characters or less'; 
    }

    if(!lastName){
        errors.lastName='required';
    }else if(lastName.length>=10){
        errors.lastName='Must be 15 characters or less'; 
    }

    if(!email){
        errors.email='required';
    }else if(!emailReg.test(email)){
        errors.email='Invalid Email address'; 
    }
    
 return errors//la funcion debe retornar los errores

};

const {handleChange,values,handleSubmit,errors,touched,handleBlur}=useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
    },// valores onoocales
    onSubmit:(values)=>{//valores del formulario se puede usar de manera asyncrona
            console.log(values)
    },
    validate//validacion por campos
})


  return (
    <div>
            <h1>Formik Basic Tutorial</h1>
            
            <form noValidate  onSubmit={handleSubmit}>
                <label htmlFor='firstName' >First Name</label>
                <input 
                    type='text'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}//dentro del formit
                    onBlur={handleBlur}//cambios de foco

                />
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            <label htmlFor='firstName' >last Name</label>
                <input 
                    type='text'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}//dentro del formit
                    onBlur={handleBlur}
                />
           {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor='firstName' >Email address</label>
                <input 
                    type='email'
                    name='email' 
                    value={values.email}
                    onChange={handleChange}//dentro del formit
                    onBlur={handleBlur}//cambios de foco

                />
             {touched.email && errors.email && <span>{errors.email}</span>}
            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
