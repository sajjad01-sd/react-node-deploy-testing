import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageStructureOne from './DefaultPageStructure/PageStructure1';
import navData from '../context/mockdata/nav-contents-admin';
import { useLeadServerContext } from '../context/lead_server_context';
import { ThemeProviderToPages } from '../components/ThemeProvider';

function LeadServer() {
    const {leads: leadData} = useLeadServerContext()
    const {filterLeads: filterleadData} = useLeadServerContext()

    return (
        <Wrapper>
        <ThemeProviderToPages LStableData={leadData} navData={navData} title={'Welcome to Lead Server'}/>
        </Wrapper>
    )
}


const Wrapper = styled.section`
 
 `
 export default withRouter(LeadServer) 