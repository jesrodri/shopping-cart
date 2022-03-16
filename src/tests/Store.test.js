import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../components/App';
import Store from '../components/Store';
import { PRODUCTS } from "../logic/constants";

describe('<Store />', () => {
  describe('when it renders the products list', () => {
    it('renders the product name', () => {
      const testProduct = PRODUCTS[0];
  
      render(<Store componentToRender={'products'}/>);
      const productName = screen.getByText(testProduct.name);
  
      expect(productName).toBeInTheDocument();
    });
  
    it('renders the product description', () => {
      const testProduct = PRODUCTS[0];
  
      render(<Store componentToRender={'products'}/>);
      const productDescription = screen.getByText(testProduct.description);
  
      expect(productDescription).toBeInTheDocument();
    });
  });

  describe('when the user adds a product to the cart', () => {
    it('renders the product in the Cart page', () => {
      render(<App />);
      render(<Store componentToRender={'products'}/>);

      const buttonAddToCart = screen.getAllByRole('button', {name: 'Add to cart'})[0];
      userEvent.click(buttonAddToCart);

      const buttonCart = screen.getByRole('button', {name: 'Cart'});
      userEvent.click(buttonCart);

      const buttonRemoveFromCart = screen.getAllByRole('button', {name: 'Remove from cart'})[0];

      expect(buttonRemoveFromCart).toBeInTheDocument();
    });
  });

  describe('when the user removes a product from the cart', () => {
    it('removes the product from the Cart page', () => {
      render(<App />);
      render(<Store componentToRender={'products'}/>);

      const buttonAddToCart = screen.getAllByRole('button', {name: 'Add to cart'})[0];
      userEvent.click(buttonAddToCart);

      const buttonCart = screen.getByRole('button', {name: 'Cart'});
      userEvent.click(buttonCart);

      const buttonRemoveFromCart = screen.getAllByRole('button', {name: 'Remove from cart'})[0];
      userEvent.click(buttonRemoveFromCart);

      expect(buttonRemoveFromCart).not.toBeInTheDocument();
    });
  });
});
