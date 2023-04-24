import instance from ".";
import { IProduct } from "../models";
import { updateForm } from "../models";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: string) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};

export const update = (id: string, body: updateForm) => {
  const uri = "/products/" + id;
  return instance.put(uri,  body);
};

export const remove = (id: string) => {
  const uri = "/products/" + id;
  return instance.delete(uri);
};

export const add = (body: updateForm) => {
  const uri = "/products/";
  return instance.post(uri, body);
};
