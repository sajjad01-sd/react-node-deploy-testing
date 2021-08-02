import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";
import navData from '../context/mockdata/nav-contents-admin';
import { ThemeProviderToPages } from '../components/ThemeProvider';


function Dashboard() {
    return (
        <>
        <ThemeProviderToPages navData={navData} title={'Dashboard'}/>
        </>
    )
}


export default withRouter(Dashboard)
