import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Product API",
    version: "0.0.0",
    description: "REST API for products",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Development server",
    },
  ],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "UUID of the product",
            example: "f938ae77-ee52-4611-a631-016eab17dd7d",
          },
          title: {
            type: "string",
            description: "Name of the product",
            example: "Hambúrguer Clássico",
          },
          description: {
            type: "string",
            description: "Description of the product",
            example:
              "Hambúrguer Clássico - Um pão macio e fresco, uma carne suculenta e saborosa, queijo derretido e crocante de bacon. Um clássico que nunca falha.",
          },
          value: {
            type: "number",
            format: "float",
            description: "Value of the product",
            example: 20.5,
          },
          category: {
            type: "string",
            description: "Category of the product",
            example: "Lanche",
          },
        },
        required: ["id", "title", "description", "value", "category"],
      },
    },
  },
  paths: {
    "/products": {
      post: {
        summary: "Create a new product",
        description: "Create a new product",
        tags: ["Products"],
        requestBody: {
          description: "Product object that needs to be added",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Product created successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          500: {
            description: "Internal server error",
          },
        },
      },
      get: {
        summary: "Get all products",
        description: "Get all products",
        tags: ["Products"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Product",
                  },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    "/products/{id}": {
      get: {
        summary: "Get product by ID",
        description: "Get product by ID",
        tags: ["Products"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Product ID",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          404: {
            description: "Product not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
      put: {
        summary: "Update product by ID",
        description: "Update product by ID",
        tags: ["Products"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Product ID",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          description: "Product object that needs to be updated",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Product updated successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          404: {
            description: "Product not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
      delete: {
        summary: "Delete a product",
        description: "Delete a product by ID",
        tags: ["Products"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the product to delete",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Product deleted successfully",
          },
          404: {
            description: "Product not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.ts"],
};

const router = Router();
const specs = swaggerJsdoc(options);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs, { explorer: true }));

export default router;
