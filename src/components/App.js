import '../styles/Store.css';
import { useState } from "react";
import Store from './Store';

function App() {
  const [componentToRender, setComponentToRender] = useState('products');

  return (
    <div className="App">
      <header className="App-header">
        <button className="button button--products" onClick={() => setComponentToRender('products')}>Products List</button>
        <button className="button button--cart" onClick={() => setComponentToRender('cart')}>Cart</button>
      </header>
      <main className="App-body">
        <Store componentToRender={componentToRender}/>
      </main>
    </div>
  );
}

export default App;
