import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import countriesAndStates from '../logic/countries.json';

export default function AddressForm({onChange, onBlur, handleSubmit, form, formRef}) {

  const selectedCountryObject = countriesAndStates.countries.find(country => country.country === form.country);
  const selectedCountryStates = selectedCountryObject ? selectedCountryObject.states : [];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3} ref={formRef} component="form" noValidate onSubmit={handleSubmit}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={form.firstName || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={form.lastName || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={form.address1 || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={form.address2 || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={form.zip || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={form.city || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="country-label">Country *</InputLabel>
          <Select
            required
            labelId="country-label"
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            value={form.country}
            onChange={onChange}
            onBlur={onBlur}
            >
            {countriesAndStates.countries.map(country => (
              <MenuItem key={country.country} value={country.country}>{country.country}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="state-label">State/Province/Region</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={form.state}
            onChange={onChange}
            >
            {selectedCountryStates.map(state => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
