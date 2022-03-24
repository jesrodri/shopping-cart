import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Checkout from '../checkout';

describe('<Checkout />', () => {
  
  let form, cart;

  beforeEach(() => {
    form = {
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
    }

    cart = [
      {
        name: 'Banana',
        description: 'Sweet, yellow and delicious banana, the real Farm to Table one!',
        price: 1.99
      },
      {
        name: 'Cantaloupe',
        description: 'Juicy, orange and sweet, best cantaloupe melon in town.',
        price: 3.99
      }
    ]
  });

  describe('when in the first step - Shipping address', () => {
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

    describe('when the user fills the required fields and clicks the NEXT button', () => {
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

    describe('when the user doesnt fill all the required fields', () => {
      it('keeps the NEXT button disabled', () => {
        render(<Checkout cart={cart} />);
  
        userEvent.type(screen.getByRole('textbox', {name: 'First name'}), form.firstName);
        userEvent.type(screen.getByRole('textbox', {name: 'Address line 1'}), form.address1);
        userEvent.type(screen.getByRole('textbox', {name: 'Zip / Postal code'}), form.zip);
        userEvent.type(screen.getByRole('textbox', {name: 'City'}), form.city);
        const countrySelectList = screen.getByLabelText('Country *');
        userEvent.click(countrySelectList);
        userEvent.click(screen.getByText(form.country));
  
        const buttonNext = screen.getByRole('button', {name: 'Next'});

        expect(buttonNext).toBeDisabled();
      });
    });
  });

  describe('when in the second step - Payment details', () => {
    beforeEach(() => {
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
    });

    describe('when the user fills the required fields and clicks the NEXT button', () => {
      it('renders the Order summary title', () => {
        userEvent.type(screen.getByRole('textbox', {name: 'Name on card'}), form.cardName);
        userEvent.type(screen.getByRole('textbox', {name: 'Card number'}), form.cardNumber);
        userEvent.type(screen.getByRole('textbox', {name: 'Expiry date'}), form.expDate);
        userEvent.type(screen.getByRole('textbox', {name: 'CVV'}), form.cvv);

        const buttonNext = screen.getByRole('button', {name: 'Next'});
        userEvent.click(buttonNext);
  
        const orderSummaryTitle = screen.getByRole('heading', {name: 'Order summary'});
    
        expect(orderSummaryTitle).toBeInTheDocument();
      });
    });
  
    describe('when the user doesnt fill the required fields', () => {
      it('keeps the NEXT button disabled', () => {  
        userEvent.type(screen.getByRole('textbox', {name: 'Name on card'}), form.cardName);
        userEvent.type(screen.getByRole('textbox', {name: 'Card number'}), form.cardNumber);
        userEvent.type(screen.getByRole('textbox', {name: 'CVV'}), form.cvv);

        const buttonNext = screen.getByRole('button', {name: 'Next'});
    
        expect(buttonNext).toBeDisabled();
      });
    });
  
    describe('when the user fills the required fields, clicks the NEXT button once and clicks the BACK button', () => {
      it('keeps the typed values on screen', () => {  
        const buttonBack = screen.getByRole('button', {name: 'Back'});
        userEvent.click(buttonBack);
  
        expect(screen.getByDisplayValue(form.firstName)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.lastName)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.address1)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.zip)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.country)).toBeInTheDocument();
      });
    });
  });

  describe('when in the third step - Review your order', () => {
    beforeEach(() => {
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
    });

    it('renders the products on the review page', () => {
      const testProduct = cart[0];
      const testProduct2 = cart[1];

      const productName = screen.getByText(testProduct.name);
      const productDescription = screen.getByText(testProduct.description);
      const productPrice = screen.getByText(testProduct.price);

      const productName2 = screen.getByText(testProduct2.name);
      const productDescription2 = screen.getByText(testProduct2.description);
      const productPrice2 = screen.getByText(testProduct2.price);

      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();

      expect(productName2).toBeInTheDocument();
      expect(productDescription2).toBeInTheDocument();
      expect(productPrice2).toBeInTheDocument();
    });

    it('renders the correct shipping information on the review page', () => {
      const name = screen.getAllByText(/halan pinheiro/i)[0];
      const address = screen.getByText(/rua do halan, , halanville, , 424242, albania/i);
  
      expect(name).toBeInTheDocument();
      expect(address).toBeInTheDocument();
    });

    it('renders the correct payment information on the review page', () => {
      const cardType = screen.getByText(/mastercard/i);
      const cardNumber = screen.getByText(/xxxx\-xxxx\-xxxx\-1234/i);
      const expDate = screen.getByText(/11\/22/i);
  
      expect(cardType).toBeInTheDocument();
      expect(cardNumber).toBeInTheDocument();
      expect(expDate).toBeInTheDocument();
    });
  
    describe('when the user clicks the BACK button', () => {
      it('keeps the typed values on screen', () => {  
        const buttonBack = screen.getByRole('button', {name: 'Back'});
        userEvent.click(buttonBack);
  
        expect(screen.getByDisplayValue(form.cardName)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.cardNumber)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.expDate)).toBeInTheDocument();
        expect(screen.getByDisplayValue(form.cvv)).toBeInTheDocument();
        });
    });
  });
});
