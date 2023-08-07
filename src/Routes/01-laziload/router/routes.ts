import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import {lazy,LazyExoticComponent} from "react";


type JSXComponente=()=>JSX.Element;

interface Route{
    to:string;
    path:string;
    Component:LazyExoticComponent<JSXComponente> | JSXComponente;
    name:string;
}

/**
 * define component 
 * that was load under demand
 * 
 */

const Lazy1=lazy(()=>import('../pages/LazyPage1'));
const Lazy2=lazy(()=>import('../pages/LazyPage2'));
const Lazy3=lazy(()=>import('../pages/LazyPage3'));

export const routes:Route[]=[
    {
        to:'/lazy1',
        path: '/lazy1',
        Component:Lazy1,
        name: 'lazy-1',
    },
    {
        to:'/lazy2',
        path: '/lazy2',
        Component:Lazy2,
        name: 'lazy-2',
    },

    {
        to:'/lazy3',
        path: '/lazy3',
        Component:Lazy3,
        name: 'lazy-3 ',
    },


];