import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


interface Route{
    to:string;
    path:string;
    Component:()=>JSX.Element;
    name:string;
}


export const routes:Route[]=[
    {
        to:'/lazy1',
        path: '/lazy-1',
        Component:LazyPage1,
        name: 'lazy-1',
    },
    {
        to:'/lazy2',
        path: '/lazy-2',
        Component:LazyPage2,
        name: 'lazy-2',
    },

    {
        to:'/lazy3',
        path: '/lazy-3',
        Component:LazyPage3,
        name: 'lazy-3 ',
    },


];