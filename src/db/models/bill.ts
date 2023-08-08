import { Schema, Types, model } from 'mongoose';


interface IBill {
    date: Date
    store_id: Types.ObjectId
    products: [{
        product_id: Types.ObjectId
        price: number
    }]
}

const billSchema = new Schema<IBill>({
    date: {type: Date, required: true},
    store_id: {type: Schema.Types.ObjectId, ref: 'Store'},
    products: [{
        product_id: {type: Schema.Types.ObjectId, ref: 'Product'},
        price: {type: Number, required: true}
    }]
});

const Bill = model<IBill>('Bill', billSchema);
export default Bill;