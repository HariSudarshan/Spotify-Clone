import './App.css';
import { Leftmenu } from './components/Leftmenu';
import { Middlecontainer } from './components/Middlecontainer';
import { RIghtmenu } from './components/RIghtmenu';

function App() {
  return (
    <div className="App">
      <Leftmenu />
      <Middlecontainer />
      <RIghtmenu />

      <div className='background'></div>
    </div>

  );
}

export default App;
