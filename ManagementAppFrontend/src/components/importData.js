import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ExcelReader from "./uploadSheet/ExcelReader";

Modal.setAppElement("#root");
export const ImportData = () => {
  const [isModalOpen, setModal] = useState(false);
  return (
    <Wrapper>
      <div className="export_btn" onClick={() => setModal(true)}>
        <span className="download_icon">
          <AiOutlineCloudUpload />
        </span>
        <span className="export-text">Upload</span>
      </div>
      <CSSTransition in={isModalOpen} timeout={300} classNames="my-node">
        <Modal
          isOpen={isModalOpen}
          style={{
            overlay: {
              zIndex: 2000,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            content: {
              height: "400px",
              width: "500px",
              left: "30%",
              backgroundColor: "white",
            },
          }}
        >
          <AiOutlineCloseCircle
            className="close_btn"
            style={{
              color: "black",
              fontSize: "1.5rem",
              float: "right",
              cursor: "pointer",
            }}
            onClick={() => setModal(false)}
          />
          <ExcelReader />
        </Modal>
      </CSSTransition>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* margin-left: 19%; */
  .export_btn {
    padding: 0rem 1rem 0.15rem 1rem;
  }
  .download_icon {
    font-size: 1.5rem !important;
    /* display: flex;
    flex-direction: row !important; */
  }

  /* .dialog-enter {
    left: -100%;
    transition: left 300ms linear;
  }
  .dialog-enter-active {
    left: 0;
  }
  .dialog-exit {
    left: 0;
    transition: left 300ms linear;
  }
  .dialog-exit-active {
    left: -100%;
  } */

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateX(-100px);
  }
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
  /* .export_btn {
    cursor: pointer;
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
