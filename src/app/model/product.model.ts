import { ProductEnum } from './product-enum.model';

export class Product {
    constructor(
        public name: string,
        public price: number,
        public category?: ProductEnum,
        public isAvailable?: boolean
    ) {
        this.category = category || ProductEnum.Fruits;
        this.isAvailable = isAvailable || false;
    }
}
