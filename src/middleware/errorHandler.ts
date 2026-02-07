import { Application, NextFunction, Request, Response } from "express";
import { PublicMessage } from "../enums/message.enum";

export function exceptionError(app: Application) {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(err?.status || 500).json({
      data: null,
      error: {
        message: err?.message || PublicMessage.InternalError,
      },
    });
  });
}

export function notFound(app: Application) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
      data: null,
      error: {
        message: PublicMessage.NotFoundRoute,
      },
    });
  });
}
