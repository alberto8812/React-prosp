import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'
import * as Yup from "yup";




export const FormitYupPage = () => {


const {handleSubmit,errors,touched,getFieldProps}=useFormik({
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
                   {...getFieldProps('firstName')}

                />
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            <label htmlFor='lastName' >last Name</label>
                <input 
                    type='text'
                    {...getFieldProps('lastName')}
                />
           {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor='email' >Email address</label>
                <input 
                    type='email'
                    {...getFieldProps('email')}

                />
             {touched.email && errors.email && <span>{errors.email}</span>}
            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
