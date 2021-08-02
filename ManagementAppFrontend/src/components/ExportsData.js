import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import { BsDownload } from "react-icons/bs";

export default function ExportsData({ data, COLUMNS }) {
  // Generating dynamic label and key from COLUMNS for export data.
  if (data !== undefined) {
    const headersIndividual = COLUMNS.map((e) => {
      return [{ label: e.Header, key: e.accessor }];
    });
    let exportDataHeaders = [];
    for (let index = 0; index < headersIndividual.length; index++) {
      const element = headersIndividual[index];
      exportDataHeaders.push(element[0]);
    }

    const csvReport = {
      filename: "Report.xls",
      headers: exportDataHeaders,
      data: data,
    };
    return (
      <Wrapper>
        <CSVLink {...csvReport} className="export_btn margin-small">
          <span className="download_icon">
            <BsDownload />
          </span>
          <span className="export-text">Export</span>
        </CSVLink>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <p>There's nothing to export</p>
      </div>
    );
  }
}

const Wrapper = styled.section`
  /* margin-left: 19%; */
  /* .export_btn {
    box-sizing: border-box;
    padding: 0.3rem 1.2rem;
    border: 2px solid var(--clr-primary-1);
    font-size: 1rem;
    font-weight: 500;
    font-weight: 600;
    color: #363636;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    display: inline-block;
    transition: all 0.2s !important;
    -webkit-animation: tilt-in-fwd-tr 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: tilt-in-fwd-tr 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .download_icon {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 1.2rem !important;
  }

  .export_btn:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s !important;
  }
  .export_btn:active {
    transform: translateY(2px) !important;
  }

  // Animation
  @-webkit-keyframes tilt-in-fwd-tr {
    0% {
      -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-fwd-tr {
    0% {
      -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  } */
`;
