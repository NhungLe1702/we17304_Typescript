import { getById } from "../../api/product";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IProduct } from "../../models";

function ProductPage() {
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { id } = useParams();

  const fetchProductById = async () => {
    if (id) {
      const { data } = await getById(id);
      console.log(data);
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <>
      <div className="header_inser bg-[#F5F5FA] leading-[40px] shadow-md">
        <div className="container">
          <div className="go_back_tc">
            <p className="flex flex-row">
              <a href="/">
                <span className="text-[13px] text-[#808089]">Trang chủ</span>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <a href="/products">
                <span className="text-[13px] text-[#808089]">Điện thoại</span>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="text-[13px] text-[#808089]">
                {/* {product.brand?.name} */}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="text-[13px]">{product.name}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="header_inser leading-[50px] border-b">
        <div className="container">
          <div className="go_back_tc">
            <p className="flex flex-row">
              <span className="text-[18px]">{product.name}</span>
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="mt-7">
            <div className="flex flex-row justify-between">
              <div className="product_detail_img ">
                <div>
                  <img src={product.image} />
                </div>

                <div className="mt-3 ">
                  <div className="grid grid-cols-5 gap-2 pt-3 border-t-[1px] border-[#F2F2F2]">
                    {/* {product.images?.map((image) => (
                      <img className="w-20 h-16" src={image.base_url} />
                    ))} */}
                  </div>
                </div>
              </div>

              <div className="border_product_detail w-[1px] border-r pl-4"></div>

              <div className="product_detail_info ml-3 relative">
                <div className="product_price flex text-lg ">
                  <p className="text-[24px] text-[#D70018]">
                    {VND.format(product.price)}
                  </p>
                  <p className="text-[14px] ml-3 mt-1 text-[#707070]">
                    {/* {VND.format(product.original_price)} */}
                  </p>
                </div>

                <div className="product_price my-4 text-[#444444] h-[100px] ">
                  <p className="text-[15px]">
                    {" "}
                    Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                    dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên
                    bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ
                    ngoài mang đến cảm giác sang trọng và tinh tế.
                  </p>
                </div>

                <div className="border-t-[1px] border-[#F2F2F2] pt-6 text-[#000000] text-[15px] absolute bottom-0">
                  <div>
                    <button className="bg-[#FF3945] text-[#FFFFFF] text-[14px] px-36 py-4 rounded-lg">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="my-5 text-[20px] text-[#333333] font-thin">
                Thông tin chi tiết
              </p>
              <div className="flex text-[#242424] w-5/6 text-[14px] pl-3">
                <div className=" w-full">
                  <table className=" table-auto leading-10 text-[#4F4F4F]">
                    {/* {product.specifications?.[0].attributes.map(
                      (item, index) => (
                        <tr>
                          <td className=" bg-[#EFEFEF] leading-4 pl-3">
                            {item.name}
                          </td>
                          {index % 2 != 0 ?  <td className="bg-[#efefef] pl-3 w-5/6">{item.value} </td> :  <td className=" pl-3 w-5/6">{item.value} </td>}
                        </tr>
                      )
                    )} */}
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="bg-[#F2F2F2] mt-[70px] rounded-md">
              <div className="text-center py-2">
                <p className="text-[#D70018]">ĐẶC ĐIỂM NỔI BẬT</p>
              </div>
              <div className="text-[14px] leading-[30px] text-[#444444] ">
                <ul className="pl-[30px] pb-3">
                  <li>
                    Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera
                    với cảm biến chính lên đến 108 MP
                  </li>
                  <li>
                    Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7
                    inch, độ phân giải Full HD+, 120Hz mượt mà
                  </li>
                  <li>
                    Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip
                    Snapdragon 778G, RAM lên đến 8 GB
                  </li>
                  <li>
                    Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000
                    mAh, hỗ trợ sạc nhanh 25 W
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div>{product.description}</div> */}

            {/* <div className=" text-center w-[350px] m-auto border border-1 border-[#000000] rounded-lg  py-1 ">
              <button className="">
                <a>Xem Thêm </a>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
