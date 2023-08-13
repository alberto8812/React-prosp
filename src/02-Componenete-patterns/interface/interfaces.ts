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

export interface ProductCardHOCProps{
  ({ children, Product, className }: ProductCardProps) : JSX.Element,
  Title: ({ title }: {
    title: string;
}) => JSX.Element,
Image: ({ img }: {
  img?: string | undefined;
}) => JSX.Element,
Buttons: ({className}:{className?:string}) => JSX.Element,
}

export interface onChangeArgs{
  Product: Product;
  Count: number;
}


