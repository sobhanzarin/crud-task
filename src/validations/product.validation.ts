import { body, param } from "express-validator";

export const createProductValidator = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("نام نمیتواند خالی باشد")
    .isLength({ min: 5 })
    .withMessage("نام باید بیشتر از 5 کاراکتر باشه"),

  body("description").isString().withMessage("توضیحات باید متن باشه"),

  body("price").isNumeric().withMessage("مبلغ باید به صورت عددی وارد شود"),

  body("stock")
    .isNumeric()
    .withMessage("تعداد باید به صورت عددی وارد شود")
    .notEmpty()
    .withMessage("تعداد محصول نمیتواند خالی باشد")
    .isInt({ min: 0 })
    .withMessage("تعداد نمیتواند منفی باشد"),
];

export const updateProductValidator = [
  param("id").isMongoId().withMessage("شناسه محصول معتبر نیست"),

  body("name").optional().isLength({ min: 5 }),
  body("description").optional().isString(),
  body("price").optional().isNumeric(),
  body("stock")
    .optional()
    .isNumeric()
    .withMessage("تعداد باید به صورت عددی وارد شود")
    .isInt({ min: 0 })
    .withMessage("تعداد نمیتواند منفی باشد"),
];

export const idValidator = [
  param("id").isMongoId().withMessage("شناسه وارد شده معتبذ نمی باشد"),
];
