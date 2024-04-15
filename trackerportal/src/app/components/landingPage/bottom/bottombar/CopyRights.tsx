import React, { FC } from "react";
import { Typography, Box, Container, Grid, styled } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const TopBox = styled(Box)(({ theme }) => ({
  background: "black",
  borderRadius: "8px",
  color: "white",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}));

const IconPaddingGrid = styled(Grid)(({ theme }) => ({
  padding: "0px 25px",
}));
export interface CopyRightsProps {
  text?: string;
}

const CopyRights: FC<CopyRightsProps> = (props) => {
  return (
    <TopBox>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="left">
              © {new Date().getFullYear()} CopyRights: trackers.ae reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-end">
            <IconPaddingGrid item>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
            <IconPaddingGrid item>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
            <IconPaddingGrid item>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
            <IconPaddingGrid item>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
            <IconPaddingGrid item>
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
            <IconPaddingGrid item>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon fontSize="large" />
              </Link>
            </IconPaddingGrid>
          </Grid>
        </Grid>
      </Container>
    </TopBox>
  );
};

export default CopyRights;
