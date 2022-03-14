import '../styles/Store.css';
import { useState } from "react";
import Store from './Store';

function App() {
  const [isCart, setIsCart] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button className="button" onClick={() => setIsCart(isCart => false)}>Products List</button>
        <button className="button" onClick={() => setIsCart(isCart => true)}>Cart</button>
      </header>
      <main className="App-body">
        <Store isCart={isCart}/>
      </main>
    </div>
  );
}

export default App;
