import React, { useState } from 'react';

import { PUBLIC_URL } from '../../utils/const';
import './forgotpassword.scss';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const [phone, setPhone] = useState('');
  const [notify, setNotify] = useState('');
  const navigate = useNavigate();
  const handleForgotPass = (e) => {
    setPhone(e.target.value);
  };
  const clickForgotPass = () => {
    if (phone === '') {
      setNotify('Vui lòng nhập số điện thoại');
      return;
    }
    navigate('/code-password');
  };
  return (
    <div className='forgotpassword'>
      <div className='container'>
        <div className='forgotpassword__box'>
          <div className='forgotpassword__pic'>
            <img src={`${PUBLIC_URL}/login.png`} alt='' />
          </div>
          <div className='forgotpassword__detail'>
            <div className='forgotpassword__form'>
              <div className='forgotpassword__title'>
                <span>Quên mật khẩu</span>
              </div>
              <div className='forgotpassword__input'>
                <label>Số điện thoại</label>
                <input type='text' name='phone' value={phone} onChange={handleForgotPass} required />
              </div>
              <div className='forgotpassword__button'>
                <button onClick={clickForgotPass}>Nhận mã</button>
                {notify !== '' && <p>{notify}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
