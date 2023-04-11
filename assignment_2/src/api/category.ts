import instance from ".";

export const getAll = () => {
  const uri = "/categories";
  return instance.get(uri);
};
