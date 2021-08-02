import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  useTable,
  useBlockLayout,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { useSticky } from "react-table-sticky";
import { LeadServerCOLUMNS } from "./LeadServerColumns";
import { EmployeeCOLUMNS } from "./EmployeeColumn";
import { FaSort } from "react-icons/fa";
import { RiFilterOffLine } from "react-icons/ri";
import { useLeadServerContext } from "../../../context/lead_server_context";
import { GlobalFilter } from "./globalFilter";

// I declare it for sent data after input field submit for filter.
let queryStringCarry;

const TableData = ({ actualData }) => {
  console.log(actualData);
  
  const columns = useMemo(() => LeadServerCOLUMNS, []);
  const data = useMemo(() => actualData, []);

  const [cellTextContent, setCellTextContent] = useState("");
  const [isShown, setShown] = useState(true);

  const tableInstance = useTable(
    {
      columns,
      data: actualData,
    },
    useBlockLayout,
    useSticky,
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setAllFilters,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  // QueryString making start------------
  let filterValueString = [];
  const allInputValue = [];
  const wantedInputValue = []
  const allInputFilterName = [];
  let allWantedString = []

  // i am using useEffect here, because of solving the column.filterValue showing undefined problem and replace undefined to null.
  useEffect(() => {
    const mainValueforfilter = filterValueString.map((e) => {
      return e;
    });
    for (let index = 0; index < mainValueforfilter.length; index++) {
      let element = mainValueforfilter[index];
      if (element === undefined) {
        element = "null";
        allInputValue.push(element);
      } else {
        allInputValue.push(element);
      }
    }
    // creating wanted input value
    allInputValue.forEach((e) => {
      if(e !== 'null') {
        wantedInputValue.push(e)
      }
    })

    // creating filtering string
    function creatingString(array1, array2) {
      for (let index = 0; index < array1.length && array2.length; index++) {
        if(index ===0) {
          allWantedString.push(`SELECT * FROM Leads WHERE ${array2[index]} LIKE '${array1[index]}'`)
        } else {
          allWantedString.push(` AND ${array2[index]} LIKE '${array1[index]}%'`)
        }
        
      }
    }
    // testing all string creating
    creatingString(wantedInputValue, allInputFilterName)
    // console.log(allWantedString);
    // if(allWantedString) {
    //   for (let index = 1; index < allWantedString.length; index++) {
    //     let queryString = allWantedString[0]
    //     queryString = queryString + allWantedString[index];
    //     console.log(queryString);

    //   }
    // }

    // main filter query string from array
    let queryString;
    if(allWantedString) {
     queryString = allWantedString.reduce((a, b) => a + b, '');
    }


    // console.log(allInputValue);
    // console.log(wantedInputValue);
    // console.log(allInputFilterName);
    // const queryString = wantedQueryString.join("%") + "%";

    queryStringCarry = queryString;
  }, [filterValueString]);

  // QueryString making end----------

  useEffect(() => {});
  // let textContentmff;
  // geting data for each table cell
  const showingTextContent = (e) => {
    // console.log(e.target.textContent)
    // textContentmff = e.target.textContent;
  };
  // console.log(textContentmff)

  // for inline styling each th and td
  // const customInlineCss = {
  //   width: '180px',
  //   display: 'inline-block',
  //   boxSizing: 'border-box',
  //   position: 'sticky',
  //   zIndex: 3,
  //   left: '0px',
  //   cursor: 'pointer'
  // }
  return (
    <Wrapper>
      <div className="table-top-bar">
        <span className="filter_Reset_btn">
          <button className="clear_filter" onClick={() => setAllFilters([])}>
            Reset <RiFilterOffLine />
          </button>
        </span>
        <span className="global_filter_btn">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </span>
      </div>
      <div {...getTableProps()} className="table sticky table-area">
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="th th-custom-style"
                >
                  {column.render("Header")}
                  <span>
                    <FaSort className="sort-icon" />
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <p className="hidden">
                    {column.filterValue !== undefined ? allInputFilterName.push(column.id) : ''}
                    {filterValueString.push(column.filterValue)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div
                    {...cell.getCellProps()}
                    className="td td-custom-style"
                    onMouseOver={showingTextContent}
                  >
                    {cell.render("Cell")}
                    {/* <h1>{textContentmff}</h1> */}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        {/* <div className="textContentWindow">
               {isShown ? <p className='textContentWindow-content'>{cellTextContent}kdfjkdjfkdfjsdfkjsdkfjsadkjfkd</p> : ''}
             </div> */}
      </div>
    </Wrapper>
  );
};

export default TableData;
// this function will call from columFilter Form onSubmit.
export function SendingQueryString(value) {
  return queryStringCarry;
}
const Wrapper = styled.section`
  /* display: block;
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    font-size: .9rem;
    word-wrap: break-word;
    
    
  }
 tfoot td {
    background-color: #fff;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 5px;

  }
  
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    max-width: 5rem;
    max-height: 4rem;
  }
  th {
    background-color: #e6e6e6;
    border: 1px solid #dddddd;
    text-align: left;
    color: #141414;
    font-weight: 700;

    padding: 5px;
  }
  
  tr:nth-child(even) {
    background-color: #ebebeb;

  } */
  .clear_filter {
    background-color: var(--clr-grey-9);
    display: inline-block;
    font-size: 1rem;
    /* border: none; */
    border-bottom: 0.1px solid black;
    color: #303030;
    font-weight: 400;
    border-radius: 7px 7px 0 0;
    cursor: pointer;
    transition: all 0.2s;
  }
  .clear_filter:hover {
    background-color: var(--clr-grey-7);
    color: #242424;
  }

  // table top bar

  .table-top-bar {
  }
  .filter_Reset_btn {
    margin-right: 0.1%;
  }
  .global_filter_btn {
    display: inline-block;
  }

  // Start design for sticky table
  .table-area {
    height: 75vh !important;
    width: ${(props) => props.theme.width};
  }
  .table {
    border: 1px solid #ddd;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      padding: 0 0 0 8px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }
    }

    .th-custom-style {
      text-align: center;
      font-size: 0.95rem;
      font-weight: 600;
      color: #484848;
      padding-top: 7px;
    }

    .td-custom-style {
      padding-top: 2px;
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
  .sort-icon {
    color: #07697f;
  }
  // Responsive Table for top resulation
  @media (min-width: 1366px) {
    .table-area {
      //our own pc resulation
    }
  }
  @media (min-width: 1400px) {
    .table-area {
      height: 80vh !important;
      width: 25% !important;
      margin-left: 0.2%;
    }
    .table-top-bar {
      margin-left: 0.2%;
    }
  }
  @media (min-width: 1536px) {
    .table-area {
      height: 82vh !important;
      width: 26% !important;
      margin-left: 0.5%;
    }
    .table-top-bar {
      margin-left: 0.5%;
    }
  }
  @media (min-width: 1920px) {
    .table-area {
      height: 85vh !important;
      width: 25% !important;
      margin-left: 1%;
    }
    .table-top-bar {
      margin-left: 1%;
    }
  }

  /* // TextContentModal window style
 .textContentWindow {
   position: relative;
 }
 .textContentWindow-content {
  position: absolute;
  
 } */

  // Classed for hide
  .hidden {
    display: none;
  }
`;
