import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import warrantyStyles from './warranty.module.scss';

const Warranty = () => {
  return (
    <div className={warrantyStyles['warranty']}>
      <div className={warrantyStyles['container']}>
        <div className={warrantyStyles['warranty__box']}>
          <Link to={'/thong-tin'} className={warrantyStyles['warranty__item']}>
            <img width={124} height={131} src={`${PUBLIC_URL}/images/info.png`} alt='' />
          </Link>
          <Link to={'/dich-vu-khach-hang'} className={warrantyStyles['warranty__item']}>
            <img width={124} height={131} src={`${PUBLIC_URL}/images/bh.png`} alt='' />
          </Link>
          <div className={warrantyStyles['warranty__item']}>
            <img width={124} height={131} src={`${PUBLIC_URL}/images/ct.png`} alt='' />
          </div>
          <div className={warrantyStyles['warranty__item']}>
            <img width={124} height={131} src={`${PUBLIC_URL}/images/ud.png`} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
