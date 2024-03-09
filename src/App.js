import logo from './logo.svg';
import './App.css';
import ProductItem from './Components/ProductItem';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <div>
            Teste
            <ProductItem />
          </div>
        </header>
      </div>
    </CartProvider>
  );
}

export default App;
