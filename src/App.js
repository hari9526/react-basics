import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import CounterComponent from './components/CounterComponent';
import CounterFunctionalComponent from './components/CounterFunctionalComponent';
import UseEffectClassComponent from './components/UseEffectClassComponent';
import UseEffectFunctional from './components/UseEffectFunctional';

function App() {
  return (
    <div className="App">
      <h1>upGrad Demo 1</h1>
      <UseEffectFunctional />
      {/* <UseEffectClassComponent /> */}
      {/* <CounterFunctionalComponent /> <br />
      <CounterComponent />  */}
      {/* <FunctionalComponent />
      <ClassComponent
        name="Harikrishnan"
        qualification="BTech"
        pincode={123123}
        isMarried = {false}
        address={{ city: 'Trivandrum', country: 'India' }} /> */}
    </div>
  );
}

export default App;
