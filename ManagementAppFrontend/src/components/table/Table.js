import React from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./tableComponents/LeadServerColumns";
import MOCK_DATA from "./tableComponents/MOCK_DATA.json";
import TableData from "./tableComponents/TableData";

function Table({ tableData }) {
  if (tableData !== undefined) {
    return (
      <div>
        <TableData actualData={tableData}></TableData>
      </div>
    );
  } else {
    return <div>There is no table data.</div>;
  }
}

export default Table;
