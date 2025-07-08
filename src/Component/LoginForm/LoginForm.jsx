import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  )
}

export default LoginForm