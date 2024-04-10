import React, { FC } from "react";
import { Box, styled, Theme, Typography } from "@mui/material";
  
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
}))
export interface OfferedserviceProps {
  main?: string;
  img?: string;
  body?: string;
}

const Offeredservice: FC<OfferedserviceProps> = ({ main, img, body }) => {

  return (
    <BoxTop>
      <Image src={img!} height={50} width={50} alt="webdev" />
      <Typography variant="h3" color="initial" align="center" gutterBottom>
        {main}
      </Typography>
      <Typography variant="body1" color="initial" align="center">
        {body}
      </Typography>
    </BoxTop>
  );
};

export default Offeredservice;
