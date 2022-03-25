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
});
