import React, { FC } from "react";
import { Box, Grid, Typography, styled, Container } from "@mui/material";
import Form from "./Form";
import ContactFormAddress from "./ContactFormAddress";

const BoxTop = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  borderRadius: "10px",
  padding: "30px 0px",
}));

const ContainerGrid = styled(Container)(({ theme }) => ({
  margin: "30px 0px",
}));
const FormItemGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "100%",
  padding: "20px",
}));
const FormAddressGrid = styled(Grid)(({ theme }) => ({
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  backgroundColor: "#eceff7",
}));
export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  return (
    <BoxTop>
      <Typography variant="h2" color="initial">
        It's Very Easy To Contact Us
      </Typography>
      <ContainerGrid maxWidth="lg">
        <FormAddressGrid
          container
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="stretch"
          alignContent="stretch"
          wrap="wrap"
        >
          <FormItemGrid item xs={12} md={6}>
            <Form />
          </FormItemGrid>
          <Grid item xs={12} md={6}>
            <ContactFormAddress />
          </Grid>
        </FormAddressGrid>
      </ContainerGrid>
    </BoxTop>
  );
};

export default ContactForm;