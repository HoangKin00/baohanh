import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './resetpassword.scss';

const Resetpassword = () => {
  return (
    <div className='resetpassword'>
      <div className='container'>
        <div className='resetpassword__box'>
          <div className='resetpassword__pic'>
            <img width={684} height={469} src={`${PUBLIC_URL}/images/login.png`} />
          </div>
          <div className='resetpassword__detail'>
            <div className='resetpassword__form'>
              <div className='resetpassword__title'>
                <span>Đặt lại mật khẩu</span>
              </div>
              <div className='resetpassword__input'>
                <label>Mật khẩu mới</label>
                <input type='password' name='password1' required />
              </div>
              <div className='resetpassword__input'>
                <label>Nhập lại mật khẩu </label>
                <input type='password' name='password2' required />
              </div>
              <div className='resetpassword__button'>
                <button>Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resetpassword;
