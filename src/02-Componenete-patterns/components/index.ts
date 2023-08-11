import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./PrudctButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./PrudctButtons";

export const ProductCard=Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductButtons,
});

export default ProductCard;