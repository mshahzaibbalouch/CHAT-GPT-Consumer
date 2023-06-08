import React from 'react';
import { Button } from 'react-bootstrap';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm  sticky-top"  style={{ height: '80px' }}>

            <div className="container">



                <button

                    className="navbar-toggler"

                    type="button"

                    data-bs-toggle="collapse"

                    data-bs-target="#navbarNav"

                    aria-controls="navbarNav"

                    aria-expanded="false"

                    aria-label="Toggle navigation"

                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                    <ul className="navbar-nav">
                        <li>
                            <a className="text-dark navbar-brand w-100" href="home"> <Button variant="outline-warning text-dark ">Speak to an expert</Button></a>
                        </li>
                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown1"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                Expertise

                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">

                                <li>

                                    <a className="dropdown-item" href="home">
                                        Experience




                                    </a>

                                </li>

                                <li>

                                    <a className="dropdown-item" href="home">Product</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Technology</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Approach</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Engagement</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Partners</a>

                                </li>

                            </ul>

                        </li>


                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >


                                Case Studies

                            </a>

                        </li>

                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                Podcast

                            </a>
                        </li>

                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                Perspective






                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">

                                <li>

                                    <a className="dropdown-item" href="home">Latest</a>

                                </li>

                                <li>

                                    <a className="dropdown-item" href="home">Videos</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">eGuides</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Blogs</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">News</a>

                                </li>

                            </ul>

                        </li>
                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                About
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">

                                <li>

                                    <a className="dropdown-item" href="home">Journey</a>

                                </li>

                                <li>

                                    <a className="dropdown-item" href="home">Clients</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Expertise</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Approach</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Engagement</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Awards</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Careers</a>

                                </li>
                                <li>

                                    <a className="dropdown-item" href="home">Engagement</a>

                                </li>

                            </ul>

                        </li>
                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                Careers
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">

                                <li>

                                    <a className="dropdown-item" href="home">Culture</a>

                                </li>

                                <li>

                                    <a className="dropdown-item" href="home">Open Positions</a>

                                </li>
                            </ul>

                        </li>
                        <li className="nav-item dropdown">

                            <a

                                className="nav-link dropdown-toggle me-4"

                                href="home"

                                id="navbarDropdown2"

                                role="button"

                                data-bs-toggle="dropdown"

                                aria-expanded="false"

                            >

                                Contact
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">

                                <li>

                                    <a className="dropdown-item" href="home">Locations</a>

                                </li>

                                <li>

                                    <a className="dropdown-item" href="home">Form</a>

                                </li>

                            </ul>

                        </li>

                    </ul>

                </div>
                <a className="navbar-brand text-dark" href="home">
                    <img src="./images/ml-logo.png" className="h-auto w-75 ms-auto d-flex" alt="" />
                </a>


            </div>

            <style>

                {`

      .navbar-nav .dropdown:hover .dropdown-menu {

        display: block;

      }

      .navbar-nav .dropdown-toggle::after {

        display: none !important;

      }

      .dropdown-menu {
        border: none;
      }
 
      `}

            </style>

        </nav>
    );
};

export default Navbar;
