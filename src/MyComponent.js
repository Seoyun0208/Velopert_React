import React from 'react';
import propTypes from 'prop-types';

const MyComponent = ({title, name, children, favoriteNumber}) => {
    // const {title, name, children} = props;
    return (
        <div>
            TITLE: {title}<br/>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            {children && <span>children 값은 {children}입니다.</span>}<br/>
            {favoriteNumber && <span>제가 좋아하는 숫자는 {favoriteNumber}입니다.</span>}<br/>
            ----------------------------------------
        </div>
    );
};

MyComponent.defaultProps = {
    name: '리액트'
};

MyComponent.propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired
};

export default MyComponent;