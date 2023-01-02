import './App.css';
import { Component } from 'react';
// import MyComponent from './components/MyComponent';
// import Counter from './components/Counter';
// import Say from './components/Say';
// import EventPractice from './components/EventPractice';
// import ValidationSample from './components/ValidationSample';
// import ScrollBox from './components/ScrollBox';
// import IterationSample from './components/IterationSample';
// import LifeCycleSample from './components/LifeCycleSample';
// import ErrorBoundary from './components/ErrorBoundary';
// import Counter from './components/hooks/Counter';
// import Info from './components/hooks/Info';
// import Counter2 from './components/hooks/Counter2';
import Average from './components/hooks/Average';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

class App extends Component {

  // state = {
  //   color: '#000000'
  // }

  // handleClick = () => {
  //   this.setState({ color: getRandomColor() });
  // }

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
        {/* <ScrollBox ref={ref => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button> */}
        {/* <IterationSample /> */}
        {/* <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary> */}
        {/* <Counter /> */}
        {/* <Info /> */}
        {/* <Counter2 /> */}
        <Average />
      </>
    );
  }
};

export default App;
