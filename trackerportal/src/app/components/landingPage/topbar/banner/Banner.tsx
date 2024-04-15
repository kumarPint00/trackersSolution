import React, { FC } from "react";
import { Box, styled } from "@mui/material";

import Image from "next/image";
import banner from "../../../../../../public/banner1.svg";

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "6rem",
}));
export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {
  return (
    <MainBox>
      <Image
        src={banner}
        alt="banner1"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </MainBox>
  );
};

export default Banner;