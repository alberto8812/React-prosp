import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product{
    id: string;
    title:string;
    img?:string;
}


export interface ProductContextProps {
  Counter: number;
  increaseBy:(value:number) => void;
  Product:Product;
}

export interface ProductCardHOC{
  ({ children, Product, className }: ProductCardProps) : JSX.Element,
  itle: ({ title }: {
    title: string;
}) => JSX.Element,
Image: ({ img }: {
  img?: string | undefined;
}) => JSX.Element,
Buttons: () => JSX.Element,
}



