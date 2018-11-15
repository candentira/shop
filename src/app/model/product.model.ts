import { ProductEnum } from './product-enum.model';

export class Product {
    constructor(
        public name: String,
        public price: Number,
        public category?: ProductEnum,
        public isAvailable?: boolean
    ) {
        this.category = category || ProductEnum.Fruits;
        this.isAvailable = isAvailable || false;
    }
}
