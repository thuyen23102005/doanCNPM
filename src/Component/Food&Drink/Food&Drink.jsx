// FoodAndDrink.jsx
import React from "react";
import "./Food&Drink.css";

import Food from '../../Images/Food.webp';
import Drink from '../../Images/Drink.jpg';
import Promo from '../../Images/Promo.webp';
import Service from '../../Images/Service.webp';

const FoodAndDrink = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="logo">CIRCLE K</div>
        <div className="nav-links">
          <a href="#">Giới Thiệu</a>
          <a href="#">Liên Hệ</a>
          <a href="#">Chính Sách Bảo Mật</a>
        </div>
        <div className="auth-buttons">
          <button className="register">Đăng Ký</button>
          <button className="login">Đăng Nhập</button>
        </div>
      </div>

      {/* Menu bar */}
      <div className="menu-bar">
        <a href="#">Hệ Thống Circle K</a>
        <a href="#">Ưu Đãi Đặc Biệt</a>
        <a href="#">Thức Ăn & Thức Uống</a>
        <a href="#">Sản Phẩm & Dịch Vụ</a>
        <input type="text" placeholder="" className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      {/* Nội dung chính */}
      <div className="food-drink-container">
        <h2 className="section-title">GIẢI CƠN KHÁT, THOẢ CƠN ĐÓI</h2>
        <p className="section-sub">
          Hãy đến ngay cửa hàng Circle K gần nhất để có những trải nghiệm thú vị với chúng tôi.
        </p>

        <div className="highlight-section">
          <div className="highlight-card food">
            <h3>THỨC ĂN</h3>
            <p>
              Với cam kết “Tươi và Ngon” cùng các lựa chọn phong phú từ món ăn quốc tế quen thuộc
              đến món ăn địa phương và thức ăn đường phố phổ biến, Circle K luôn mang đến cho bạn sự
              hài lòng như mong muốn.
            </p>
            <img src={Food} alt="Thức ăn" />
          </div>

          <div className="highlight-card drink">
            <h3>THỨC UỐNG</h3>
            <p>
              Circle K luôn “thoả cơn khát” của bạn 24/7 với đa dạng các loại thức uống từ nóng đến
              lạnh. Chúng tôi luôn có thức uống mới để bạn thưởng thức và trải nghiệm.
            </p>
            <img src={Drink} alt="Thức uống" />
          </div>
        </div>

        <h3 className="explore-title">KHÁM PHÁ THÊM</h3>

        <div className="explore-section">
          <div className="explore-card yellow">
            <img src={Promo} alt="Ưu đãi" />
            <div className="text-content">
              <h4>Ưu đãi</h4>
              <p>
                Circle K luôn mang đến cho bạn những chương trình ưu đãi mới, đặc biệt, hấp dẫn và thú
                vị, từ các Chương Trình Khuyến Mãi Tháng, Giá Rẻ Mỗi Ngày đến các combo ăn uống mà bạn
                không thể bỏ qua.
              </p>
            </div>
          </div>

          <div className="explore-card red">
            <img src={Service} alt="Dịch vụ" />
            <div className="text-content">
              <h4>Sản phẩm & Dịch vụ</h4>
              <p>
                Cảm nhận sự tiện lợi và chất lượng về dịch vụ. Trải nghiệm sự phong phú về sản phẩm và
                dịch vụ khi mua sắm tại Circle K.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-columns">
          <div className="column">
            <h4>CK GO</h4>
          </div>
          <div className="column">
            <h4>Hệ Thống Circle K</h4>
            <a href="#">Giới Thiệu</a>
          </div>
          <div className="column">
            <h4>Ưu Đãi Đặc Biệt</h4>
            <a href="#">Liên Hệ</a>
          </div>
          <div className="column">
            <h4>Thức Ăn & Thức Uống</h4>
            <a href="#">Chính Sách Bảo Mật</a>
          </div>
          <div className="column">
            <h4>Sản Phẩm & Dịch Vụ</h4>
          </div>
        </div>
        <div className="footer-info">
          <p>Circle K Vietnam Chuỗi cửa hàng tiện lợi - Mở cửa 24/7</p>
          <p>Copyright © 2016 Circle K Vietnam</p>
          <p>Tel: +84 (28) 3620 9017</p>
          <p>Email: info@circlek.com.vn</p>
          <p>CÔNG TY TNHH VÒNG TRÒN ĐỎ - Giấy CNĐKDN : 0306182043</p>
          <p>Ngày cấp : 10/11/2008, Nơi cấp: Sở Kế Hoạch & Đầu Tư Tp. Hồ Chí Minh</p>
          <p>Địa chỉ: 160 Bùi Thị Xuân, Phường Phạm Ngũ Lão, Quận 1, Tp. Hồ Chí Minh, Việt Nam.</p>
        </div>
      </div>
    </div>
  );
};

export default FoodAndDrink;
