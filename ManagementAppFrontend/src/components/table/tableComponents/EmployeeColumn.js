import ColumnFilter from "./columnFilter";

export const EmployeeCOLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "Full name",
    accessor: "fullName",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "Employee ID",
    accessor: "employeeId",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "Position",
    accessor: "jobTitle",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "BDay",
    accessor: "date_of_birth",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    sticky: "left",
    Filter: ColumnFilter,
  },
  {
    Header: "Mobile Number",
    accessor: "mobileNumber",
    Filter: ColumnFilter,
  },
  {
    Header: "Address",
    accessor: "address",
    Filter: ColumnFilter,
  },
  {
    Header: "Work Status",
    accessor: "workStatus",
    Filter: ColumnFilter,
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: ColumnFilter,
  },
];
