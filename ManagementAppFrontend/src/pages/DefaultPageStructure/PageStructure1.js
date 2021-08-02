import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { CgSun } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import nav_logo from "../../assets/img/Khalidit-nav-logo.png";
import nav_logo_expend from "../../assets/img/khalidit-logo-app-expand-nav.png";
import { useLoginContext } from "../../context/login_context";
import expendIcon from "../../assets/img/expand-btn.svg";
import Table from "../../components/table/Table";
import ExportsData from "../../components/ExportsData";
import { LeadServerCOLUMNS } from "../../components/table/tableComponents/LeadServerColumns";
import { ImportData } from "../../components/importData";

export default function PageStructureOne({ LStableData, navData, title }) {
  const {
    mode,
    active,
    isExpend,
    updateActiveClass,
    OpenSidebar,
    CloseSidebar,
    LightMode,
    DarkMode,
  } = useLoginContext();
  const handleActiveClass = (index) => {
    updateActiveClass(index);
  };

  let location = useLocation();
  return (
    <Wrapper>
      <div className="content-body">
        {/* Side Navigation Start */}
        <div className="nav-content">
          <nav>
            <ul className="nav-list">
              {/* we use isExpend for expending nav so we implement two img */}
              {isExpend ? (
                <img
                  src={nav_logo_expend}
                  alt="Navigation Logo"
                  className="navigation_img-expend"
                />
              ) : (
                <img
                  src={nav_logo}
                  alt="Navigation Logo"
                  className="navigation_img"
                />
              )}

              {navData.map((e, index) => {
                // if isExpend true, show full navmenu else only icons with hove effect
                if (isExpend) {
                  return (
                    <Link
                      key={index}
                      to={e.path}
                      onClick={() => handleActiveClass(index)}
                      style={{ textDecoration: "none" }}
                    >
                      <li
                        className={`${
                          active === index
                            ? "nav-list-item-open active"
                            : "nav-list-item-open"
                        }`}
                      >
                        <span>{e.icon}</span>
                        <span className="nav-list-open-links">{e.name}</span>
                      </li>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={index}
                      to={e.path}
                      onClick={() => handleActiveClass(index)}
                      className="nav-ReactLINK"
                    >
                      <li
                        className={`${
                          active === index
                            ? "nav-list-item active"
                            : "nav-list-item"
                        }`}
                      >
                        <span>{e.icon}</span>
                      </li>
                      <span className="toolkit">{e.name}</span>
                    </Link>
                  );
                }
              })}
            </ul>
          </nav>
          <div className="expend_mode">
            {isExpend ? (
              <div className="expend_icon-close" onClick={() => CloseSidebar()}>
                <AiOutlineClose />
              </div>
            ) : (
              <div className="expend_icon-open">
                <img
                  src={expendIcon}
                  alt="expend-svg"
                  onClick={() => OpenSidebar()}
                />
              </div>
            )}
            {mode === "light" ? (
              <BsMoon className="modeIcon" onClick={() => DarkMode()} />
            ) : (
              <CgSun className="modeIcon" onClick={() => LightMode()} />
            )}
          </div>
        </div>
        {/* Side Navigation End */}

        {/* Table content start */}
        <div className="table-content">
          <div className="table-content-head">
            <h1 className="table-header">{title}</h1>
          </div>
          <section className="table-body">
            <div className="export_import">
              <ExportsData data={LStableData} COLUMNS={LeadServerCOLUMNS} />
              {location.pathname.includes("lead-server") ? (
                <ImportData data={LStableData} COLUMNS={LeadServerCOLUMNS} />
              ) : (
                ""
              )}
            </div>
            <Table tableData={LStableData}></Table>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .content-body {
    max-width: 81.3rem;
    margin: 1rem auto;
    height: 100vh;
    background: ${(props) => props.theme.pageBackground};
    border-radius: 18px;
    box-shadow: 5px 10px 50px 10px rgba(0, 0, 0, 0.5);
    padding: 0 0 0 0.1rem;
    transform: ${(props) => props.theme.rotate};
    transition: all 0.5s linear;

    display: flex;
  }
  .nav-content {
    flex-grow: 0.8%;
    flex-basis: 4rem;
    box-shadow: 3px 0 10px -2px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  nav {
    text-align: center;
  }

  .navigation_img {
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    background-color: white;
    box-shadow: 5px 4px 10px -2px rgba(0, 0, 0, 0.3);
    margin-bottom: 0.8rem;
  }
  .navigation_img-expend {
    width: 80%;
  }
  .nav-list {
    list-style: none;
    margin-top: 0.3rem !important;
    padding: 0 !important;
  }
  .nav-list-item {
    color: var(--clr-grey-5);

    span {
      color: var(--clr-grey-5);
      font-size: 1.6rem;
    }
  }

  .nav-list-item-open {
    display: flex;
    margin-left: 1rem;

    span {
      color: var(--clr-grey-1);
      font-size: 1.6rem;
      margin-right: 0.2rem;
    }
  }
  .nav-list-open-links {
    font-size: 1.1rem !important;
    margin-right: 0.3rem !important;
    margin-top: 0.2rem;
  }

  /* .icon {
      color: var(--clr-grey-1);
      font-size: 1.5rem;
  } */
  .active {
    span {
      color: var(--clr-primary-2) !important;
      font-size: 1.6rem;
    }
  }

  .nav-ReactLINK {
    text-decoration: none;
    position: relative;
    display: block;
  }
  .toolkit {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 26px;
    width: 150px;
    background: #f9f9f9;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    color: #2d2d2d;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    line-height: 25px;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.2);
    border-radius: 7px 7px 7px 7px;
    transition: 0s;
    visibility: hidden;
    opacity: 0;
  }
  .toolkit:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }

  .nav-ReactLINK:hover .toolkit,
  .nav-ReactLINK:active .toolkit {
    opacity: 1;
    visibility: visible;

    transform: translateX(15%);
    transition: all 0.2s ease;
    z-index: 500;
  }

  // table style
  .table-content {
    padding: 0rem 0 0rem 1rem;
  }
  .table-content-open {
    //
  }
  .table-header {
    color: #07697f;
    font-size: 1.7rem;
    margin: 0;
    margin-top: 0.5rem !important;
    font-weight: 600;
    margin-bottom: 2rem; // I set this margin for taking some space above the data.
  }

  @media (min-width: 1500px) {
    .content-body {
      max-width: 100rem;
    }
  }
  // Expend nav bar
  .expend_mode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }
  .expend_icon-open {
    /* margin-bottom: 1rem; */
    margin-left: 0.2rem !important;

    display: block;
    cursor: pointer;
    img {
      display: block;
      transform: rotate(180deg);
      filter: contrast(50%);
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .expend_icon-close {
    margin-left: -0.4rem;
    font-size: 1.6rem;
    color: var(--clr-primary-2);
    text-align: center;
    display: block;
    cursor: pointer;
    -webkit-animation: rotate-center 1.5s ease-in-out infinite both;
    animation: rotate-center 1.5s ease-in-out infinite both;
  }
  .modeIcon {
    cursor: pointer;
    margin-top: 2rem;
    display: inline-block;
    padding: 0.5rem;
    border-radius: 100px;
    color: black;
    background-color: var(--clr-primary-1);
  }
  // Export import
  .export_import {
    display: flex;
    margin-left: 16.5%;
  }
  // Animation effect
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
