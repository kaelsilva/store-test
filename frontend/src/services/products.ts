import { IProduct } from "../common/types";
import api from "./api";
import { AxiosResponse } from "axios";

export function getProducts(): Promise<AxiosResponse<IProduct[]>> {
  return api.get("/products");
}

export function getProduct(id: string): Promise<AxiosResponse<IProduct>> {
  return api.get(`/products/${id}`);
}
