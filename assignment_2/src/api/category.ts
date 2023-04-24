import instance from ".";
import { CateForm } from "../models";
export const getAll = () => {
  const uri = "/categories";
  return instance.get(uri);
};

export const getById = (id: string) => {
    const uri = "/categories/" + id;
    return instance.get(uri);
  };

export const add = (body: CateForm) => {
  console.log(body);
  const uri = "/categories/";
  return instance.post(uri, body);
};

export const update = (id: string, body: CateForm) => {
  console.log(body);
  const uri = "/categories/" + id;
  return instance.put(uri, body);
};

export const remove = (id: string) => {
  const uri = "/categories/" + id;
  return instance.delete(uri);
};
