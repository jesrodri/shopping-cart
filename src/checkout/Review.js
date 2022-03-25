import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({form, cart}) {
  console.log(cart);
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
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              ${getTotal(cart)}
            </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{form.firstName} {form.lastName}</Typography>
          <Typography gutterBottom>{[form.address1, form.address2, form.city, form.state, form.zip, form.country].join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{getcardType(form.cardNumber)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{form.cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>xxxx-xxxx-xxxx-{form.cardNumber.slice(-4)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{form.expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
