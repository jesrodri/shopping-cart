import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../components/Product';
import '@testing-library/jest-dom';

describe('<Product />', () => {
  it('renders the product name', () => {
    const testProduct = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
    const testAddToCart = jest.fn();

    render(<Product product={testProduct} addToCart={testAddToCart}/>);
    const productName = screen.getByText(testProduct.name);

    expect(productName).toBeInTheDocument();
  });

  it('renders the product description', () => {
    const testProduct = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
    const testAddToCart = jest.fn();

    render(<Product product={testProduct} addToCart={testAddToCart}/>);
    const productDescription = screen.getByText(testProduct.description);

    expect(productDescription).toBeInTheDocument();
  });

  describe('when the user clicks the Add to cart button', () => {
    it('calls addToCart function once with the selected product', () => {
      const testProduct = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
      const testAddToCart = jest.fn();
  
      render(<Product product={testProduct} addToCart={testAddToCart}/>);
      const buttonAddToCart = screen.getByRole('button', {name: 'Add to cart'});
      userEvent.click(buttonAddToCart);
  
      expect(testAddToCart).toHaveBeenNthCalledWith(1, testProduct);
    });
  });
});
