import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <>
    <MyComponent name="React" title="props = React"/>
    <MyComponent title="defaultProps = 리액트"/>
    <MyComponent title="children = 리액트">리액트</MyComponent>
    <MyComponent title="favoriteNumber = 2" favoriteNumber={2}/>
    </>
  );
};

export default App;
