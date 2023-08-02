import { BrowserRouter } from "react-router-dom"
import { Routes,Route,Link,NavLink,Navigate } from 'react-router-dom'
import logo from "../logo.svg"



export const Navegation = () => {
  return (
    
    <BrowserRouter>
    
        <div className="main-layout">

            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=>isActive?'nac-active':''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="About" className={({isActive})=>isActive?'nac-active':''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="Users" className={({isActive})=>isActive?'nac-active':''}>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="about" element={<h1>About page</h1>}/>
                <Route path="Users" element={<h1>Users page</h1>}/>
                <Route path="home" element={<h1>Home</h1>}/>
                <Route path="/*" element={<Navigate to={"/home"}/>}/>
            </Routes>

        </div>

    </BrowserRouter>

  )
}
