import renderer from 'react-test-renderer';
import Input from '../components/Input';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';

describe('<Input />', () => {
  it('renders Input correctly', () => {
    const input = renderer.create(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    ).toJSON();
    
    expect(input).toMatchSnapshot();
  });
});
