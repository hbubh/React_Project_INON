import { useState } from "react";
import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";
import ResponsiveAppBar from "./header/navBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/themeSlice";

const LayoutComponent = ({ children }) => {
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  const dispatch = useDispatch();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const setThemeChange = () => {
    dispatch(themeActions.setTheme());
  };

  return (
    <ThemeProvider theme={thisTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <ResponsiveAppBar themeChange={setThemeChange} thisTheme={thisTheme} />
      <MainComponent>{children}</MainComponent>
      {/* <MainComponent><Homepage /></MainComponent> */}
      <FooterComponent />
    </ThemeProvider>
  );
};

export default LayoutComponent;
