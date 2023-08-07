
import { LazyPage1, LazyPage2, LazyPage3, NoLazy } from "../pages";
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

const Lazylayout=lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../layout/Lazylayout'));


export const routes:Route[]=[


    {
        to:'/lazyLoad/',
        path: '/lazyLoad/*',
        Component:Lazylayout,
        name: 'DashBoard',
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component:NoLazy,
        name: 'NoLazy',
    },


];