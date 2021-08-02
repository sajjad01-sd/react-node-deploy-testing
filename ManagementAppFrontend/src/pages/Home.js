import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Wrapper>
            <Link to='/dashboard' className='goto'>Go to Dashborad</Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
background-color: #400040;
height: 100vh;
.goto {
    color: white;

}
`

export default withRouter(Home)