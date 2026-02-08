import { model, Schema } from "mongoose";

// interface and type model product
export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
}
const schemaProduct = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true },
);

const Product = model<IProduct>("Product", schemaProduct);

export default Product;
