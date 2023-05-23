import React from 'react';
import { PUBLIC_URL } from '../../utils/const';
import headerStyles from './header.module.scss';

export const Header = () => {
  return (
    <div className={headerStyles['header']}>
      <div className={headerStyles['header__des']}>
        <img src={`${PUBLIC_URL}/logo.png`} alt='' />
      </div>
      <div className={headerStyles['header__content']}>
        <p>Phạm Thanh Hoa</p>
        <div className={headerStyles['header__user']}>
          <img src={`${PUBLIC_URL}/icons/user.svg`} alt='' />
        </div>
      </div>
    </div>
  );
};
