import { Schema, Types, model } from 'mongoose';


interface IStore {
    name: string
    products: [{
        product_id: Types.ObjectId
        price: number
    }]
}

const storeSchema = new Schema<IStore>({
    name: {type: String, required: true},
    products: [{
        product_id: {type: Schema.Types.ObjectId, required: true},
        price: {type: Number, required: true}
    }]
});

export const Store = model<IStore>('Store', storeSchema);