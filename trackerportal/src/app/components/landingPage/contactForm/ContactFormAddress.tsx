import React, { FC } from "react";
import {
  Box,
  Typography,
  styled,
} from "@mui/material";

import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const InfoContainerBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/Mask group.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  color: "black",
  padding: "49px",
  margin: "20px",
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
}));

const AddBox = styled(Box)(({ theme }) => ({
  padding: "15px 0px",
}));

const MapIconIcon = styled(MapIcon)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
}));
const PhoneIconIcon = styled(PhoneIcon)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
}));
const MailIconIcon = styled(MailIcon)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
}));
const TypographyInfoText = styled(Typography)(({ theme }) => ({
  fontSize: "1.725rem",
  fontWeight: "600",
  color: "white",
  margin: 0,
  textTransform: "uppercase",
}));
const TypographyInfoSubText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "1.1rem",
}));

const ContactFormAddress = () => {
  return (
    <InfoContainerBox>
      <AddBox>
        <MapIconIcon />
        <TypographyInfoText variant="h5" gutterBottom>
          Our Address
        </TypographyInfoText>
        <TypographyInfoSubText variant="body1" gutterBottom>
          Tamani Arts offices, 5th floor - office no 554, Business Bay,Dubai 
        </TypographyInfoSubText>
      </AddBox>
      <Box>
        <PhoneIconIcon />
        <TypographyInfoText variant="h5" gutterBottom>
          OUR PHONE
        </TypographyInfoText>
        <TypographyInfoSubText variant="body1" gutterBottom>
          (04) 834 3814, +971 52 214 2913
        </TypographyInfoSubText>
      </Box>
      <Box>
        <MailIconIcon />
        <TypographyInfoText variant="h5" gutterBottom>
          OUR MAILBOX
        </TypographyInfoText>
        <TypographyInfoSubText variant="body1" gutterBottom>
          info@trackers.ae
        </TypographyInfoSubText>
      </Box>
    </InfoContainerBox>
  );
};

export default ContactFormAddress;