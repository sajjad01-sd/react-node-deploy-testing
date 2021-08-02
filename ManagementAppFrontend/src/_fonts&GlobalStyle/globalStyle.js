import { createGlobalStyle } from "styled-components";
import background4colorImage from "../assets/img/app4color-background.jpg";

const GlobalStyle = createGlobalStyle`
:root {
  /* dark shades of primary color*/
  --clr-primary-1: #14bdbd;
  --clr-primary-2: #058b8b;
  --clr-primary-3: hsl(22, 28%, 37%);
  --clr-primary-4: hsl(22, 28%, 45%);
  /* primary/main color */
  --clr-primary-5: hsl(22, 31%, 52%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(22, 31%, 60%);
  --clr-primary-7: hsl(22, 31%, 67%);
  --clr-primary-8: hsl(20, 31%, 74%);
  --clr-primary-9: hsl(22, 31%, 81%);
  --clr-primary-10: hsl(22, 31%, 88%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: rgb(255, 255, 255);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-yellow-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    background-repeat: no-repeat;
    min-height: 100vh;
    /* background-image: linear-gradient(to right, var(--clr-primary-2), var(--clr-primary-1)); */
    background-image: url(${background4colorImage});
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
  }
  .margin-small {
    margin-right: .5rem;
  }

  // Export import btn style

  .export_btn {
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
  }

`;

export default GlobalStyle;
