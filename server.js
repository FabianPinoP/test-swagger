const express = require("express");
const app = express();
const cors = require("cors");
const { swaggerJsdocs: v1SwaggerDocs } = require("./swagger");

const port = 4000;

app.use(cors());
app.use(express.json());

/**
 * @openapi
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        description: The auto-generated id of the user
 *      name:
 *        type: string
 *        description: The name of the user
 */

/**
 * @openapi
 * /users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: The user description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */

/**
 * @openapi
 * /users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: The user was successfully created
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

/**
 * @openapi
 * /users:
 *  put:
 *    summary: update a new user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: The user was successfully created
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  v1SwaggerDocs(app, port);
});
