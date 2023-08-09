import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react";
import { Routes,Route,Link,NavLink,Navigate } from 'react-router-dom'
import logo from "../logo.svg"
import { routes } from "./01-laziload/router/routes"
import { ShoppingPage } from "../02-Componenete-patterns/page/ShoppingPage";



export const Navegation = () => {
  return (
   <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
        
            <div className="main-layout">

                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                     <li key="shopping"><NavLink to="/" className={({isActive})=>isActive?'nac-active':''}>Shopping page</NavLink></li>
                       

                    </ul>
                </nav>

                <Routes>
                <Route path="/" element={<ShoppingPage/>} key="shopping"/>
                    {/*routes.map(({path,Component})=>(<Route path={path} element={<Component/>} key={path}/>))*/}
                    

                    {/*Route path="/*" element={<Navigate to={routes[0].to}/>}/>*/}
                </Routes>

            </div>

        </BrowserRouter>
    </Suspense> 
  )
}
