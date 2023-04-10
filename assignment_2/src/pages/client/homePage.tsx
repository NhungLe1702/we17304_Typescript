import Product from "../../components/Product";
import { useEffect, useState } from "react";
import { IProduct } from "../../models";
import { getAll } from "../../api/product";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await getAll();
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="banner">
        <div className="container_home my-6">
          <img src="/banner.png" />
        </div>
      </div>

      <section>
        <div className="container_home">
          <h1>SẢN PHẨM NỔI BẬT NHẤT</h1>
          <div className="grid grid-cols-6 gap-x-5 gap-y-[100px] my-6">
            {products.map((product) => (
              <Product data={product} key={product._id}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
