import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Đăng nhập</h1>
        <div className='input-box'>
          <FaUser className='icon' />
          <input type="text" placeholder="Tên đăng nhập" />

        </div>
        <div className='input-box'>
          <FaLock className='icon' />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
          />

          {
            showPassword ? (
              <FaEyeSlash
                className='eye-icon active'
                onClick={togglePassword}
              />
            ) : (
              <FaEye
                className='eye-icon'
                onClick={togglePassword}
              />
            )
          }
        </div>
        <div className='remember-forgot'>
          <label> <input type="checkbox" />Ghi nhớ đăng nhập</label>
          <a href='#'>Quên mật khẩu</a>
        </div>
        <button type="submit">Đăng nhập</button>
        <div className="register-link">
          <p>Bạn chưa có tài khoản? <a href='#'>Đăng ký ngay.</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm