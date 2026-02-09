CRUD Task Product
==============================


توسعه endpint های ایجاد محصول با تکنولوزی های : 

- Node.Js
- Express.Js
- MongoDb
- Mongoose (orm)
- TypeScript


--------------------------
ساختار پروژه 
--------------------------


src/
 ├─ config/
 │   └─ database.ts
 │   └─ server.ts
 ├─ controllers/
 │   └─ productController.ts
 ├─ enums/
 │   └─ product.model.ts
 ├─ enums/
 │   └─ message.enum.ts
 ├─ middleware/
 │   └─ errorHandler.ts
 │   └─validate.middleware.ts
 ├─ models/
 │   └─ product.model.ts
 ├─ routes/
 │   └─ productRoutes.ts
 ├─ validation/
 │   └─ product.validation.ts
 └─ .env


--------------------------
ساختار دیتابیس  
--------------------------

فیلد ها: 

- name : strin
- description: string
- price: number
- stock: number

--------------------------
شروع پروژه
--------------------------

npm install

فایل .env
PORT=5000
DB_URL="mongodb://localhost:27017/crud-task"

Development:
npm run dev

Production:
npm run build
npm start

--------------------------
Api Endpoint
--------------------------

1- ایجاد محصول
POST /api/products

Body:
{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1500,
  "stock": 10
}

Response:
201 Created

2- گرفتن تمام محصولات
GET /api/products


3- گرفتن محصول بر اساس id
GET /api/products/:id


4- آپدیت محصول
PUT /api/products/:id

Body :
{
  "price": 2000,
  "stock": 5
}

5- حذف محصول 
DELETE /api/products/:id


response کلی ساختار : 
{
  "error": null,
  "data": {
    "status": 200,
    "message": "Success message",
    "result": {}
  }
}


