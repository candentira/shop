import { Product } from "./product.model";

export class StoreItem {
    constructor(
        public product: Product,
        public quantityInStock: number
    ) {
    }
}
