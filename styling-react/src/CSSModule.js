import styles from './CSSModule.module.scss';
import React from 'react';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요! 저는 <span className='something'>CSS Module</span> 컴포넌트입니다.
        </div>
    )
};

export default CSSModule;