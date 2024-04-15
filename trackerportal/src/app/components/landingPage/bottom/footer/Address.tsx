import React, { FC } from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import HomeIcon from "@mui/icons-material/Home";

const MainBox = styled(Box)(({ theme }) => ({
  marginTop: "6rem",
}));

const AddressIconsGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));

const AddressTextTypography = styled(Typography)(({ theme }) => ({
  margin: "0px",
  paddingLeft: "8px",
}));
export interface AddressProps {
  text?: string;
}

const Address: FC<AddressProps> = (props) => {
  return (
    <MainBox>
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        color="white"
      >
        <Grid item xs={12} md={2}>
          <Typography variant="h4" color="white" gutterBottom>
            Address
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" color="white" gutterBottom>
            United Arab Emirates Termani Arts offices, 5th floor- office no. 554
            Business Bay, Dubai, UAE
          </Typography>
        </Grid>
        <AddressIconsGrid item xs={12} md={2}>
          <PhoneIcon />
          <AddressTextTypography variant="body1" color="white" gutterBottom>
            +971 522142913
          </AddressTextTypography>
        </AddressIconsGrid>
        <AddressIconsGrid item xs={12} md={2}>
          <PhoneForwardedIcon />
          <AddressTextTypography variant="body1" color="white" gutterBottom>
            (04)8343814
          </AddressTextTypography>
        </AddressIconsGrid>
        <AddressIconsGrid item xs={12} md={2}>
          <HomeIcon />
          <AddressTextTypography variant="body1" color="white" gutterBottom>
            info@trackers.ae
          </AddressTextTypography>
        </AddressIconsGrid>
      </Grid>
    </MainBox>
  );
};
export default Address;