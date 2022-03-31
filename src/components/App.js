import '../styles/Store.css';
import Store from './Store';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';
import styled from 'styled-components';
import css from '@styled-system/css'

const Button = styled.button`
  background-color: ${({theme}) => (theme.colors.yellow)};
  color: ${({theme}) => (theme.colors.darkSalmon)};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Test 1</Button>
      <Button css={css({backgroundColor: 'salmon', color: 'darkRed'})}>Test 2</Button>
      <Store initialComponent="products"/>
    </ThemeProvider>
  );
}

export default App;
