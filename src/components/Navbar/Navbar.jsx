import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background: white;

  .logo {
    padding: 15px 0;
    font-weight: Bold;
  }
  @media (max-width: 760px) {
    position: absolute;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">AJAY KANDI</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
