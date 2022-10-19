import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './compoent/NavicationBar';
import { Work } from './compoent/work';
import { Checkpoint } from "./compoent/checkpoint";
import { Comt } from "./compoent/comt";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Work/>
      <Checkpoint/>
      <Comt/>
    </div>
  );
}

export default App;
