import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import infoStyles from './infoCustomer.module.scss';

const InfoCustomer = () => {
  return (
    <div className={infoStyles['infomation']}>
      <Link to={'/bao-hanh'} className={infoStyles['infomation__arrow']}>
        <img width={8} height={14} src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' /> Quay lại
      </Link>
      <div className={infoStyles['infomation__box']}>
        <div className={infoStyles['infomation__title']}>
          <span>Thông tin cá nhân</span>
        </div>
        <div className={infoStyles['infomation__content']}>
          <div className={infoStyles['infomation__info']}>
            <table className={infoStyles['table']}>
              <tbody>
                <tr>
                  <th>Họ tên:</th>
                  <td>Nguyễn Hạ Vy</td>
                </tr>
                <tr>
                  <th>Ngày sinh:</th>
                  <td>07/07/2000</td>
                </tr>
                <tr>
                  <th>Giới tính:</th>
                  <td>Nữ</td>
                </tr>
                <tr>
                  <th>Số điện thoại:</th>
                  <td>0987654321</td>
                </tr>
                <tr>
                  <th>Địa chỉ:</th>
                  <td>Hà Nội</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={infoStyles['infomation__info']}>
            <table className={infoStyles['table']}>
              <tbody>
                <tr>
                  <th>Mã booking:</th>
                  <td>kn123</td>
                </tr>
                <tr>
                  <th>Ngày làm dịch vụ:</th>
                  <td>07/07/2021</td>
                </tr>
                <tr>
                  <th>Mô tả:</th>
                  <td>.......</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCustomer;
