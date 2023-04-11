import { useState, useEffect } from "react";
import { getAll, remove } from "../../../api/product";
import { IProduct } from "../../../models";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await getAll();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePro = async (id: string) => {
    try {
      confirm("Bạn chắc chắn chứ ?");
      const { data } = await remove(id);
      setProducts(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <>
      <div
        id="main-content"
        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
      >
        <main>
          <div className="pt-6 px-4">
            <div className="w-full ">
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Danh sách sản phẩm
                    </h3>
                    <button className="mb-1.5 block w-full text-center text-white bg-[#3498a5] hover:bg-[#298995] px-2 py-1.5 rounded-md font-bold">
                      <Link to={`/admin/product/add`}>Thêm sản phẩm</Link>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="overflow-x-auto rounded-lg">
                    <div className="align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Tên sản phẩm
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Hình ảnh
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Giá
                              </th>

                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Thao tác
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            {products.map((product) => (
                              <tr key={product._id}>
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                  <Link to={`/admin/product/${product._id}`}>
                                    {product.name}
                                  </Link>
                                </td>
                                <td className="p-4 w-[30%]  whitespace-nowrap text-sm font-normal text-gray-900">
                                  <img
                                    className="w-[50%]"
                                    src={product.image}
                                    alt=""
                                  />
                                </td>
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                  {VND.format(product.price)}
                                </td>

                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                  <button
                                    className="bg-red-600 text-white rounded-md p-2"
                                    onClick={() => deletePro(product._id)}
                                  >
                                    Xoá
                                  </button>
                                  <button className="bg-blue-600 text-white rounded-md p-2 ml-3">
                                    <Link to={`/admin/product/${product._id}`}>
                                      Sửa
                                    </Link>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <p className="text-center text-sm text-gray-500 my-10">
          &copy; 2019-2021{" "}
          <a href="#" className="hover:underline" target="_blank">
            Themesberg
          </a>
          . All rights reserved.
        </p>
      </div>
    </>
  );
};

export default ListProduct;
