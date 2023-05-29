import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import serviceStyles from './serviceCustomer.module.scss';

const ServiceCustomer = () => {
  return (
    <div className={serviceStyles['serviceCustomer']}>
      <Link to={'/bao-hanh'} className={serviceStyles['serviceCustomer__arrow']}>
        <img width={8} height={14} src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' /> Quay lại
      </Link>
      <div className={serviceStyles['serviceCustomer__box']}>
        <div className={serviceStyles['serviceCustomer__title']}>
          <span>Dịch vụ bảo hành</span>
        </div>
        <div className={serviceStyles['serviceCustomer__content']}>
          <table className={serviceStyles['table']}>
            <tbody>
              <tr>
                <th>Dịch vụ</th>
                <th>Ngày làm dịch vụ</th>
                <th>Thời gian bảo hành</th>
              </tr>
              <tr>
                <td>Cắt mí</td>
                <td>02/02/2022</td>
                <td>10 năm</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>02/02/2022</td>
                <td>Trọn đời</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>02/02/2022</td>
                <td>Trọn đời</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceCustomer;
