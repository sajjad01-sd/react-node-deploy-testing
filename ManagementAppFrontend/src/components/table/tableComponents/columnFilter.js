import React, { useState } from 'react'
import styled from "styled-components";
import { useLeadServerContext } from '../../../context/lead_server_context'
import { SendingQueryString } from './TableData'
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

const ColumnFilter = ({ column }) => {
    const history = useHistory()
    const {filterValue, setFilter} = column
    const {updateFilterData} = useLeadServerContext();


    const updateLeadServerFilter = (e) => {
        e.preventDefault()
        console.log('i am working')
        
       const queryString = SendingQueryString()
       updateFilterData(queryString)
    //    history.push(`/lead-server/filtered`)
    }
    return (
        <Wrapper>
            <form onSubmit={updateLeadServerFilter} className='search-form'>
            <input  value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} style={{width: 110, height: 19, margin: '4px 0 0 0'}}/>
            <button type="submit" value="Submit" className='search-btn'><AiOutlineSearch/></button>
            </form>
        </Wrapper>
    )
}

export default ColumnFilter

const Wrapper = styled.section`
 .search-btn {
     border: none;
     font-size: 1.25rem;
     color: #3f3f3f;
     margin-left: -2rem;
     margin-bottom: -.5rem;
     background: none;
     cursor: pointer;
     z-index: 1;
 }
 .search-form {
     display: flex;
 }
`
