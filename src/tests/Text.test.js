import renderer from 'react-test-renderer';
import Text from '../components/Text';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

describe('<Text />', () => {
  it('renders Text correctly', () => {
    const text = renderer.create(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    ).toJSON();
    
    expect(text).toMatchSnapshot();
  });
});
