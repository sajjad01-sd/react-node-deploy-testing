import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import XLSX from "xlsx";
import { make_cols } from "./MakeColumns";
import { SheetJSFT } from "./types";
// import '../App.css'
// import { Autofill } from '@fluentui/react';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: [],
      marray: [],
      sheetArray: [],
      finalArray: [],
      SheetD: {},
      LeadD: {},
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        // var love = JSON.stringify(this.state.data, null, 2);
        // console.log(JSON.stringify(this.state.data, null, 2));
        // console.log(JSON.parse(this.state.data, null, 2));
        // const marray = JSON.parse(this.state.data);
        // this.setState({marray:JSON.parse(this.state.data)})
        // this.setState({marray: myArray})
        // console.log(love)
        // console.log(Object.keys(this.state.data));
        // for(let i=0;i<this.state.data.length;i++){
        // function componentDidMount() {
        //     // Simple GET request using fetch
        //     fetch('http://localhost:3001/api/allleads')
        //         .then(response => response.json())
        //         .then(data => {
        //             this.setState({ list: data })
        //             console.log(data)
        //         });
        // }
        // componentDidMount()
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;

        var sheetArrays = {};
        sheetArrays.SheetID = 0;
        sheetArrays.SheetName =
          this.state.file.name === undefined ? null : this.state.file.name;
        sheetArrays.OrderID =
          this.state.file.name === undefined ? null : this.state.file.name;
        sheetArrays.OrderDate = null;
        sheetArrays.OrderCompletedDate = null;
        sheetArrays.ClientID = null;
        sheetArrays.ClientName = null;
        sheetArrays.IsActive = 1;
        sheetArrays.IsDeleted = 0;
        sheetArrays.CreatedDate = today;
        sheetArrays.UpdatedDate = today;
        sheetArrays.DeletedDate = today;

        this.state.sheetArray.push(sheetArrays);

        fetch("http://localhost:3001/api/setSheet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.sheetArray),
        }).then((result) => {
          result.json().then((res) => {
            this.setState({ SheetD: res });
            console.log(res[0].SheetID);
            // for (let i = 0; i < 2; i++) {
            for (let i = 0; i < this.state.data.length; i++) {
              var arrrrry = {};

              for (let j = 0; j < Object.keys(this.state.data[i]).length; j++) {
                if (Object.keys(this.state.data[i])[j] === "LinkedIn Link") {
                  arrrrry.LinkedinLink = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Source Link") {
                  arrrrry.SourceLink = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "NamePrefix") {
                  arrrrry.NamePrefix = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "First Name") {
                  arrrrry.FirstName = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "MiddleName") {
                  arrrrry.MiddleName = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Last Name") {
                  arrrrry.LastName = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "SurName") {
                  arrrrry.SurName = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Gender") {
                  arrrrry.Gender = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Contact Name") {
                  arrrrry.FullName = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Title") {
                  arrrrry.TitlePosition = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Email Address") {
                  arrrrry.BusinessEmail = Object.values(this.state.data[i])[
                    j
                  ].toLowerCase();
                }
                if (Object.keys(this.state.data[i])[j] === "Personal Email") {
                  arrrrry.PersonalEmail = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Personal Phone") {
                  arrrrry.PersonalPhone = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Employee Range") {
                  arrrrry.EmployeeRange = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Person Location") {
                  arrrrry.PersonLocation = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Company Name") {
                  arrrrry.CompanyName = Object.values(this.state.data[i])[j];
                }
                if (
                  Object.keys(this.state.data[i])[j] === "Company Website" ||
                  Object.keys(this.state.data[i])[j] === "Website" ||
                  Object.keys(this.state.data[i])[j] === "Web Link" ||
                  Object.keys(this.state.data[i])[j] === "WebLink"
                ) {
                  arrrrry.CompanyWebsite = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Company Linkedin") {
                  arrrrry.CompanyLinkedinLink = Object.values(
                    this.state.data[i]
                  )[j];
                }
                if (
                  Object.keys(this.state.data[i])[j] === "Phone Number" ||
                  Object.keys(this.state.data[i])[j] === "Company Number"
                ) {
                  arrrrry.CompanyPhone = Object.values(this.state.data[i])[j];
                }
                if (
                  Object.keys(this.state.data[i])[j] ===
                    "Number of Employees" ||
                  Object.keys(this.state.data[i])[j] === "# of Employees" ||
                  Object.keys(this.state.data[i])[j] === "Head Count"
                ) {
                  arrrrry.CompanyHeadCount = Object.values(this.state.data[i])[
                    j
                  ];
                }
                if (Object.keys(this.state.data[i])[j] === "Industry") {
                  arrrrry.Industry = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Revenue") {
                  arrrrry.Revenue = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Street") {
                  arrrrry.Street = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "City") {
                  arrrrry.City = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "State") {
                  arrrrry.State = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Country") {
                  arrrrry.Country = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Zip") {
                  arrrrry.Zip = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Address") {
                  arrrrry.FullAddress = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Rating") {
                  arrrrry.Rating = Object.values(this.state.data[i])[j];
                }
                if (Object.keys(this.state.data[i])[j] === "Tag") {
                  arrrrry.CustomField5 = Object.values(this.state.data[i])[j];
                }
                if (
                  Object.keys(this.state.data[i])[j] === "Verified By" ||
                  Object.keys(this.state.data[i])[j] === "Verified"
                ) {
                  arrrrry.CustomField2 = Object.values(this.state.data[i])[j];
                }
                if (
                  Object.keys(this.state.data[i])[j] === "Review" ||
                  Object.keys(this.state.data[i])[j] === "Review By"
                ) {
                  arrrrry.CustomField1 = Object.values(this.state.data[i])[j];
                }

                arrrrry.LeadID = "0";
                arrrrry.CompanyHQAddress = null;
                arrrrry.SheetID = res[0].SheetID;
                arrrrry.SheetName = res[0].SheetName;
                arrrrry.CustomField3 = null;
                arrrrry.CustomField4 = null;
                // arrrrry.CustomField5 = null;
                arrrrry.IsActive = 1;
                arrrrry.IsDeleted = 0;
                arrrrry.CreatedDate = today;
                arrrrry.UpdatedDate = today;
                arrrrry.DeletedDate = today;

                // NULL object update
                arrrrry.LinkedinLink =
                  arrrrry.LinkedinLink === undefined
                    ? null
                    : arrrrry.LinkedinLink;
                arrrrry.SourceLink =
                  arrrrry.SourceLink === undefined ? null : arrrrry.SourceLink;
                arrrrry.NamePrefix =
                  arrrrry.NamePrefix === undefined ? null : arrrrry.NamePrefix;
                arrrrry.FirstName =
                  arrrrry.FirstName === undefined ? null : arrrrry.FirstName;
                arrrrry.MiddleName =
                  arrrrry.MiddleName === undefined ? null : arrrrry.MiddleName;
                arrrrry.LastName =
                  arrrrry.LastName === undefined ? null : arrrrry.LastName;
                arrrrry.SurName =
                  arrrrry.SurName === undefined ? null : arrrrry.SurName;
                arrrrry.Gender =
                  arrrrry.Gender === undefined ? null : arrrrry.Gender;
                arrrrry.FullName =
                  arrrrry.FullName === undefined ? null : arrrrry.FullName;
                arrrrry.TitlePosition =
                  arrrrry.TitlePosition === undefined
                    ? null
                    : arrrrry.TitlePosition;
                arrrrry.BusinessEmail =
                  arrrrry.BusinessEmail === undefined
                    ? null
                    : arrrrry.BusinessEmail;
                arrrrry.PersonalEmail =
                  arrrrry.PersonalEmail === undefined
                    ? null
                    : arrrrry.PersonalEmail;
                arrrrry.PersonalPhone =
                  arrrrry.PersonalPhone === undefined
                    ? null
                    : arrrrry.PersonalPhone;
                arrrrry.EmployeeRange =
                  arrrrry.EmployeeRange === undefined
                    ? null
                    : arrrrry.EmployeeRange;
                arrrrry.PersonLocation =
                  arrrrry.PersonLocation === undefined
                    ? null
                    : arrrrry.PersonLocation;
                arrrrry.CompanyName =
                  arrrrry.CompanyName === undefined
                    ? null
                    : arrrrry.CompanyName;
                arrrrry.CompanyWebsite =
                  arrrrry.CompanyWebsite === undefined
                    ? null
                    : arrrrry.CompanyWebsite;
                arrrrry.CompanyLinkedinLink =
                  arrrrry.CompanyLinkedinLink === undefined
                    ? null
                    : arrrrry.CompanyLinkedinLink;
                arrrrry.CompanyPhone =
                  arrrrry.CompanyPhone === undefined
                    ? null
                    : arrrrry.CompanyPhone;
                arrrrry.CompanyHeadCount =
                  arrrrry.CompanyHeadCount === undefined
                    ? null
                    : arrrrry.CompanyHeadCount;
                arrrrry.CompanyHQAddress =
                  arrrrry.CompanyHQAddress === undefined
                    ? null
                    : arrrrry.CompanyHQAddress;
                arrrrry.Industry =
                  arrrrry.Industry === undefined ? null : arrrrry.Industry;
                arrrrry.Revenue =
                  arrrrry.Revenue === undefined ? null : arrrrry.Revenue;
                arrrrry.Street =
                  arrrrry.Street === undefined ? null : arrrrry.Street;
                arrrrry.City = arrrrry.City === undefined ? null : arrrrry.City;
                arrrrry.State =
                  arrrrry.State === undefined ? null : arrrrry.State;
                arrrrry.Country =
                  arrrrry.Country === undefined ? null : arrrrry.Country;
                arrrrry.Zip = arrrrry.Zip === undefined ? null : arrrrry.Zip;
                arrrrry.FullAddress =
                  arrrrry.FullAddress === undefined
                    ? null
                    : arrrrry.FullAddress;
                arrrrry.Rating =
                  arrrrry.Rating === undefined ? null : arrrrry.Rating;
                arrrrry.CustomField1 =
                  arrrrry.CustomField1 === undefined
                    ? null
                    : arrrrry.CustomField1;
                arrrrry.CustomField2 =
                  arrrrry.CustomField2 === undefined
                    ? null
                    : arrrrry.CustomField2;
              }
              this.state.finalArray.push(arrrrry);
            }
            console.log(this.state.finalArray);
            fetch("http://localhost:3001/api/setLead", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.state.finalArray),
            }).then((result) => {
              result.json().then((res) => {
                // this.setState({ LeadD: res });
                // console.log(result)
                console.log("done");
              });
            });
            window.location.reload(false);
          });
        });
      });
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }
  Upload() {
    fetch("http://localhost:3001/api/setLead", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.finalArray),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
      });
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="file">Choose Your Excel File</label>
        <br />
        <input
          style={{
            maxWidth: "fit-content",
            margin: "auto",
            padding: "3px 0px 0px 46px",
          }}
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Upload Sheet" onClick={this.handleFile} />
        {/* <input type='submit'
                    value="Upload Sheet"
                    onClick={this.Upload} /> */}
      </div>
    );
  }
}

export default ExcelReader;
