import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavItems = ["Home", "Man", "Shoes", "Cap"];

const Navbar = () => {
  const [profileClicks, setProfileClicks] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    if (profileClicks === 0) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
    setProfileClicks(profileClicks + 1);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setProfileClicks(0);
    }
  }, [location]);

  return (
    <Container>
      <Wrapper>
        <LeftContent>
          <Logo src="../src/assets/images/Bag.svg" alt="logo" />
          <Title>Welcome Shop</Title>
        </LeftContent>
        <Contents>
          {NavItems.map((item, index) => (
            <NavItem
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </NavItem>
          ))}
        </Contents>
        <RightContents>
          <ProfileLink onClick={handleProfileClick}>
            <Profile src="../src/assets/images/Profile.svg" alt="profile" />
          </ProfileLink>
          <LinkTo to="/cart">
            <Cart src="../src/assets/images/Cart.svg" alt="cart" />
          </LinkTo>
        </RightContents>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  box-shadow: 0 5px 5px 0 rgba(9, 5, 29, 0.171) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;
`;

const LinkTo = styled(Link)`
  width: 24px;
  height: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  position: relative;

  @media (max-width: 960px) {
    padding: 0 20px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #0c0c0c;
  font-weight: 600;
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #72787f;
  gap: 28px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 960px) {
    gap: 10px;
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  &:hover {
    color: #000;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: #000;
    }
  }
`;

const RightContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 960px) {
    gap: 10px;
  }
`;

const ProfileLink = styled.div`
  cursor: pointer;
`;

const Profile = styled.img`
  width: 30px;
  height: 24px;
`;

const Cart = styled.img`
  width: 24px;
  height: 24px;
`;
