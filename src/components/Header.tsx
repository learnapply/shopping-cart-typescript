import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/">
          <HeaderText>garliCart</HeaderText>
        </Link>
        <Navbar>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #000000;
  padding: 1rem 3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  > a {
    text-decoration: unset;
    color: white;
  }
`;

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Navbar = styled.div`
  display: flex;
  list-style: none;
  gap: 3rem;
  > a {
    text-decoration: unset;
    color: white;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
