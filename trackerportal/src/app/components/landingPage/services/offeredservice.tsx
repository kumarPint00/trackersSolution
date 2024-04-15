import React, { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

const BoxTop = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to right, #D9D9D9, #D9D9D0)",
  borderRadius: "8px",
  color: "white",
  padding: "20px",
  margin: "20px 0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  height: "200px",
  transition: "0.3s",
  "&:hover": {
    background: "#014189",
  },
  "&:hover $typography_h3": {
    color: "white",
  },
}));

const TypographyH3 = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
}));

const TypographyBody1 = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
}));
export interface OfferedserviceProps {
  main?: string;
  img?: string;
  body?: string;
}

const Offeredservice: FC<OfferedserviceProps> = ({ main, img, body }) => {
  return (
    <BoxTop>
      <Image src={img!} height={50} width={50} alt="webdev" />
      <TypographyH3 variant="h3" color="initial" align="center" gutterBottom>
        {main}
      </TypographyH3>
      <TypographyBody1 variant="body1" color="initial" align="center">
        {body}
      </TypographyBody1>
    </BoxTop>
  );
};

export default Offeredservice;
