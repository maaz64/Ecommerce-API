
# Ecommerce API

In this project we have used express and mongoose to create basic CRUD operations APIs to store the products data.To store the data we have used MongoDB cloud database. Dotenv library is used to protect the cloud database access.

To run the server just use "npm start" command.


## API Reference

#### Get All Products 

```http
  GET https://ecommerce-api-y144.onrender.com/products
```
#### Add Product

```http
  POST https://ecommerce-api-y144.onrender.com/products/create
```

#### Update Product Quantity
```http
  POST https://ecommerce-api-y144.onrender.com/products/:id/update_quantity?number=10
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Product |
| `number`      | `number` | **Required**. Quantity of Product |


#### Delete item
```http

  Delete https://ecommerce-api-y144.onrender.com/products/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product |


To check above APIs, I have used Postman. You can use any API platform.
## Authors

- [@maaz](https://github.com/maaz64)

