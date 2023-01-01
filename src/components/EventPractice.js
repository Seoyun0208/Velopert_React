import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    // ! 생성자 메서드에서 메서드 바인딩하는 대신 
    // ! 바벨의 transform-class-properties 문법 사용, 화살표 함수 형태로 메서드 정의하면 훨씬 편리
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 220
                }}>
                    <input
                        type="text"
                        name='message'
                        placeholder='아무거나 입력해보세요!'
                        value={this.state.message}
                        // onChange={(e) => { this.setState({ message: e.target.value }) }}
                        onChange={this.handleChange}
                    />
                    <button
                        // onClick={() => {
                        //     alert(this.state.message);
                        //     this.setState({ message: '' });
                        // }}
                        onClick={this.handleClick}
                    >확인</button>
                </div>
            </div>
        );
    }
}

export default EventPractice;