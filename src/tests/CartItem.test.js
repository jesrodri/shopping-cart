import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../components/CartItem';
import '@testing-library/jest-dom';

describe('<CartItem />', () => {
  it('renders the item name', () => {
    const testItem = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
    const testRemoveFromCart = jest.fn();

    render(<CartItem item={testItem} removeFromCart={testRemoveFromCart}/>);
    const itemName = screen.getByText(testItem.name);

    expect(itemName).toBeInTheDocument();
  });

  it('renders the item description', () => {
    const testItem = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
    const testRemoveFromCart = jest.fn();

    render(<CartItem item={testItem} removeFromCart={testRemoveFromCart}/>);
    const itemDescription = screen.getByText(testItem.description);

    expect(itemDescription).toBeInTheDocument();
  });

  it('calls removeFromCart function once', () => {
    const testItem = { name: 'Blueberry', description: 'Ready for you to make the best muffins.' };
    const testRemoveFromCart = jest.fn();

    render(<CartItem item={testItem} removeFromCart={testRemoveFromCart}/>);
    const buttonRemoveFromCart = screen.getByRole('button', {name: 'Remove from cart'});
    userEvent.click(buttonRemoveFromCart);

    expect(testRemoveFromCart).toHaveBeenCalledTimes(1);
  });
});
