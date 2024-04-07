import React, { FC } from "react";
import { Box, Grid, styled, Theme, Typography } from "@mui/material";
import About from "./About";
import Company from "./Company";
import Support from "./Support";
import Address from "./Address";

const BoxStyled = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  color: "black",
  height: "auto",
  padding: "10px", // Add padding for content spacing
  textAlign: "center", // Center text
}))
const BoxTop = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "100%",
  borderRadius: "10px",
  color:'white',
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  backgroundColor: 'black',
}))

export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {

  return (
    <BoxTop >
    
      <Grid
        container
        spacing={3} // Increase spacing between sections
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} md={3}>
          <BoxStyled >
            <About />
          </BoxStyled>
        </Grid>
        <Grid item xs={12} md={3}>
          <BoxStyled >
            <Company />
          </BoxStyled>
        </Grid>
        <Grid item xs={12} md={3}>
          <BoxStyled >
            <Support />
          </BoxStyled>
        </Grid>
        <Grid item xs={12} md={3}>
          <BoxStyled >
            <Address />
          </BoxStyled>
        </Grid>
      </Grid>
    </BoxTop>
  );
};

export default Footer;
