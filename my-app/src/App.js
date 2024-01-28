import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";


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

export default App;