import { ProductEnum } from './ProductEnum';

export class Product {
    name: String;
    description: String;
    price: Number;
    category: ProductEnum;
    isAvailable: boolean;
}