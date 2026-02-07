import { Request, Response } from "express";
import { IProduct } from "../models/product.model";

export async function createProduct(req: Request, res: Response) {
  const { name, description, price, stock } = req.body;
  let product: IProduct;
}
export async function getAllProduct(req: Request, res: Response) {}
export async function getProductById(req: Request, res: Response) {}
export async function updateProduct(req: Request, res: Response) {}
export async function deleteProduct(req: Request, res: Response) {}
