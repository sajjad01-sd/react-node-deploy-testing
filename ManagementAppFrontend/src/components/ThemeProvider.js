import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useLoginContext } from "../context/login_context";
import PageStructureOne from "../pages/DefaultPageStructure/PageStructure1";
import { tableStyle, themes } from "./Themes";

export const ThemeProviderToPages = ({ LStableData, navData, title }) => {
  const { mode } = useLoginContext();

  const currentTheme = themes[mode];
  console.log(tableStyle);
  return (
    <ThemeProvider theme={currentTheme} tableStyle={currentTheme}>
      <PageStructureOne
        LStableData={LStableData}
        navData={navData}
        title={title}
      />
    </ThemeProvider>
  );
};
