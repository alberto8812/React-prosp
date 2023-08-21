import React from 'react'
import '../styles/styles.css'
import { useForms } from '../hooks/useForms';

interface registeData{
    name: string;
    email: string;
    password: string;
    password2: string;
}

export const RegisterPage = () => {
   const {formData,onSubmit,onchange,resetFrom,isValidEmail}= useForms<registeData>(
    {
        name: '',
        email: '',
        password: '',
        password2: '',
        
    }
   )

    const {name,email,password,password2}=formData;


  return (
    <div>
        <h1>Regiter Page</h1>

        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
            type="text"
            placeholder='Name'
            name='name'
            value={name}
            onChange={(event)=>onchange(event)}
            className={`${name.trim().length<=0  && 'has-error' }` }
            />
            {name.trim().length<=0 && <span>Este campo es Obligatorio</span>}
            <input 
            type="email"
            placeholder='email'
            name='email'
            value={email}
            className={`${!isValidEmail(email)  && 'has-error' }` }
            onChange={(event)=>onchange(event)}
            />
            {!isValidEmail(email)&&<span>Emial no es valido</span>}
            <input 
            type="password"
            placeholder='password'
            name='password'
            value={password}
            onChange={(event)=>onchange(event)}
            />
            {password.trim().length<=0 && <span>Este campo es Obligatorio</span>}
            {password.trim().length<6 && password.trim().length>0&&<span>la contrasela debe ser mayor a 6 caracteres</span>}
            <input 
            type="password"
            placeholder='Repeat password'
            name='password2'
            value={password2}
            onChange={(event)=>onchange(event)}
            />

            <button type="submit"  >Create</button>
            <button type="button" onClick={resetFrom}  >Reset</button>

        </form>
    </div>
  )
}
