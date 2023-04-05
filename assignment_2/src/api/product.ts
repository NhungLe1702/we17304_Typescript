import instance from ".";
import { IProduct } from "../models";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: number) => {
  const uri = "/product/" + id;
  return instance.get(uri);
};
