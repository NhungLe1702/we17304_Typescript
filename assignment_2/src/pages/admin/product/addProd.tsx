// 1. Xay dung UI trang cap nhat san pham
// 2. Khai bao cac truong du lieu trong form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { updateForm, updateSchema } from "../../../models";
import { add } from "../../../api/product";

const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: updateForm) => {
    try {
      const response = await add(data);
      console.log(response);
      navigate("/admin/product");
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
                    Thêm mới sản phẩm
                  </h3>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <form
                        action=""
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div>
                          <label>Tên sản phẩm</label>
                          <input
                            {...register("name")}
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          />
                          <p className="text-red-600 text-[10px]">
                            {errors.image && errors.image.message}
                          </p>
                        </div>

                        <div>
                          <label>Hình ảnh</label>
                          <input
                            {...register("image")}
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          />
                          <p className="text-red-600 text-[10px]">
                            {errors.name && errors.name.message}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label>Gía</label>
                            <input
                              {...register("price")}
                              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                              type="number"
                            />
                            <p className="text-red-600 text-[10px]">
                              {errors.price && errors.price.message}
                            </p>
                          </div>

                          <div>
                            <label>Phần trăm giảm giá</label>
                            <input
                              {...register("percent_discount")}
                              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                              type="text"
                            />
                            <p className="text-red-600 text-[10px]">
                              {errors.percent_discount && errors.percent_discount.message}
                            </p>
                          </div>
                        </div>

                        <div>
                          <label>Mô tả</label>
                          <textarea
                            {...register("description")}
                            className="w-full rounded-lg border h-96 border-gray-200 p-3 text-sm"
                          ></textarea>
                          <p className="text-red-600 text-[10px]">
                            {errors.description && errors.description.message}
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                          >
                            Thêm mới
                          </button>
                        </div>
                      </form>
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
  );
};

export default ProductAdd;
