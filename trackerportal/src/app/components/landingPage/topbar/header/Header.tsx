import React, { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";
import Link from "next/link";

const DrawerServices = styled(Drawer)(({ theme }) => ({
  width: "60%",
}));

const HeaderNavlinks = styled(Link)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 600,
  fontFamily: "system-ui",
}));

const MainAppBar = styled(AppBar)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  position: "fixed",
}));
const NavlinkGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  alignContent: "stretch",
  paddingLeft: "20px",
}));
export interface HeaderProps {
  text?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <MainAppBar>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
          )}

          <Image src={logo} height={100} width={200} alt="logo" />

          {!isMobile && (
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              direction={{ xs: "column", md: "row" }}
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              alignContent="stretch"
              paddingLeft={20}
            >
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/">HOME</HeaderNavlinks>
              </Grid>
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/services">SERVICES</HeaderNavlinks>
              </Grid>
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/industry">INDUSTRY</HeaderNavlinks>
              </Grid>
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/blog">BLOG</HeaderNavlinks>
              </Grid>
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/about">ABOUT US</HeaderNavlinks>
              </Grid>
              <Grid item xs={12} md={2}>
                <HeaderNavlinks href="/contact">CONTACT US</HeaderNavlinks>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </MainAppBar>

      {/* Drawer for mobile view */}
      <DrawerServices
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {[
            "HOME",
            "SERVICES",
            "INDUSTRY",
            "BLOG",
            "ABOUT US",
            "CONTACT US",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </DrawerServices>
    </>
  );
};

export default Header;
