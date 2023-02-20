import styled from "styled-components";
import { Link } from "react-router-dom";
import bigGarlic from "../assets/garlic-landing.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <Hero>
          <h1>
            Just <u>garlic</u>.
          </h1>
          <p>The best garlic around here. Straight from my backyard. </p>
          <Link to="/shop">
            <Button className="shop-now-btn button-59">Go to shop</Button>
          </Link>
        </Hero>
        <HomeImg />
      </Container>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-color: #000000;
  color: white;
  flex: 1;
  height: 80%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Hero = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  > h1 {
    font-size: 10rem;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  text-decoration: none;
  background: #ffffff;
  color: #000000;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  box-shadow: 5px 5px #888888;
  &:hover {
    background: #791374;
    color: white;
  }
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
  &:active {
    transform: scale(0.99);
  }
`;

const HomeImg = styled.div`
  background-image: url(${bigGarlic});
  background-size: cover;
  height: 100%;
  width: 50%;
  box-shadow: inset 150px 100px 100px -16px rgba(0, 0, 0, 1);
`;
