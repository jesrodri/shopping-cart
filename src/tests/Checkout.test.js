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

      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);

      const paymentMethodTitle = screen.getByRole('heading', {name: 'Payment method'});
  
      expect(paymentMethodTitle).toBeInTheDocument();
    });
  });

  describe('when the user clicks the NEXT button twice', () => {
    it('renders the Order summary title', () => {
      render(<Checkout />);
      
      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);
      userEvent.click(buttonNext);

      const orderSummaryTitle = screen.getByRole('heading', {name: 'Order summary'});
  
      expect(orderSummaryTitle).toBeInTheDocument();
    });
  });
});
