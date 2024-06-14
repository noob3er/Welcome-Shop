import styled from "styled-components";
import { PantsItem } from "../types";
import Navbar from "../components/Navbar";

interface CapProps {
  cartItems: PantsItem[];
  handleAddToCart: (item: PantsItem) => void;
}

const ManItems: PantsItem[] = [
  { src: "Man1.svg", price: "$19.99", quantity: 1 },
  { src: "Man2.svg", price: "$24.99", quantity: 1 },
  { src: "Man3.svg", price: "$29.99", quantity: 1 },
  { src: "Man4.svg", price: "$34.99", quantity: 1 },
  { src: "Pants1.svg", price: "$34.99", quantity: 1 },
  { src: "Pants2.svg", price: "$34.99", quantity: 1 },
  { src: "Pants3.svg", price: "$34.99", quantity: 1 },
  { src: "Pants4.svg", price: "$34.99", quantity: 1 },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #f3f3f3, #ffffff);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-top: 80px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  width: 90%;
`;

const ManItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ManImage = styled.img`
  width: 260px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HoverContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  width: 80%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;

  ${ManItemWrapper}:hover & {
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

const Man: React.FC<CapProps> = ({ handleAddToCart }) => {
  const addToCartAndNavigate = (item: PantsItem) => {
    handleAddToCart(item);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Men's Fashion</Title>
        <Content>
          {ManItems.map((item, index) => (
            <ManItemWrapper key={index}>
              <ManImage
                src={`/src/assets/images/${item.src}`}
                alt={`Man ${index + 1}`}
              />
              <HoverContent>
                <Price>{item.price}</Price>
                <AddToCartButton onClick={() => addToCartAndNavigate(item)}>
                  Add to Cart
                </AddToCartButton>
              </HoverContent>
            </ManItemWrapper>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Man;
