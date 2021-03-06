import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, onChange, form, cart) {
  switch (step) {
    case 0:
      return <AddressForm onChange={onChange} form={form} />;
    case 1:
      return <PaymentForm onChange={onChange} form={form} />;
    case 2:
      return <Review form={form} cart={cart} />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout({ cart }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zip: '',
    city: '',
    country: '',
    state: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  const [valid, setValid] = React.useState(false);

  const formRef = React.useRef(null);

  React.useEffect(() => {
    checkValidity();
  }, [form, activeStep]);
  
  const checkValidity = () => {
    setValid(formRef.current.checkValidity());
  };
  
  const handleNext = (event) => {
    event.preventDefault();
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const onChange = (event) => {
    setForm(formState => ({ ...formState, [event.target.name]: event.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form ref={formRef} component="form" noValidate onSubmit={handleNext}>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order has
                    shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                    {getStepContent(activeStep, onChange, form, cart)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                        type="submit"
                        disabled={!valid}
                        >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                      </Button>
                    </Box>
                </React.Fragment>
            )}
            </React.Fragment>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
