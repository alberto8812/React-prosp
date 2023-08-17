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
  maxCount?:number;
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


export interface InitialValues {
   count?: number;
   maxCount?: number;
}

export interface ProductCardHandlers{
  Count: number;
  isMaxCountReached: boolean;
  maxcount?: number;
  Product: Product;
  increaseBy:(value:number) => void;
  reset:() => void;//para reiniciar el estadp

}
