import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react";
import { Routes,Route,NavLink } from 'react-router-dom'
import logo from "../logo.svg"

import { ShoppingPage } from "../02-Componenete-patterns/page/ShoppingPage";
import { RegisterPage } from "../03.forms/pages/RegisterPage";
import { FormikPag } from "../03.forms/pages/FormikPag";
import { FormitYupPage } from "../03.forms/pages/FormitYupPage";
import { FormitComponents } from "../03.forms/pages/FormitComponents";



export const Navegation = () => {
  return (
   <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
        
            <div className="main-layout">

                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                     <li key="shopping"><NavLink to="/" className={({isActive})=>isActive?'nac-active':''}>Shopping page</NavLink></li>
                     <li key="form"><NavLink to="/Register" className={({isActive})=>isActive?'nac-active':''}>Registes Page</NavLink></li>
                     <li key="formik"><NavLink to="/formik-Register" className={({isActive})=>isActive?'nac-active':''}> Formik Registes Page</NavLink></li>
                     <li key="formik"><NavLink to="/formik-YUP Register" className={({isActive})=>isActive?'nac-active':''}> Formik YUP Registes Page</NavLink></li>
                     <li key="formik"><NavLink to="/formik Component" className={({isActive})=>isActive?'nac-active':''}> Formik Component</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                <Route path="/" element={<ShoppingPage/>} key="shopping"/>
                <Route path="/Register" element={<RegisterPage/>} key="Register"/>
                <Route path="/formik-Register" element={<FormikPag/>} key="shopping"/>
                <Route path="/formik-YUP Register" element={<FormitYupPage/>} key="YUP"/>
                <Route path="/formik Component" element={<FormitComponents/>} key="Component"/>
                    {/*routes.map(({path,Component})=>(<Route path={path} element={<Component/>} key={path}/>))*/}
                    

                    {/*Route path="/*" element={<Navigate to={routes[0].to}/>}/>*/}
                </Routes>

            </div>

        </BrowserRouter>
    </Suspense> 
  )
}
