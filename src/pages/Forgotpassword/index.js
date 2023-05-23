import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './forgotpassword.scss';

const Forgotpassword = () => {
  return (
    <div className='forgotpassword'>
      <div className='container'>
        <div className='forgotpassword__box'>
          <div className='forgotpassword__pic'>
            <img src={`${PUBLIC_URL}/login.png`} />
          </div>
          <div className='forgotpassword__detail'>
            <div className='forgotpassword__form'>
              <div className='forgotpassword__title'>
                <span>Quên mật khẩu</span>
              </div>
              <div className='forgotpassword__input'>
                <label>Số điện thoại</label>
                <input type='number' name='phone' required />
              </div>
              <Link to={'/code-password'} className='forgotpassword__button'>
                <button>Nhận mã</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
