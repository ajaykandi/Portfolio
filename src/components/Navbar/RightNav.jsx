import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  .active {
    border-bottom: 1px solid blue;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    text-align: center;
    a {
      color: white;
      border: none;
    }
    a:hover {
      color: lightblue;
    }
  }

  @media (max-width: 425px) {
    width: 70%;
    .active {
      border: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        hashSpy={true}
        // duration={10}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        // duration={10}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        hashSpy={true}
      >
        Portfolio
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
      >
        Contact
      </Link>
    </Ul>
  );
};

export default RightNav;
