import React, { FC } from 'react';
import { Box, Grid, Typography, Theme, styled } from '@mui/material';
 
import logicrental from '../../../../../public/logicRental.svg';
import injazrental from '../../../../../public/injazrental.svg';
import alghaza from '../../../../../public/alGhazaltransport.svg';
import Partner from './Partner';



const clients = [
  { id: 1, name: 'Logic Rental', logo: logicrental },
  { id: 2, name: 'Injaz Rental', logo: injazrental },
  { id: 3, name: 'AL Ghazal Transport', logo: alghaza },
];
const BoxTop = styled(Box)(({ theme }) => ({
  display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}))
export interface ClientsAndPartnersProps {
  text?: string;
}

const ClientsAndPartners: FC<ClientsAndPartnersProps> = (props) => {
  

  return (
    <BoxTop >
      <Typography variant="h2" color="initial" gutterBottom>
        Clients & Partners
      </Typography>
      <Grid
        container
        justifyContent="center"
      >
        {clients.map(({ id, name, logo }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
            <Partner logo={logo} name={name} />
          </Grid>
        ))}
      </Grid>
    </BoxTop>
  );
};

export default ClientsAndPartners;
