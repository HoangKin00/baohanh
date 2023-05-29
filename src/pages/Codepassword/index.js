import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './codepassword.scss';

const Codepassword = () => {
  const [code, setCode] = useState('');
  const [notify, setNotify] = useState('');
  const navigate = useNavigate();
  const handleCode = (e) => {
    setCode(e.target.value);
  };
  const clickCode = () => {
    if (code === '') {
      setNotify('Vui lòng nhập OTP');
      return;
    }
    navigate('/login');
  };
  return (
    <div className='codepassword'>
      <div className='container'>
        <div className='codepassword__box'>
          <div className='codepassword__pic'>
            <img width={684} height={469} src={`${PUBLIC_URL}images/login.png`} alt='' />
          </div>
          <div className='codepassword__detail'>
            <div className='codepassword__form'>
              <div className='codepassword__title'>
                <span>Nhập mã OTP</span>
              </div>
              <div className='codepassword__input'>
                <label>Mã OTP</label>
                <input type='text' name='phone' value={code} onChange={handleCode} required />
              </div>

              <div className='codepassword__button'>
                <button onClick={clickCode}>Nhận mã</button>
                {notify !== '' && <p>{notify}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codepassword;
