import React from 'react';
import { PUBLIC_URL } from '../../utils/const';
import headerStyles from './header.module.scss';

export const Header = () => {
  return (
    <div className={headerStyles['header']}>
      <div className={headerStyles['header__des']}>
        <img width={160} height={52} src={`${PUBLIC_URL}/images/logo.png`} alt='' />
      </div>
      <div className={headerStyles['header__content']}>
        <p>Phạm Thanh Hoa</p>
        <div className={headerStyles['header__user']}>
          <img width={26} height={26} src={`${PUBLIC_URL}/icons/user.svg`} alt='' />
        </div>
      </div>
    </div>
  );
};
