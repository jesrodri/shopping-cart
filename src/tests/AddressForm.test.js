import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddressForm from '../checkout/AddressForm';

describe('<AddressForm />', () => {

  const onChange = jest.fn();
  const handleSubmit = jest.fn();
  const form = {country: '', state: ''};

  describe('when it renders the Address Form', () => {
    it('should display the right countries when the country select list is clicked', () => {
      render(<AddressForm onChange={onChange} handleSubmit={handleSubmit} form={form} />);

      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
  
      expect(screen.getByText('Afghanistan')).toBeInTheDocument();
      expect(screen.getByText('Albania')).toBeInTheDocument();
      expect(screen.getByText('Algeria')).toBeInTheDocument();
    });
  });

  describe('when the user selects a country', () => {
    it('should call onChange function', () => {
      render(<AddressForm onChange={onChange} handleSubmit={handleSubmit} form={form} />);

      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      const afghanistan = screen.getByText('Afghanistan');
      userEvent.click(afghanistan);

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
