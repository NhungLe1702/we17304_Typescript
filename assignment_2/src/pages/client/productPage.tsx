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
              <span className="text-[13px] text-[#808089]">{product.brand?.name}</span>
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
              <span className="text-[18px]">Iphone 11 64GB</span>
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
                  <img src={product.images?.[0].base_url} />
                </div>

                <div className="mt-3 ">
                  <div className="grid grid-cols-5 gap-2 pt-3 border-t-[1px] border-[#F2F2F2]">
                    <img
                      className="w-20 h-16"
                      src="https://res.cloudinary.com/dv3vzmogk/image/upload/v1666142438/anhhtus/%C4%90%E1%BB%81%20thi/3_225_c6ncpa.jpg"
                    />
                    <img
                      className="w-20 h-16"
                      src="https://res.cloudinary.com/dv3vzmogk/image/upload/v1666142438/anhhtus/%C4%90%E1%BB%81%20thi/3_225_c6ncpa.jpg"
                    />
                    <img
                      className="w-20 h-16"
                      src="https://res.cloudinary.com/dv3vzmogk/image/upload/v1666142438/anhhtus/%C4%90%E1%BB%81%20thi/3_225_c6ncpa.jpg"
                    />
                    <img
                      className="w-20 h-16"
                      src="https://res.cloudinary.com/dv3vzmogk/image/upload/v1666142438/anhhtus/%C4%90%E1%BB%81%20thi/3_225_c6ncpa.jpg"
                    />
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
                    {VND.format(product.original_price)}
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

            <div className="bg-[#F2F2F2] mt-[70px] rounded-md">
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
            </div>
            <div>
              <p className="text-[14px] leading-[30px] text-[#444444] pt-3">
                Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những
                ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ
                tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết
                kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73
                với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi
                bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
              </p>
              <div className="text-[14px] leading-[30px] text-[#444444] py-3">
                <p className="text-[#0A263C] text-[21px] pb-2">
                  Đánh giá Iphone 11 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
                </p>
                <p className="pb-3">
                  Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng
                  cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu
                  năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá
                  chi tiết về chiếc
                </p>
                <p className="text-[#0A263C] text-[16px] pb-1">
                  Thiết kế sang trọng, màn hình Super AMOLED
                </p>
                <p>
                  Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ
                  quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
                  Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến
                  cảm giác sang trọng và tinh tế.
                </p>
                <p>
                  Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng
                  khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn
                  có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất
                  cứ lúc nào.
                </p>
                <p>
                  Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và
                  dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và
                  có thể di chuyển dễ dàng.
                </p>
              </div>
            </div>
            <div className=" text-center w-[350px] m-auto border border-1 border-[#000000] rounded-lg  py-1 ">
              <button className="">
                <a>Xem Thêm </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
