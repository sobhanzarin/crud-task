import { Request, Response } from "express";
import { IProduct } from "../models/product.model";
import Product from "../models/product.model";
import createHttpError from "http-errors";
import { ProductMessage } from "../enums/message.enum";
import { CheckProductType } from "../types/checkProduct.type";
import { error } from "node:console";

// creat new product
export async function createProduct(req: Request, res: Response) {
  const { name, description, price, stock } = req.body;
  let product;

  // check exist product with name
  product = await Product.findOne({ name });
  if (product) throw createHttpError.Conflict(ProductMessage.ExistNameProduct);
  product = await Product.create({
    name,
    description,
    price,
    stock,
  });
  res.json({
    error: null,
    data: {
      message: ProductMessage.Created,
      product,
    },
  });
  return successResponse(res, product, ProductMessage.Created, 201);
}
export async function getAllProduct(req: Request, res: Response) {
  const products = await Product.find();
  res.json({
    error: null,
    data: {
      products,
    },
  });
  return successResponse(res, products, "", 200);
}

// get product by id
export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  // method check exist product and return product
  const product = await checkExistById(id as string);
  return successResponse(res, product, "", 200);
}

// update product
export async function updateProduct(req: Request, res: Response) {}

// delete product
export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  checkExistById(id as string);
  await Product.deleteMany({ _id: id });
  res.json({
    error: null,
    data: {
      message: ProductMessage.Deleted,
    },
  });
  return successResponse(res, "", ProductMessage.Deleted, 200);
}

// check exist product by id
async function checkExistById(id: string) {
  const product = await Product.findById(id);
  if (!product) throw createHttpError.NotFound(ProductMessage.NotFound);
  return product;
}

// global method response successfully
function successResponse(
  res: Response,
  data: any,
  message: string,
  statusCode: number,
) {
  return res.json({
    error: null,
    data: {
      message,
      result: data,
    },
  });
}
