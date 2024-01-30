import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithCallback />
    </div>
  );
}

function App() {
  return <div className="App">
      <EventsFunctional />
      <EventsClass />
  </div>;
}

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

function App() {
  return <div className="App">
      <NestingComponents />
  </div>;
}

function App() {
  return <div className="App">
      <MethodsAsPropsParent />
  </div>;
}

function App() {
  return <div className="App">
      <RenderingLists />
  </div>;
}


function App() {
  return <div className="App">
      <Clock />
    </div>;
}


export default App;