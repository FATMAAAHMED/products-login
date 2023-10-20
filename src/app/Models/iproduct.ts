import { Category } from "./category";
import { Image } from "./image";

export interface Iproduct {
  productcode: string;
  productname: string;
  price: number;
  minQuantity: number;
  discRate: number;
  imageUrl: string;
  category: string;
}
