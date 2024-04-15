import React, { FC } from 'react';
import { Box, Grid, Typography, Theme, styled, Container } from '@mui/material';
import logicrental from '../../../../../public/logicRental.svg';
import injazrental from '../../../../../public/injazrental.svg';
import alghaza from '../../../../../public/alGhazaltransport.svg';
import Partner from './Partner';

const clients = [
  { id: 1, name: 'Logic Rental', logo: logicrental },
  { id: 2, name: 'Injaz Rental', logo: injazrental },
  { id: 3, name: 'AL Ghazal Transport', logo: alghaza },
];
const ClientAndPartner = styled(Box)(({ theme }) => ({
  display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "30px 0px",
}));
export interface ClientsAndPartnersProps {
  text?: string;
}

const ClientsAndPartners: FC<ClientsAndPartnersProps> = (props) => {
  

  return (
    <ClientAndPartner >
      <Typography variant="h2" color="initial" gutterBottom>
        Clients & Partners
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {clients.map(({ id, name, logo }) => (
            <Grid key={id} item xs={12} sm={3} md={3} lg={3} xl={3}>
              <Partner logo={logo} name={name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ClientAndPartner>
  );
};

export default ClientsAndPartners;
