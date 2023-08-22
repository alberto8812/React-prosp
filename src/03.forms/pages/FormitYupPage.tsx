import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'
import * as Yup from "yup";


interface FormValues{
    firstName: string;
    lastName: string;
    email: string;

}
export const FormitYupPage = () => {


const {handleChange,values,handleSubmit,errors,touched,handleBlur}=useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
    },// valores onoocales
    onSubmit:(values)=>{//valores del formulario se puede usar de manera asyncrona
            console.log(values)
    },
   validationSchema:Yup.object({
        firstName: Yup.string().max(15,'debe de tener 14 caracteres o menos').required('REQUIRED'),
        lastName: Yup.string().max(15,'debe de tener 14 caracteres o menos').required('REQUIRED'),
        email:Yup.string().email('MUST BE A VALID EMAIL').required('REQUIRED')
    })
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
