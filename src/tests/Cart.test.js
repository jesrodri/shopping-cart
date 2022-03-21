import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';
import '@testing-library/jest-dom';

describe('<Cart />', () => {
  it('renders the checkout button', () => {
    render(<Cart cart={[]} />);
    const checkoutButton = screen.getByRole( 'button', { name: 'Checkout' });

    expect(checkoutButton).toBeInTheDocument();
  });
});
