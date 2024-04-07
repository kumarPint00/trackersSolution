import React, { FC } from 'react';
import { Box, Grid, Typography, Theme, CSSObject, styled } from '@mui/material';
import Form from './Form';
 
import contactusBackground from '../../../../../public/contactUsbackground.svg'
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


const BoxTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  // marginTop: { xs: '100px', md: '400px' },
}))

const GridContainer = styled(Grid)(({ theme }) => ({
  
  background: `url(${contactusBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
  color: 'black',
  padding: '20px',
  margin: '20px',
  width: '100%',
  maxWidth: '500px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  textAlign: 'center', 
}))

const BoxText = styled(Box)(({ theme }) => ({
  
  background: `url(${contactusBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
  color: 'black',
  padding: '20px',
  margin: '20px',
  width: '100%',
  maxWidth: '500px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  textAlign: 'center', 
}))
export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {

  return (
    <BoxTop>
      <Typography variant="h2" color="initial">
        It's Very Easy To Contact Us
      </Typography>
      <Grid
        container
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        alignContent="stretch"
        wrap="wrap"
      >
        <GridContainer item xs={12} md={6} >
          <Form />
        </GridContainer>
        <Grid item xs={12} md={6}>
          <BoxText>
          <MapIcon/>
          <Typography variant="h5" sx={{marginBottom: '80px'}} gutterBottom>
              Our Information
            </Typography>
            <Typography sx={{marginBottom: '80px'}}>
              <strong>Address:</strong> 123 Main Street, Cityville
            </Typography>
            <PhoneIcon/>
            <Typography sx={{marginBottom: '80px'}}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <MailIcon/>
            <Typography sx={{marginBottom: '80px'}}>
              <strong>Email:</strong> info@example.com
            </Typography>
          </BoxText>
        </Grid>
      </Grid>
    </BoxTop>
  );
};

export default ContactForm;
