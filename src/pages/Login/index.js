import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './login.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Login = () => {
  const [login, setLogin] = useState({ phone: '', password: '' });
  const [notify, setNotify] = useState('');
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token', null);
  const handleLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const clickLogin = () => {
    if (login.phone === '' || login.password === '') {
      setNotify('Vui lòng nhập đủ thông tin');
      return;
    }
    if (login.phone !== 'admin' || login.password !== 'admin') {
      setNotify('Sai số điện thoại hoặc mật khẩu');
      return;
    }
    setToken('tokennnnnnn');
    setTimeout(() => {
      navigate(`/`);
    }, 1000);
  };
  useEffect(() => {
    if (token) navigate(`/`);
  }, [token, navigate]);
  return (
    <div className='login'>
      <div className='container'>
        <div className='login__box'>
          <div className='login__pic'>
            <img width={684} height={469} src={`${PUBLIC_URL}/images/login.png`} alt='' />
          </div>
          <div className='login__detail'>
            <div className='login__form'>
              <div className='login__title'>
                <span>ĐĂNG NHẬP</span>
              </div>
              <div className='login__input'>
                <label>Số điện thoại</label>
                <input type='text' name='phone' onChange={handleLogin} value={login.phone} required />
              </div>
              <div className='login__input'>
                <label>Mật khẩu </label>
                <input type='password' name='password' onChange={handleLogin} value={login.password} required />
              </div>
              <div className='login__checkbox'>
                <label>
                  <input type='checkbox' name='' /> Nhớ Đăng Nhập
                </label>
                <div className='login__btn'>
                  <Link to={'/forgot-password'}>Quên mật khẩu</Link>
                </div>
              </div>
              <div className='login__button'>
                <button onClick={clickLogin}>Đăng nhập</button>
                {notify !== '' && <p>{notify}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
