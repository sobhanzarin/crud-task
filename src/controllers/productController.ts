import { NextFunction, Request, Response } from "express";
import { IProduct } from "../models/product.model";
import Product from "../models/product.model";
import createHttpError from "http-errors";
import { ProductMessage } from "../enums/message.enum";

// create new product
export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const body: IProduct = req.body;
    const { name, description, price, stock } = body;
    let product;

    // check exist product with name
    product = await Product.findOne({ name });
    if (product)
      throw createHttpError.Conflict(ProductMessage.ExistNameProduct);
    product = await Product.create({
      name,
      description,
      price,
      stock,
    });
    return successResponse(res, product, ProductMessage.Created, 201);
  } catch (error) {
    next(error);
  }
}

// get all product
export async function getAllProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const products: IProduct[] = await Product.find();
    return successResponse(res, products, "", 200);
  } catch (error) {
    next(error);
  }
}

// get product by id
export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  // method check exist product and return product
  const product: IProduct | null = await checkExistById(id as string);
  return successResponse(res, product, "", 200);
}

// update product
export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await checkExistById(id as string);
    const body: IProduct = req.body;
    if (body.name) {
      product.name = body.name;
    }
    if (body.description) {
      product.description = body.description;
    }
    if (body.price) {
      product.price = body.price;
    }
    if (body.stock) {
      product.stock = body.stock;
    }
    await product.save();
    return successResponse(res, "", ProductMessage.Updated, 200);
  } catch (error) {}
}

// delete product
export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    await checkExistById(id as string);
    await Product.deleteOne({ _id: id });

    return successResponse(res, "", ProductMessage.Deleted, 200);
  } catch (error) {
    next(error);
  }
}

// check exist product by id
async function checkExistById(id: string) {
  const product: IProduct | null = await Product.findById(id);
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
      status: statusCode,
      message,
      result: data,
    },
  });
}
