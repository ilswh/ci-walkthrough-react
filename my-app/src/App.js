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
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from "./components/ControlledForm";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import HooksCounter from "./components/HooksCounter";
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";
// Challenges
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
import ContentHooks from "./components/ContentHooks";
import HTTPHooks from "./components/HTTPHooks";
import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";


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


function App() {
  return <div className="App">
      <LifeCyclesCDM />
  </div>;
}


function App() {
  return <div className="App">
      <LifeCyclesCDU />
  </div>;
}


function App() {
  return <div className="App">
      <LifeCyclesCWU />
    </div>;
}

function App() {
  return <div className="App">
      <ControlledForm />
  </div>;
}

function App() {
  return <div className="App">
      <ControlledFormHooks />
  </div>;
}

function App() {
  return <div className="App">
     <UseStateWithArrays /> 
  </div>;
}

function App() {
  return <div className="App">
      {/* <StatefulGreetingWithPrevState />
      <HooksCounter /> */}
      <UseStateWithObjects />
  </div>;
}

function App() {
  return <div className="App">
      <UseEffectCounter />
  </div>;
}

function App() {
  return <div className="App">
      <HTTPHooks />
  </div>;
}

// Challenges
function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      <ContentHooks />
    </div>
  );
}

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}


export default App;