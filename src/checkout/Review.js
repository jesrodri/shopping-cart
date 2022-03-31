import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Text from '../components/Text';
import Input from '../components/Input';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';
import css from '@styled-system/css'

export default function Review({form, cart}) {
  const getTotal = (cart) => {

    const initial = 0;
    const total = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price, initial
    );
    return total;
  }
  
  const getcardType = (number) => {
    switch (number[0]) {
      case '3':
        return 'American Express';
      case '4':
        return 'Visa';
      case '5':
        return 'Mastercard';
      case '6':
        return 'Discover';
      default:
        return 'Unknown';
    }
  }

  return (
    <React.Fragment>
      <Text variant="h3" gutterBottom>
        Order summary
      </Text>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Text variant="body2">{product.price}</Text>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
            <Text variant="h4" css={css({fontWeight: 700})}>
              ${getTotal(cart)}
            </Text>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Text variant="h3" gutterBottom css={css({marginTop: theme.space[4]})}>
            Shipping
          </Text>
          <Text gutterBottom>{form.firstName} {form.lastName}</Text>
          <Text gutterBottom>{[form.address1, form.address2, form.city, form.state, form.zip, form.country].join(', ')}</Text>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Text variant="h3" gutterBottom css={css({marginTop: theme.space[4]})}>
            Payment details
          </Text>
          <Grid container>
            <Grid item xs={6}>
              <Text gutterBottom>Card type</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>{getcardType(form.cardNumber)}</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>Card holder</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>{form.cardName}</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>Card number</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>xxxx-xxxx-xxxx-{form.cardNumber.slice(-4)}</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>Expiry date</Text>
            </Grid>
            <Grid item xs={6}>
              <Text gutterBottom>{form.expDate}</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
