import React from 'react'
import { NavLink,Routes,Route,Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const Lazylayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        <ul>
            <li>
                <NavLink to='Lazy1'>Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to='Lazy2'>Lazy 3</NavLink>
            </li>
            <li>
                <NavLink to='Lazy3'>Lazy 2</NavLink>
            </li>
        </ul>


        <Routes>
            <Route path='Lazy1' element={<LazyPage1/>}/>
            <Route path='Lazy2' element={<LazyPage2/>}/>
            <Route path='Lazy3' element={<LazyPage3/>}/>

            <Route path='*' element={<Navigate replace to='lazy1'/>}/>
        </Routes>

    </div>
  )
}

export default  Lazylayout;
