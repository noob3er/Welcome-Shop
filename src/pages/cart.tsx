import styled from "styled-components";
import { CapItem } from "../types";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

interface CartProps {
  cartItems: CapItem[];
  handleRemoveFromCart: (index: number) => void;
}

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
  color: #0c0c0c;
  font-weight: 600;
  margin-top: 40px;
`;

const CartItemsContainer = styled.div`
  width: 90%;
  max-width: 860px;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: #888;
`;

const ItemQuantity = styled.p`
  font-size: 16px;
  color: #333;
`;

const ItemTotalPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const EmptyCartMessage = styled.p`
  font-size: 24px;
  color: #555;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: flex-start;
`;

const CheckoutButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Cart: React.FC<CartProps> = ({ cartItems, handleRemoveFromCart }) => {
  const navigate = useNavigate();
  const displayedItems = cartItems.slice(0, 5);

  return (
    <>
      <Navbar />
      <Container>
        <Title>Your Cart</Title>
        <CartItemsContainer>
          {cartItems.length === 0 ? (
            <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
          ) : (
            <>
              {displayedItems.map((item, index) => (
                <CartItemWrapper key={index}>
                  <ItemImage
                    src={`/src/assets/images/${item.src}`}
                    alt={`Cap ${index + 1}`}
                  />
                  <ItemDetails>
                    <ItemName>{`Item ${index + 1}`}</ItemName>
                    <ItemPrice>{item.price}</ItemPrice>
                    <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
                    <ItemTotalPrice>
                      Total: $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </ItemTotalPrice>
                    <RemoveButton onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </RemoveButton>
                  </ItemDetails>
                </CartItemWrapper>
              ))}
              {cartItems.length > 0 && (
                <CheckoutButton onClick={() => navigate("/pay")}>
                  Proceed to Checkout
                </CheckoutButton>
              )}
            </>
          )}
        </CartItemsContainer>
      </Container>
    </>
  );
};

export default Cart;
