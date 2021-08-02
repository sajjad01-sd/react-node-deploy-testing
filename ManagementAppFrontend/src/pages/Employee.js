import React from "react";
import styled from "styled-components";
import { ThemeProviderToPages } from "../components/ThemeProvider";
import navData from "../context/mockdata/nav-contents-admin";
import PageStructureOne from "./DefaultPageStructure/PageStructure1";
import MockEmpData from "../utils/employeeMockData.json";
import { tableStyle } from "../components/Themes";

export default function Employee() {
  return (
    <>
      <ThemeProviderToPages
        LStableData={MockEmpData}
        navData={navData}
        title={"Employees"}
        tableStyle={tableStyle}
      />
    </>
  );
}
