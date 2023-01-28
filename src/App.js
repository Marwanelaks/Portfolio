import React, { useState } from "react";
import "./App.css"

function App() {
  const [Light, setToDark] = useState(true)
  let bg
  if (Light == true) {
    bg = ` body {
        background-color: #f48201;
      }
      .custom-shape-divider-top-1674814307 .shape-fill {
        fill: #F48201;
      }`
  }
  else {
    bg = ` body {
        background-color: rgba(0, 0, 0, 0.864);
      }
      .frame-text16{
        color:white;
      }
      .custom-shape-divider-top-1674814307 .shape-fill {
        fill: #242321;
      }
      .portf{
        background-color:#121211
      }
      .hrf{
        background-color:#121211
      }
      .shapedividers_com-4385::before{
        background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23fbd8c2"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23fbd8c2"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23fbd8c2"/></svg>'); 
      }
      @media (min-width:1025px){
        .shapedividers_com-4385::before{  
        background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 78"><g fill="%23121211"><path d="M207 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM209 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM215 33a2 2 0 00-1-1c-2 1-2 5-2 7a3 3 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM177 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM119 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM135 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM539 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM537 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM545 33a2 2 0 00-1-1c-2 1-2 5-2 7a2 2 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM449 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM507 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM465 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM879 28a2 2 0 00-1 3c0 1 2 2 4 1a2 2 0 000-2 2 2 0 00-3-2zM886 33a2 2 0 00-2-1c-2 1-2 5-2 7a2 2 0 002 1 2 2 0 001 0 3 3 0 001-1 5 5 0 001-5 3 3 0 00-1-1zM877 37a1 1 0 00-1 1h3c0-1-1-2-2-1zM847 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM789 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM805 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1z"/><path d="M1914 0H0v25h1c5 1 12 15 12 35 0 5 0 8 3 9h5c4-3 0-9 1-13 1-3 4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 12-4 7 3 18 2 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 5 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 8-5 7-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a26 26 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c8 9 16 12 16 18 0 3-1 6 1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 9 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9l-2-13c1-6 4-8 7-8 7 0 6 6 10 4 4-1 2-6 4-10 2-1 4 0 5 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 5 1 11-5 8-10s-3-10-1-16a3 3 0 002 2 9 9 0 003 1c5 1 13 15 13 35 0 5 0 8 3 9h5c4-3 0-10 1-13s4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 11-4 7 2 19 1 24 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 0-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 7-5 7-9a13 13 0 00-2-5c-3-4 1-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 4-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18l1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 6 1 11-5 8-10-6-10 1-19 7-27l3 7c0 2-1 5 1 6a9 9 0 004 1c5 1 13 15 12 35 0 5 0 8 3 9h5c4-3 0-10 1-13s5-7 7-4c2 0 2 2 4 3s3-1 4-3c0-4-3-19 2-25 3-5 9-6 12-4 7 2 18 1 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 7 12 5-1 7-5 6-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 12-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 16-13 8 1 12 8 12 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18 0 3 0 6 2 8h5c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a44 44 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5 3-3 7-2c4 0 3 7 3 8a5 5 0 01-1 2c-5 5-2 11 4 11 6 1 11-5 8-10-5-8-1-16 4-23 5 7 9 15 4 23-3 5 3 11 8 10 7 0 9-6 5-11a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a44 44 0 00-1-7c0-2-1-7 2-8 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 9a9 9 0 006 0 6 6 0 003-9l-2-6c1-17 5-24 13-25 9-2 16 5 15 13v10a4 4 0 003 3 4 4 0 004-3c1-2-1-7 2-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-3-11-3-33 0-4 0-8 4-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-2 5c0 4 1 8 7 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-3 18-5 21-5 6-2 13 4 15a8 8 0 002 0c5 0 10-4 10-9 0-3-2-5-3-7-3-5-3-26-1-30 5-7 16-6 23-9 4-2 9-1 12 4 5 6 2 21 3 25 0 2 1 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 1 13h5c3-1 3-4 3-9 0-20 7-34 12-35a9 9 0 004-1c2-1 1-4 2-6l3-7c5 8 12 18 6 27-3 5 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 2-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35a9 9 0 003-1 3 3 0 002-1c2 5 3 10-1 15-3 6 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-3 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6 2 1 4 2 6 0s1-5 1-8c0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 26 26 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35V0z"/><path d="M1794 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1792 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1787 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 3 3 0 001-2c1-1 0-5-1-6zM1865 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1881 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1824 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1551 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1535 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1464 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1457 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-1-6zM1494 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1462 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1124 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1116 32a2 2 0 00-1 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-2-6zM1122 31a2 2 0 00-1-3 2 2 0 00-3 2 2 2 0 001 2c1 1 3 0 3-1zM1195 23l-3 1a1 1 0 002 1c0 1 2 0 1-1a1 1 0 000-1zM1153 27a4 4 0 00-2 4 3 3 0 001 2 4 4 0 007-2c1-3-3-5-6-4zM1211 53a3 3 0 00-2 3 2 2 0 001 2 3 3 0 005-2c0-2-2-4-4-3z"/></g></svg>'); 
        }
        }
      `
  }
 
  return (
    <>
    <section className="bag">
      <nav className="navbar navbar-expand-lg ">

        <style>
          {bg}
        </style>
        <div className="container-fluid">
          <a className="frame-text me-1" href="#">P</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse my-6" id="navbarScroll">
            <div className=" navbar-collapse  menu">
              <ul className="navbar-nav" >

                <li className="nav-item">
                  <a className="nav-link active frame-text01" aria-current="page" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link frame-text03" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link frame-text05" href="#">Contact</a>
                </li>
              </ul>
              {
                Light ?
                  <img
                    src="/playground_assets/night.png"
                    alt="lightmode"
                    className="brightness"
                    onClick={() => setToDark(!Light)}
                  />
                  :
                  <img
                    src="/playground_assets/morning.png"
                    alt="darkmode"
                    className="darkness"
                    onClick={() => setToDark(!Light)}
                  />
              }
            </div>
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      

      <section className=" back container me-6 my-1">
        <div className="row text-center">
          <div className="col-6 frame-text07 my-5 text-center " >
            <span>HI,</span>
            <br></br>
            <span>i’m marwane,</span>
            <br></br>
            <span>web developer</span><br></br>
            <div className="text-center">
            <button className=" showmore btn btn-primary">show more about me </button>
  </div>
  
        </div>
        <div className="col-6 my-5 text-center m-auto hy  ">
        <div className="m-auto pullup ">
        { Light ?
        <img  className="myavatar  m-auto"  src="/playground_assets/AvatarLight.png"></img>
        :
        <img  className="myavatar  m-auto"  src="/playground_assets/AvatarDark.png"></img>
      }
       <div className="portav "> </div>
       </div>
       <br></br>
        <span className="frame-text16  m-auto ">
    <span>full stack developer</span>
  </span><br></br>
<div className="text-center m-auto links">
  <a href='#'><img
    src="/playground_assets/test212-okeg-200h.png"
    alt="test212"
    className="frame-test2 m-auto"
  /></a>
  <a href='#'><img
    src="/playground_assets/test2372-2q2-200h.png"
    alt="test2372"
    className="frame-test3 m-auto"
  /></a>
  <a href='#'><img
    src="/playground_assets/test2373-68af-200h.png"
    alt="test2373"
    className="frame-test4 m-auto"
  /></a></div>
      </div></div></section>
      <ul id="animation">
    <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      <li className="bg"></li>
      </ul>
  </section>
  {/* {
    Light?
    <div className="curv">
      <img className="curv1" src="/playground_assets/after.png"></img>
    </div>: 
    <div className="curv">
    <img className="curv1" src="/playground_assets/dark2.png"></img>
  </div>
  } */}
  
     {/* <section className="col-sm-12 bg-primary text-center flampo">
         
         
        <span className=" frame-text20 text-center bg-primary">
          <span>latest projects</span><br></br>
          <span>latest projects</span><br></br>
          <span>latest projects</span>
        </span>
        </section> */}
        
       <div className=" hrf">
       
        {/* <span className="frame-text18 text-center"> */}
          {/* <span className="my-3 text-center" >Portfolio</span>
          <span className=" text-center show ">
          <span>latest projects</span><br></br>
          <span>latest projects</span><br></br>
          <span>latest projects</span>
        </span> */}
        </div> 
    
      {/* {
        Light ?
        <div className="curv crv2">
          <img className="curv2" src="/playground_assets/before.png"></img>
        </div> :
        <div className="curv crv2">
        <img className="curv2" src="/playground_assets/dark1.png"></img>
      </div> 
      } */}

<div class="custom-shape-divider-top-1674814307">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

     <div className="portf">
      <div className=" container ">
        <div className="row col-sm-12 text-center ">
          {/* <h2 className="title col-sm-12 text-center my-5"> Portfolio</h2> */}
          <span className="frame-text18 ">
          Portfolio
        </span>
        <span className="frame-text20">
          latest projects
        </span>
        </div>
        </div>
        
        {/* <div className="container">
             <div className="row">
            <div className="col-12"> */}
            {/* <span className="col-md-4 text-center"> */}
           
          <div className="row m-auto text-center">
            <span className="col-sm-3 m-auto">
              <img className=" m-auto img-responsive prj1" src="/playground_assets/project1.png"></img>
              <h3 className="frame-text20">Project 1</h3>
              </span>
              <span className="col-sm-3 m-auto">
              <img className=" m-auto d-block img-responsive prj2" src="/playground_assets/project2.png"></img>
              <h3 className="frame-text20">Project 2</h3>
              </span>
              <span className="col-sm-3 m-auto">
              <img className=" m-auto img-responsive prj3" src="/playground_assets/project3.png"></img>
              <h3 className="frame-text20">Project 3</h3>
              </span>
              <span className="col-sm-3 m-auto">
              <img className=" m-auto d-block img-responsive prj2" src="/playground_assets/project2.png"></img>
              <h3 className="frame-text20">Project 4</h3>
              </span>
              
            </div>
           <div className="shapedividers_com-4385">
           </div>
          
           </div>
        {/* </div> */}
      {/* // </div> */}
     {/* </div> */} 
     <div className="about">
     <div className="container-fluid">
            <div className="row">
              <p>
                
              </p>
            </div>
           </div>
       </div>
    </>
  );
}

export default App;