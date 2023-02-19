import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderText>GarliCart</HeaderText>
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
  background-color: #c98080;
  padding: 1rem 2rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.div``;

const Navbar = styled.div`
  display: flex;
  list-style: none;
  gap: 1rem;
`
