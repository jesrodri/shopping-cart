import '../styles/Store.css';
import Store from './Store';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';
import GlobalStyle from '../GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Store initialComponent="products"/>
    </ThemeProvider>
  );
}

export default App;
