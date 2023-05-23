import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './codepassword.scss';

const Codepassword = () => {
  return (
    <div className='codepassword'>
      <div className='container'>
        <div className='codepassword__box'>
          <div className='codepassword__pic'>
            <img src={`${PUBLIC_URL}/login.png`} />
          </div>
          <div className='codepassword__detail'>
            <div className='codepassword__form'>
              <div className='codepassword__title'>
                <span>Nhập mã OTP</span>
              </div>
              <div className='codepassword__input'>
                <label>Mã OTP</label>
                <input type='number' name='phone' required />
              </div>
              <Link to={'/reset-password'} className='codepassword__button'>
                <button>Tiếp theo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codepassword;
