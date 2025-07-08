import React from "react";
import "./Home.css";

import Image1 from '../../Images/Image_1.webp';
import Image2 from '../../Images/Image_2.webp';
import Image3 from '../../Images/Image_3.webp';
import July1 from '../../Images/July_1.jpg';
import July2 from '../../Images/July_2.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">CIRCLE K</div>
        <nav className="nav-links">
          <a href="#">Giới Thiệu</a>
          <a href="#">Liên Hệ</a>
          <a href="#">Chính Sách Bảo Mật</a>
        </nav>
        <div className="auth-buttons">
          <button className="register">Đăng Ký</button>
          <button className="login">Đăng Nhập</button>
        </div>
      </header>

      {/* Menu */}
      <div className="menu-bar">
        <a href="#">Hệ Thống Circle K</a>
        <a href="#">Ưu Đãi Đặc Biệt</a>
        <a href="#">Thức Ăn & Thức Uống</a>
        <a href="#">Sản Phẩm & Dịch Vụ</a>
        <input type="text" placeholder="Tìm kiếm..." className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      {/* Main Section */}
      <div className="main-section">
        <div className="banner-buttons">
          <button className="hot-deal">HOT DEAL</button>
          <button className="find-store">TÌM CỬA HÀNG</button>
        </div>

        <div className="deal-section">
          <div className="deal-card">
            <img src={Image1} alt="Deal 1" /></div>
          <div className="deal-card">
            <img src={Image2} alt="Deal 2" /></div>
          <div className="deal-card">
            <img src={Image3} alt="Deal 3" /></div>
        </div>

        <button className="see-all">Xem Tất Cả </button>

        <div className="new-product-section">
          <h3>LUÔN CÓ SẢN PHẨM MỚI !</h3>
          <div className="new-products">
            <div className="new-card">
             <img src={July1} alt="July New 1" /></div>
            <div className="new-card">
             <img src={July2} alt="July New 2" /></div>
          </div>
          <button className="see-all">Xem Tất Cả </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="column">
            <h4>CK GO</h4>
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
            <div className="search-bar">
              <input type="text" placeholder="Tìm kiếm..." />
              <button>Tìm Kiếm</button>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <p>
            Circle K Vietnam Chuỗi cửa hàng tiện lợi - Mở cửa 24/7<br />
            Copyright © 2018 Circle K Vietnam<br />
            Tel: +84 (28) 3620 9017<br />
            Email: info@circlek.com.vn
          </p>
          <p>
            CÔNG TY TNHH VÒNG TRÒN ĐỎ - Giấy CNĐKDN: 0306182043<br />
            Địa chỉ: 160 Bùi Thị Xuân, P. Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh, Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;