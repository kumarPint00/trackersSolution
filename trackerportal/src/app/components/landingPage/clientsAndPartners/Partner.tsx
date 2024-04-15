import React, { FC } from "react";
import { Box, styled, Theme } from "@mui/material";

import Image from "next/image";

export interface PartnerProps {
  name?: string;
  logo?: string;
}
const BoxTop = styled(Box)(({ theme }) => ({
  background: "#EFF5FF",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100px",
  "&:hover": {
    background: "#aeb4c4",
  },
}));

const Partner: FC<PartnerProps> = ({ name, logo }) => {
  return (
    <div>
      <BoxTop>
        <Image src={logo!} alt={name!} height={150} width={180} />
      </BoxTop>
    </div>
  );
};

export default Partner;
