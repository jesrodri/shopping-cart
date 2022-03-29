import '../styles/Store.css';
import Store from './Store';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme} />
    <Store initialComponent="products"/>
    </>
  );
}

export default App;
