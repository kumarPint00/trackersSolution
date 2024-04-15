import React, { FC } from "react";
import { Box, Container, Grid, styled, Theme, Typography } from "@mui/material";
import About from "./About";
import Company from "./Company";
import Support from "./Support";
import Address from "./Address";
import CopyRights from "../bottombar/CopyRights";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  backgroundImage: `url("/world map 1@2x.png")`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
}));
const SectionBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  color: "black",
  height: "auto",
  padding: "10px", // Add padding for content spacing
  textAlign: "center", // Center text
}));
const FooterBackgroundGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url("/world map 1@2x.png")`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
}));
export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {
  console.log("git check")
  return (
    <MainBox>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3} // Increase spacing between sections
          // direction="row"
          // justifyContent="center"
        >
          <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
            <SectionBox>
              <About />
            </SectionBox>
          </Grid>
          {/* <FooterBackgroundGrid item xs={12} md={9} sm={9} lg={9} xl={9}> */}
            {/* <Grid container spacing={3}> */}
              <Grid item xs={12} md={3}>
                <SectionBox>
                  <Company />
                </SectionBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <SectionBox>
                  <Support />
                </SectionBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <SectionBox>
                  <Address />
                </SectionBox>
              </Grid>
            </Grid>
          {/* </FooterBackgroundGrid> */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CopyRights />
          </Grid>
        {/* </Grid> */}
      </Container>
    </MainBox>
  );
};

export default Footer;
