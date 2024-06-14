import styled from "styled-components";
import { CapItem } from "../types";
import Navbar from "../components/Navbar";

interface CapProps {
  cartItems: CapItem[];
  handleAddToCart: (item: CapItem) => void;
}

const CapItems: CapItem[] = [
  { src: "Cap1.svg", price: "$19.99", quantity: 1 },
  { src: "Cap2.svg", price: "$24.99", quantity: 1 },
  { src: "Cap3.svg", price: "$29.99", quantity: 1 },
  { src: "Cap4.svg", price: "$34.99", quantity: 1 },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #000;
  margin-top: 80px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const CapItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CapImage = styled.img`
  width: 260px;
  height: auto;
  border-radius: 20px;
`;

const HoverContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;

  ${CapItemWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #d83f87;
  margin-bottom: 8px;
`;

const AddToCartButton = styled.button`
  background-color: #d83f87;
  color: #fff;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff69b4;
  }
`;

const Cap: React.FC<CapProps> = ({ handleAddToCart }) => {
  const addToCartAndNavigate = (item: CapItem) => {
    handleAddToCart(item);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Cap </Title>
        <Content>
          {CapItems.map((item, index) => (
            <CapItemWrapper key={index}>
              <CapImage
                src={`/src/assets/images/${item.src}`}
                alt={`Cap ${index + 1}`}
              />
              <HoverContent>
                <Price>{item.price}</Price>
                <AddToCartButton onClick={() => addToCartAndNavigate(item)}>
                  Add to Cart
                </AddToCartButton>
              </HoverContent>
            </CapItemWrapper>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Cap;
