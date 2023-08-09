import { Schema, model } from 'mongoose';


export interface IStore {
    _id: string
    name: string
    products: [{
        product_id: string
        price: number
    }]
}

const storeSchema = new Schema<IStore>({
    _id: {type: String},
    name: {type: String, required: true},
    products: [{
        product_id: {type: String, required: true},
        price: {type: Number, required: true}
    }]
});

export const Store = model<IStore>('Store', storeSchema);
