import '../styles/Store.css';
import { useState } from "react";
import Store from './Store';

function App() {
  const [isCart, setIsCart] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button className="button" onClick={() => setIsCart(false)}>Products List</button>
        <button className="button" onClick={() => setIsCart(true)}>Cart</button>
      </header>
      <main className="App-body">
        <Store isCart={isCart}/>
      </main>
    </div>
  );
}

export default App;
