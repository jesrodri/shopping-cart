import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Checkout from '../checkout';

describe('<Checkout />', () => {
  const form = {
    firstName: 'Halan',
    lastName: 'Pinheiro',
    address1: 'Rua do Halan',
    address2: '42',
    zip: '424242',
    city: 'Halanville',
    country: 'Albania',
    state: 'Fier',
    cardName: 'Halan Pinheiro',
    cardNumber: '567891234',
    expDate: '11/22',
    cvv: '123'
  };

  const cart = [{}, {}];

  describe('when it renders the checkout page', () => {
    it('has the Checkout title', () => {
      render(<Checkout cart={cart} />);
      const checkoutTitle = screen.getByRole( 'heading', { name: 'Checkout' });
  
      expect(checkoutTitle).toBeInTheDocument();
    });
  
    it('has the Shipping address title', () => {
      render(<Checkout cart={cart} />);
      const shippingAddressTitle = screen.getByRole( 'heading', { name: 'Shipping address' });
  
      expect(shippingAddressTitle).toBeInTheDocument();
    });
  });

  describe('when the user fills the required fields and clicks the NEXT button once', () => {
    it('renders the Payment method title', () => {
      render(<Checkout cart={cart} />);

      userEvent.type(screen.getByRole('textbox', {name: 'First name'}), form.firstName);
      userEvent.type(screen.getByRole('textbox', {name: 'Last name'}), form.lastName);
      userEvent.type(screen.getByRole('textbox', {name: 'Address line 1'}), form.address1);
      userEvent.type(screen.getByRole('textbox', {name: 'Zip / Postal code'}), form.zip);
      userEvent.type(screen.getByRole('textbox', {name: 'City'}), form.city);
      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      userEvent.click(screen.getByText(form.country));

      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);

      const paymentMethodTitle = screen.getByRole('heading', {name: 'Payment method'});
  
      expect(paymentMethodTitle).toBeInTheDocument();
    });
  });

  describe('when the user fills the required fields and clicks the NEXT button twice', () => {
    it('renders the Order summary title', () => {
      render(<Checkout cart={cart} />);

      userEvent.type(screen.getByRole('textbox', {name: 'First name'}), form.firstName);
      userEvent.type(screen.getByRole('textbox', {name: 'Last name'}), form.lastName);
      userEvent.type(screen.getByRole('textbox', {name: 'Address line 1'}), form.address1);
      userEvent.type(screen.getByRole('textbox', {name: 'Zip / Postal code'}), form.zip);
      userEvent.type(screen.getByRole('textbox', {name: 'City'}), form.city);
      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      userEvent.click(screen.getByText(form.country));
      
      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);

      userEvent.type(screen.getByRole('textbox', {name: 'Name on card'}), form.cardName);
      userEvent.type(screen.getByRole('textbox', {name: 'Card number'}), form.cardNumber);
      userEvent.type(screen.getByRole('textbox', {name: 'Expiry date'}), form.expDate);
      userEvent.type(screen.getByRole('textbox', {name: 'CVV'}), form.cvv);
      userEvent.click(buttonNext);

      const orderSummaryTitle = screen.getByRole('heading', {name: 'Order summary'});
  
      expect(orderSummaryTitle).toBeInTheDocument();
    });
  });

  describe('when the user fills the required fields, clicks the NEXT button once and clicks the BACK button', () => {
    it('keeps the typed values on screen', () => {
      render(<Checkout cart={cart} />);

      userEvent.type(screen.getByRole('textbox', {name: 'First name'}), form.firstName);
      userEvent.type(screen.getByRole('textbox', {name: 'Last name'}), form.lastName);
      userEvent.type(screen.getByRole('textbox', {name: 'Address line 1'}), form.address1);
      userEvent.type(screen.getByRole('textbox', {name: 'Zip / Postal code'}), form.zip);
      userEvent.type(screen.getByRole('textbox', {name: 'City'}), form.city);
      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      userEvent.click(screen.getByText(form.country));

      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);

      const buttonBack = screen.getByRole('button', {name: 'Back'});
      userEvent.click(buttonBack);

      expect(screen.getByDisplayValue(form.firstName)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.lastName)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.address1)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.zip)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.country)).toBeInTheDocument();
    });
  });

  describe('when the user fills the required fields, clicks the NEXT button twice and clicks the BACK button', () => {
    it('keeps the typed values on screen', () => {
      render(<Checkout cart={cart} />);

      userEvent.type(screen.getByRole('textbox', {name: 'First name'}), form.firstName);
      userEvent.type(screen.getByRole('textbox', {name: 'Last name'}), form.lastName);
      userEvent.type(screen.getByRole('textbox', {name: 'Address line 1'}), form.address1);
      userEvent.type(screen.getByRole('textbox', {name: 'Zip / Postal code'}), form.zip);
      userEvent.type(screen.getByRole('textbox', {name: 'City'}), form.city);
      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      userEvent.click(screen.getByText(form.country));

      const buttonNext = screen.getByRole('button', {name: 'Next'});
      userEvent.click(buttonNext);

      userEvent.type(screen.getByRole('textbox', {name: 'Name on card'}), form.cardName);
      userEvent.type(screen.getByRole('textbox', {name: 'Card number'}), form.cardNumber);
      userEvent.type(screen.getByRole('textbox', {name: 'Expiry date'}), form.expDate);
      userEvent.type(screen.getByRole('textbox', {name: 'CVV'}), form.cvv);
      userEvent.click(buttonNext);

      const buttonBack = screen.getByRole('button', {name: 'Back'});
      userEvent.click(buttonBack);

      expect(screen.getByDisplayValue(form.cardName)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.cardNumber)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.expDate)).toBeInTheDocument();
      expect(screen.getByDisplayValue(form.cvv)).toBeInTheDocument();
    });
  });
});
