import { Schema, Types, model } from 'mongoose';


export interface IProduct {
    name: string
    stores: [Types.ObjectId]
}

const productSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    stores: {type: [Schema.Types.ObjectId], required: true}
});

const Product = model<IProduct>('Product', productSchema);
export default Product;