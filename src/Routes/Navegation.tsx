import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react";
import { Routes,Route,NavLink } from 'react-router-dom'
import logo from "../logo.svg"

import { ShoppingPage } from "../02-Componenete-patterns/page/ShoppingPage";
import { RegisterPage } from "../03.forms/pages/RegisterPage";



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
                       

                    </ul>
                </nav>

                <Routes>
                <Route path="/" element={<ShoppingPage/>} key="shopping"/>
                <Route path="/Register" element={<RegisterPage/>} key="shopping"/>
                    {/*routes.map(({path,Component})=>(<Route path={path} element={<Component/>} key={path}/>))*/}
                    

                    {/*Route path="/*" element={<Navigate to={routes[0].to}/>}/>*/}
                </Routes>

            </div>

        </BrowserRouter>
    </Suspense> 
  )
}
