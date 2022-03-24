import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Store from '../components/Store';
import { PRODUCTS } from "../logic/constants";

describe('<Store />', () => {

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

  describe('when it renders the products list', () => {
    it('has the product name', () => {
      const testProduct = PRODUCTS[0];
  
      render(<Store initialComponent="products"/>);
      const productName = screen.getByText(testProduct.name);
  
      expect(productName).toBeInTheDocument();
    });
  
    it('has the product description', () => {
      const testProduct = PRODUCTS[0];
  
      render(<Store initialComponent="products"/>);
      const productDescription = screen.getByText(testProduct.description);
  
      expect(productDescription).toBeInTheDocument();
    });

    it('has the product price', () => {
      const testProduct = PRODUCTS[0];
  
      render(<Store initialComponent="products"/>);
      const productPrice = screen.getByText('$ ' + testProduct.price);
  
      expect(productPrice).toBeInTheDocument();
    });
  });

  describe('when the user adds a product to the cart', () => {
    it('renders the product in the Cart page', () => {
      render(<Store initialComponent={'products'}/>);

      const buttonAddToCart = screen.getAllByRole('button', {name: 'Add to cart'})[0];
      userEvent.click(buttonAddToCart);

      const buttonCart = screen.getAllByRole('button', {name: 'Cart'})[0];
      userEvent.click(buttonCart);
      const buttonRemoveFromCart = screen.getAllByRole('button', {name: 'Remove from cart'})[0];

      const productName = screen.getByText('Banana');
      const productDescription = screen.getByText('Sweet, yellow and delicious banana, the real Farm to Table one!');

      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
      expect(buttonRemoveFromCart).toBeInTheDocument();
    });
  });

  describe('when the user removes a product from the cart', () => {
    it('removes the product from the Cart page', () => {
      render(<Store initialComponent="products"/>);

      const buttonAddToCart = screen.getAllByRole('button', {name: 'Add to cart'})[0];
      userEvent.click(buttonAddToCart);

      const buttonCart = screen.getAllByRole('button', {name: 'Cart'})[0];
      userEvent.click(buttonCart);

      const buttonRemoveFromCart = screen.getAllByRole('button', {name: 'Remove from cart'})[0];
      userEvent.click(buttonRemoveFromCart);

      const itemName = screen.queryByText('Banana');
      const itemDescription = screen.queryByText('Sweet, yellow and delicious banana, the real Farm to Table one!');

      expect(itemName).not.toBeInTheDocument();
      expect(itemDescription).not.toBeInTheDocument();
      expect(buttonRemoveFromCart).not.toBeInTheDocument();
    });
  });

  describe('when the user adds products to the cart and proceed to checkout filling all the required fields', () => {
    beforeEach(() => {
      render(<Store initialComponent={'products'}/>);
      
      const buttonAddToCart = screen.getAllByRole('button', {name: 'Add to cart'})[0];
      const buttonAddToCart2 = screen.getAllByRole('button', {name: 'Add to cart'})[1];
      userEvent.click(buttonAddToCart);
      userEvent.click(buttonAddToCart2);
      
      const buttonCart = screen.getAllByRole('button', {name: 'Cart'})[0];
      userEvent.click(buttonCart);
      
      const buttonCheckout = screen.getAllByRole('button', {name: 'Checkout'})[0];
      userEvent.click(buttonCheckout);
      
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
      const testProduct = PRODUCTS[0];
      const testProduct2 = PRODUCTS[1];

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
  });
});
