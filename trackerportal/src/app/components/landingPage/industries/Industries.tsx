import React, { FC } from 'react';
import { Box, Grid, Typography, Theme, styled } from '@mui/material';
 
import Industry from './Industry';
import industriesBackground from '../../../../../public/inductries background.jpeg'



const Boxtop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px', 
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundImage: `url(${industriesBackground})`,
  backgroundSize: 'cover', 
  backgroundColor: '#f9f9f9',
  maxWidth: '1000px', 
  margin: '0 auto', 
}))
export interface IndustriesProps {
  text?: string;
}

const services = [
  { number: '01', service: 'Frigerated Cargo Industries', logo: '' },
  { number: '02', service: 'Ready Mix Industry', logo: '' },
  { number: '03', service: 'Waste Management', logo: '' },
  { number: '04', service: 'School Transport Solutions', logo: '' },
  { number: '05', service: 'AI Driver Evaluation Simulator', logo: '' },
  { number: '06', service: 'FUEL MONITORING', logo: '' }
]

const Industries: FC<IndustriesProps> = (props) => {

  return (
    <Boxtop>
      <Typography variant="h2" color="initial" sx={{ marginBottom: '20px' }}>
        Industries We Serve
      </Typography>
      <Grid
        container
        spacing={2} // Adjusted spacing between items
        justifyContent="center"
        alignItems="stretch"
      >
        {services.map(({ number, service, logo }) => (
          <Grid key={number} item xs={12} sm={6} md={4} lg={3}>
            <Industry count={number} item={service} image='' />
          </Grid>
        ))}
      </Grid>
    </Boxtop>
  );
};

export default Industries;
