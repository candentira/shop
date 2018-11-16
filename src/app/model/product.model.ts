import { ProductEnum } from './product-enum.model';

export class Product {
    constructor(
        public name: string,
        public price: number,
        public description?: string,       
        public category?: ProductEnum
    ) {
        this.category = category || ProductEnum.Other;
    }
}
