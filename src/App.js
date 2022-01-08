import react from 'react';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import Beverage from './component/Beverage';
import Showcase from './component/Showcase';

function App() {
  library.add(fab, faCheckSquare, faCoffee);
  return (
    <div className="App">
    <div className='coba'>
     <h1>Hello React <br/>
      oooy oy oy </h1>
  
  <Beverage/>
  <Showcase/>
     </div>
    </div>
  );
}

export default App;
