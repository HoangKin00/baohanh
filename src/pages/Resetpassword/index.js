import React, { useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
import './resetpassword.scss';

const Resetpassword = () => {
  const [info, setInfo] = useState({ pass: '', repeatPass: '' });
  const [notify, setNotify] = useState('');
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleReset = (e) => {
    e.preventDefault();
    if (info.pass === '' || info.repeatPass === '') {
      setNotify('Vui lòng nhập đủ thông tin');
      return;
    }
    if (info.pass !== info.repeatPass) {
      setNotify('Mật khẩu không khớp');
      return;
    }
    setNotify('');
  };
  return (
    <div className='resetpassword'>
      <div className='container'>
        <div className='resetpassword__box'>
          <div className='resetpassword__pic'>
            <img width={684} height={469} src={`${PUBLIC_URL}/images/login.png`} alt='' />
          </div>
          <div className='resetpassword__detail'>
            <div className='resetpassword__form'>
              <div className='resetpassword__title'>
                <span>Đặt lại mật khẩu</span>
              </div>
              <div className='resetpassword__input'>
                <label>Mật khẩu mới</label>
                <input type='password' name='pass' value={info.pass} onChange={handleInfo} required />
              </div>
              <div className='resetpassword__input'>
                <label>Nhập lại mật khẩu </label>
                <input type='password' name='repeatPass' value={info.repeatPass} onChange={handleInfo} required />
              </div>
              <div className='resetpassword__button'>
                <button onClick={handleReset}>Lưu</button>
                {notify !== '' && <p>{notify}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resetpassword;
