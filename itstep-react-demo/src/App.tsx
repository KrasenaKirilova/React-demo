

import './App.css';
import { Counter } from './components/counter/Counter';
import { Movies } from './components/movies/Movies';
import { Timer } from './components/timer/Timer';
import { Todos } from "./components/todos/Todos";


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}

      {/* < Movies />  */}
      {/* <Timer /> */}
      <Todos />
    </div>
  );
}

export default App;
