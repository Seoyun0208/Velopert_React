import './App.css';
import { Component } from 'react';
// import MyComponent from './components/MyComponent';
// import Counter from './components/Counter';
// import Say from './components/Say';
// import EventPractice from './components/EventPractice';
// import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        {/* <MyComponent name="React" title="props = React"/> */}
        {/* <MyComponent title="defaultProps = 리액트"/> */}
        {/* <MyComponent title="children = 리액트">리액트</MyComponent> */}
        {/* <MyComponent title="favoriteNumber = 2" favoriteNumber={2}/> */}
        {/* <Counter/> */}
        {/* <Say/> */}
        {/* <EventPractice/> */}
        {/* <ValidationSample/> */}
        <ScrollBox ref={ref => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
      </>
    );
  }
};

export default App;
