import React, { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
export interface IndustryProps {
  item?: string | number;
  count?: string;
  image?: string;
}

const TopBpx = styled(Box)(({ theme }) => ({
  background: "white",
  borderRadius: "8px",
  color: "black",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "600px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "303px",
  marginTop: 4,
}));

const ImageBox = styled(Box)(({ theme }) => ({
  textAlign: "right",
  flex: "1",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
}));

const IndustryImage = styled(Image)(({ theme }) => ({
  padding: "10px",
  background: "black",
}));

const TypographyH5 = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  height: "150px",
  padding: "20px 20px",
  fontWeight: "600",
}));

const TypographyCount = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: "2.725rem",
  padding: "20px 20px",
  color: "#caccd3",
}));

const Industry: FC<IndustryProps> = ({ item, count, image }) => {
  return (
    <TopBpx>
      <Box flex="1">
        <TypographyCount variant="h4" color="initial">
          {count}
        </TypographyCount>
        <TypographyH5 variant="h5" color="initial">
          {item}
        </TypographyH5>
      </Box>
      <ImageBox>
        <IndustryImage src={image!} alt="image" height={60} width={60} />
      </ImageBox>
    </TopBpx>
  );
};

export default Industry;
