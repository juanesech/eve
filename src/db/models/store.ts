import { Schema, Types, model } from 'mongoose';


export interface IStore {
    _id: Types.ObjectId
    name: string
    products: [{
        product_id: Types.ObjectId
        name: string
        price: number
    }]
}

const storeSchema = new Schema<IStore>({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, required: true},
    products: [{
        product_id: {type: Schema.Types.ObjectId, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }]
});

export const Store = model<IStore>('Store', storeSchema);
