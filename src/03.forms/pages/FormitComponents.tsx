import {  useFormik,Formik,Form,Field, ErrorMessage } from 'formik'
import '../styles/styles.css'
import * as Yup from "yup";




export const FormitComponents = () => {




  return (
    <div>
            <h1>Formik Basic Tutorial</h1>
            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms:false,
                    job: '',
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15,'debe de tener 14 caracteres o menos').required('REQUIRED'),
                        lastName: Yup.string().max(15,'debe de tener 14 caracteres o menos').required('REQUIRED'),
                        email:Yup.string().email('MUST BE A VALID EMAIL').required('REQUIRED'),
                        terms:Yup.boolean().oneOf([true],'you nedd to accept the terms'),
                        jobtipe:Yup.string().required('REQUIRED').notOneOf(['it-junior'],'this option is required'),
                    })
                }
            >

                {

                    Formik=>(
                        <Form  >
                            <label htmlFor='firstName' >First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor='lastName' >last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>
                            
        
                            <label htmlFor='email' >Email address</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label >
                            <Field name="terms" type="Checkbox"/>
                                Terms and Condition
                            </label>                           
                           <ErrorMessage name="terms" component="span"/>

                           <label >Job Type</label>
                           <Field name="jobtipe" as="select">
                            <option value="">Pick Something</option> 
                            <option value="developer">developer</option> 
                            <option value="designer">designer</option> 
                            <option value="it-senior">it-senior</option> 
                            <option value="it-Junior">it-Junior</option> 
                           </Field>                           
                           <ErrorMessage name="jobtipe" component="span"/>


                            <button type='submit'>Submit</button>
                        </Form>
    
                    )
                }
            </Formik>

    </div>
  )
}
