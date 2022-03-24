import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddressForm from '../checkout';

describe('<AddressForm />', () => {
  describe('when it renders the Address Form', () => {
    it('should display the right countries when the country select list is clicked', () => {
      render(<AddressForm />);

      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
  
      expect(screen.getByText('Afghanistan')).toBeInTheDocument();
      expect(screen.getByText('Albania')).toBeInTheDocument();
      expect(screen.getByText('Algeria')).toBeInTheDocument();
    });
  });

  describe('when the user selects a country', () => {
    it('should display the right list of states when the state select list is clicked', () => {
      render(<AddressForm />);

      const countrySelectList = screen.getByLabelText('Country *');
      userEvent.click(countrySelectList);
      const afghanistan = screen.getByText('Afghanistan');
      userEvent.click(afghanistan);

      const statesSelectList = screen.getByLabelText('State/Province/Region');
      userEvent.click(statesSelectList);

      expect(screen.getByText('Badakhshan')).toBeInTheDocument();
      expect(screen.getByText('Badghis')).toBeInTheDocument();
      expect(screen.getByText('Baghlan')).toBeInTheDocument();
    });
  });
});
