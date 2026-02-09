import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * middlwware validation for routes
 */
export function validationHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: {
        message: "validation error",
        error: errors.array().map((err) => err.msg),
      },
      data: null,
    });
  }
  return next();
}
