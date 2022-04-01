import renderer from 'react-test-renderer';
import Button from '../components/Button';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';

describe('<Button />', () => {
  it('renders Button correctly', () => {
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    ).toJSON();
    
    expect(button).toMatchSnapshot();
  });
});
