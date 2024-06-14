import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import hero1 from "../assets/images/hero1.svg";
import hero2 from "../assets/images/hero2.svg";
import hero3 from "../assets/images/hero3.svg";
import shippingIcon from "../assets/images/Shipping.svg";
import paymentIcon from "../assets/images/Payment.svg";
import securityIcon from "../assets/images/Security.svg";
import guaranteeIcon from "../assets/images/Guarantee.svg";

interface Content {
  image: string;
  title: string;
  subtitle: string;
}

const contentData: Content[] = [
  {
    image: hero1,
    title: "50% OFF For Your First Shopping",
    subtitle:
      "Get high quality products at the best price. Shop now and enjoy the discount.",
  },
  {
    image: hero2,
    title: "New Arrivals Are Here",
    subtitle:
      "Discover the latest trends in our new collection. Perfect for any occasion.",
  },
  {
    image: hero3,
    title: "Exclusive Offers Just For You",
    subtitle:
      "Sign up now and get exclusive discounts on your favorite products.",
  },
];

const InfoContent: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
}> = ({ icon, title, subtitle }) => (
  <InfoContents>
    <InfoImages src={icon} alt={title} />
    <InfoTItle>{title}</InfoTItle>
    <InfoSubTitle>{subtitle}</InfoSubTitle>
  </InfoContents>
);

const Index: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const { image, title, subtitle } = contentData[currentIndex];

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <LeftContent>
            <ContentTitle>{title}</ContentTitle>
            <ContentSubTitle>{subtitle}</ContentSubTitle>
          </LeftContent>
          <RightContent>
            <ContentImage src={image} alt="hero" />
          </RightContent>
        </Wrapper>
        <Information>
          <InfoContent
            icon={shippingIcon}
            title="Free Shipping"
            subtitle="Fast & Free Shipping!"
          />
          <InfoContent
            icon={paymentIcon}
            title="Safe Payment"
            subtitle="No Worries To Pay!"
          />
          <InfoContent
            icon={securityIcon}
            title="Strong Security"
            subtitle="Strong Security System"
          />
          <InfoContent
            icon={guaranteeIcon}
            title="Back Guarantee"
            subtitle="We Guarantee For Return"
          />
        </Information>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  overflow-y: auto;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-height: 220px;
  padding: 60px 0;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const InfoContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
  width: 320px;
  height: 190px;
  padding: 24px;
  gap: 12px;
`;

const InfoImages = styled.img`
  width: 32px;
  height: 32px;
`;

const InfoTItle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #0c0c0c;
`;

const InfoSubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #72787f;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  height: 440px;
  overflow: hidden;
  position: relative;
  margin: 100px 0;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  text-align: center;
  gap: 24px;

  @media (max-width: 960px) {
    padding: 0 16px;
  }
`;

const ContentTitle = styled.h1`
  font-size: 48px;
  color: #0c0c0c;
  font-weight: 600;
  letter-spacing: 0.2rem;

  @media (max-width: 960px) {
    font-size: 32px;
  }
`;

const ContentSubTitle = styled.p`
  font-size: 18px;
  color: #72787f;
  font-weight: 400;
  letter-spacing: 0.1rem;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

export default Index;
