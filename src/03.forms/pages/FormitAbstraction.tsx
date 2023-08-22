import {  Formik,Form } from 'formik'
import '../styles/styles.css'
import * as Yup from "yup";
import { MyTextInput,MySelect ,MyCheckBox} from '../components';





export const FormitAbstraction = () => {




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
                        jobtipe:Yup.string().required('REQUIRED').notOneOf(['it-Junior'],'this option is required'),
                    })
                }
            >

                {

                    Formik=>(
                        <Form  >

                            <MyTextInput 
                            label="firstName"
                             name="firstName"
                             placeholder='firstName'
                             />


                            <MyTextInput 
                            label="lastName"
                             name="lastName"
                             placeholder='lastName'
                             />

                            <MyTextInput 
                             label="Email address"
                             name="email"
                             placeholder='email'
                             />
                            
                            <MySelect label='Job Type' name='jobtipe'>
                                <option value="">Pick Something</option> 
                                <option value="developer">developer</option> 
                                <option value="designer">designer</option> 
                                <option value="it-senior">it-senior</option> 
                                <option value="it-Junior">it-Junior</option> 
                            </MySelect>



                            <MyCheckBox label={'Terms &Conditions'} name={'terms'}/>



                            <button type='submit'>Submit</button>
                        </Form>
    
                    )
                }
            </Formik>

    </div>
  )
}
