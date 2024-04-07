import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
  
import Image from "next/image";
import banner from '../../../../../../public/banner1.svg'



export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {

  return (
    <Box
      width="100%" 
      display="flex"
      justifyContent="center" 
      alignItems="center"
      margin={0} 
      padding={0}  
    >
      <Image
        src={banner}
        alt="banner1"
        layout="fill" 
      />
    </Box>
  );
};

export default Banner;
