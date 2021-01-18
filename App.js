import React, {Component} from 'react';
import HelloWorld from './state-drills/helloWorld';
import Bomb from './state-drills/bomb';
import RouletteGun from './state-drills/rouletteGun';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={6} />

     </div>
    );
  }
}
export default App;
