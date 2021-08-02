import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';

export const GlobalFilter = ({ filter , setFilter }) => {
    const [value,setValue] = useState(filter);
    // If data will more and more increase the milisecond to 2000 or 3000
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    return (
        <Wrapper>
        <span>
            <input value={value || ""} onChange={(e) => { setValue(e.target.value); onChange(e.target.value)}} placeholder='Global Filter'/>
        </span>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    span {
        display: block;
        margin-bottom: 1%;
    }
    input {
        font-size: 1rem;
        padding: .2rem .5rem;
        outline: none;
        border: 1.5px solid #78a7ab;
    }
`