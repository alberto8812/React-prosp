import React from 'react'
import '../styles/styles.css'
import * as Yup from "yup";
import { ErrorMessage, Field, Formik,Form } from 'formik';





export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Regiter Formik Page</h1>
      <Formik
        initialValues={{
          firstName:'',
          email:'',
          password: '',
          password2:'',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            firstName:Yup.string().max(15,'the field name must be at least 15 characters').min(2,'the field name must be at greatest 2 characters').required('Required'),
            email:Yup.string().email('must be a valid email').required('Required'),
            password:Yup.string().min(6,'the field password must be greater than 6 characters'),
            password2:Yup.string().min(6,'the field password must be greater than 6 characters').oneOf([Yup.ref('password'),'the  field password confirm must be  same as the field password']),
          })
        }
      
      >
          {
                  ({handleReset})=>(

                    <Form >
                      <Field name="firstName" type="text" placeholder="First Name"/>
                      <ErrorMessage name="firstName" component='span'/>
      
                      <Field name="email" type="email" placeholder="email"/>
                      <ErrorMessage name="email"  component='span' />
                      
                      <Field name="password" type="password" placeholder="password"  />
                      <ErrorMessage name="password" component='span'/>

                      <Field name="password2" type="password" placeholder="password confirm"  />
                      <ErrorMessage name="password2"component='span'/>
        
                    <button type="submit"  >Create</button>
                    <button type="button"  onClick={handleReset} >Reset</button>
        
                </Form>
      
                    
                )
          }


      </Formik>
      
    </div>
  )
}
