import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Checkout from '../checkout';

describe('<Checkout />', () => {
  describe('when it renders the checkout page', () => {
    it('has the Checkout title', () => {
      render(<Checkout />);
      const checkoutTitle = screen.getByRole( 'heading', { name: 'Checkout' });
  
      expect(checkoutTitle).toBeInTheDocument();
    });
  
    it('has the Shipping address title', () => {
      render(<Checkout />);
      const shippingAddressTitle = screen.getByRole( 'heading', { name: 'Shipping address' });
  
      expect(shippingAddressTitle).toBeInTheDocument();
    });
  });

  describe('when the user clicks the NEXT button once', () => {
    it('renders the Payment method title', () => {
      render(<Checkout />);

      const buttonNext = screen.getAllByRole('button', {name: 'Next'})[0];
      userEvent.click(buttonNext);

      const paymentMethodTitle = screen.getByText(/Payment method/i);
  
      expect(paymentMethodTitle).toBeInTheDocument();
    });
  });

  describe('when the user clicks the NEXT button twice', () => {
    it('renders the Order summary title', () => {
      render(<Checkout />);
      
      const buttonNext = screen.getAllByRole('button', {name: 'Next'})[0];
      userEvent.dblClick(buttonNext);

      const orderSummaryTitle = screen.getByText(/Order summary/i);
  
      expect(orderSummaryTitle).toBeInTheDocument();
    });
  });
});
