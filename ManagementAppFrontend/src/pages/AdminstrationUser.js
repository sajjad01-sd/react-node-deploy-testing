import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageStructureOne from './DefaultPageStructure/PageStructure1';
import navData from '../context/mockdata/nav-contents-admin';
import { ThemeProviderToPages } from '../components/ThemeProvider';

function AdministrationUser() {
    return (
        <>
        <ThemeProviderToPages navData={navData} title={'Adminstration'}/>
        </>
    )
}


export default withRouter(AdministrationUser)
