import { ReactElement } from "react";

export interface Product{
    id: string;
    title:string;
    img?:string;
}

export interface ProductCardProps{
    Product: Product;
    children?: ReactElement|ReactElement[];
}


export interface ProductContextProps {
  Counter: number;
  increaseBy:(value:number) => void;
  Product:Product;
}
