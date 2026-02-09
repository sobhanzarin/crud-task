import { model, Schema, Document } from "mongoose";

// interface and type model product
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
}
const schemaProduct = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

const Product = model<IProduct>("Product", schemaProduct);

export default Product;
