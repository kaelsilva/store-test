import request from "supertest";
import app from "../app";
import sinon from "sinon";
import ProductRepository from "../repository/ProductRepository";

const productData = {
  id: "0b8ec672-3020-4340-931f-0cafc1251b07",
  title: "Test Product",
  description: "This is a test product",
  value: 10,
  category: "Test",
  imageUrl: "http://localhost:3001/test-product.png",
};

describe("Test ProductController Endpoints", () => {
  beforeEach(() => {
    sinon.stub(ProductRepository, "create").resolves(productData);
    sinon.stub(ProductRepository, "getById").resolves(productData);
    sinon.stub(ProductRepository, "getAll").resolves([productData]);
    sinon.stub(ProductRepository, "updateById").resolves(productData);
    sinon.stub(ProductRepository, "deleteById").resolves(productData);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("POST /products", () => {
    it("should create a new product", async () => {
      const response = await request(app)
        .post("/products")
        .send(productData)
        .set("Accept", "application/json");

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("title", productData.title);
    });
  });

  describe("GET /products/:id", () => {
    it("should return a product by ID", async () => {
      const response = await request(app)
        .get(`/products/0b8ec672-3020-4340-931f-0cafc1251b07`)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("GET /products", () => {
    it("should return all products", async () => {
      const response = await request(app)
        .get("/products")
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });
  });

  describe("PUT /products/:id", () => {
    it("should update a product by ID", async () => {
      const response = await request(app)
        .put(`/products/1`)
        .send(productData)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("DELETE /products/:id", () => {
    it("should delete a product by ID", async () => {
      const response = await request(app)
        .delete(`/products/0b8ec672-3020-4340-931f-0cafc1251b07`)
        .set("Accept", "application/json");

      expect(response.status).toBe(200);
    });
  });
});
