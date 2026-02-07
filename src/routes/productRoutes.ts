import { Router, Request, Response } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("");
});
router.get("/products/:id", (req: Request, res: Response) => {
  res.send("ddddd");
});
router.put("/products/:id", (req: Request, res: Response) => {
  res.send("ssssss");
});
export default router;
