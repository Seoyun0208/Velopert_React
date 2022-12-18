import { Component } from 'react';
import propTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '리액트'
    };
    static propTypes = {
        name: propTypes.string,
        favoriteNumber: propTypes.number.isRequired
    };

    render() {
        const {title, name, children, favoriteNumber} = this.props;
        return (
            <div>
            TITLE: {title}<br/>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            {children && <span>children 값은 {children}입니다.</span>}<br/>
            {favoriteNumber && <span>제가 좋아하는 숫자는 {favoriteNumber}입니다.</span>}<br/>
            ----------------------------------------
        </div>
        );
    }
};

// MyComponent.defaultProps = {
//     name: '리액트'
// };

// MyComponent.propTypes = {
//     name: propTypes.string,
//     favoriteNumber: propTypes.number.isRequired
// };

export default MyComponent;