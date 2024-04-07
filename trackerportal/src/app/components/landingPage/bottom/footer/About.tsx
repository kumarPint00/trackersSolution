import React, { FC } from "react";
import { Box, Typography, Theme, styled } from "@mui/material";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";


const TopBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  color: "black",
  width: "100%",
  maxWidth: "600px", 
}))
const ImageContainer = styled(Image)(({ theme }) => ({
  color:'white'
}))

const TypographyText = styled(Typography)(({ theme }) => ({
  color:'white'
}))
export interface AboutProps {
  text?: string;
}

const About: FC<AboutProps> = (props) => {

  return (
    <TopBox
    >
      <ImageContainer
        src={logo}
        alt="logo"
        height={100}
        width={100}
      />
      <TypographyText
        variant="body1"
        color="initial"
      >
        TRACKERS is an all-in-one fleet performance management solution.
        Dedicated to clients managing fleets in UAE and Saudi Arabia in various
        sectors including Refrigerated Cargo, Ready Mix Industry, Waste
        Management, School Transport Solutions, AI Driver Evaluation Simulator,
        and Fuel Monitoring. We also offer Web designing, App development, and
        Software development services. Our advanced web solution provides full
        visibility to manage your fleet and supports multiple Telematics Devices
        including advanced OBD-GPS devices.
      </TypographyText>
    </TopBox>
  );
};

export default About;
