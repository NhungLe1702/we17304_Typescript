import { Outlet, Link } from "react-router-dom";
import UserHeader from "../userHeader";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <UserHeader/>
      {/* Content */}
      <Outlet />
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="mt-[100px]">
            <div className="footer_top flex justify-between">
              <div className="footer_top_item">
                <p className="text-[#38383D] text-[16px]">Tìm cửa hàng</p>

                <ul className="text-[13px] leading-7 ">
                  <li>
                    <a>Tìm của hàng gần nhất </a>
                  </li>
                  <li>
                    <a>Mua hàng từ xa</a>
                  </li>
                  <li>
                    <a>Gặp trực tiếp cửa hàng gần nhất(Zalo hoặc gọi điện)</a>
                  </li>
                </ul>

                <p className="text-[#38383D] text-[16px]">
                  Phương thức thanh toán
                </p>
                <div>
                  <img
                    className="w-[200px]"
                    src="/Screen Shot 2023-04-03 at 10.21.20.png"
                  />
                </div>
              </div>

              <div className="footer_top_item">
                <ul className="text-[13px] leading-7 ">
                  <li>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</li>
                  <li>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</li>
                  <li>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</li>
                </ul>

                <p className="text-[#38383D] text-[16px]">
                  Đối tác dịch vụ bảo hành
                </p>
                <ul className="text-[13px] leading-7 ">
                  <li>Điện thoại - máy tính</li>
                </ul>

                <p className="text-[#38383D] text-[16px]">
                  Đối tác dịch vụ bảo hành
                </p>
                <div>
                  <img
                    className="w-[200px]"
                    src="/cropped-New-logo-DTV-ASP-01.png"
                  />
                </div>
              </div>

              <div className="footer_top_item">
                <ul className="text-[13px] leading-7 ">
                  <li>Mua hàng và thanh toán Online</li>
                  <li>Mua hàng trả góp Online</li>
                  <li>Tra thông tin đơn hàng</li>
                  <li>Tra điểm Smember</li>
                  <li>Tra thông tin bảo hành</li>
                  <li>Tra cứu hoá đơn VAT điện tử</li>
                  <li>Trung tâm bảo hành chính hãng</li>
                  <li>Quy định về việc sao lưu dữ liệu</li>
                  <li>Dịch vụ bảo hành điện thoại</li>
                </ul>
              </div>

              <div className="footer_top_item">
                <ul className="text-[13px] leading-7 ">
                  <li>Quy chế hoạt động</li>
                  <li>Chính sách bảo hành</li>
                  <li>Liên hệ hợp tác kinh doanh</li>
                  <li>Khách hàng doanh nghiệp</li>
                  <li>Ưu đãi thanh toán</li>
                  <li>Tuyển dụng</li>
                </ul>
              </div>
            </div>

            <div className="footer_bottom">
              <div className="footer_info py-5 text-[13px] leading-7 ">
                <p>
                  Trụ sở chính: Toà nhà Viettel, số 285, đường Cách Mạng Tháng
                  8, Phường 12, quận 10, thành phố Hồ Chí Minh
                </p>
                <p>
                  Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ
                  trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử
                  lý đơn hàng
                </p>
                <p>
                  Giấy chứng nhận đăng kí kinh doanh số 0309532909 do Sở Kế
                  hoạch và Đầu tư cấp lần đầu ngày 06/01/2010 và sửa dổi lần thứ
                  23 ngày 14/02/2022
                </p>
                <p>2022 - Bản quyền của công ty TNHH Tiki</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
