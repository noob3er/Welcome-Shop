import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

export default function AdminPage() {
  const { randomString } = useParams();
  const storedRandomString = localStorage.getItem("adminRandomString");

  if (randomString !== storedRandomString) {
    return <Navigate to="/login" replace />;
  }

  const storedPaymentDetails = localStorage.getItem("paymentDetails");
  const paymentDetails = storedPaymentDetails
    ? JSON.parse(storedPaymentDetails)
    : null;

  if (!paymentDetails) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Content>
        <Title>Payment Details</Title>
        <Detail>
          <Label>Card Number:</Label>
          <Value>{paymentDetails.cardNumber}</Value>
        </Detail>
        <Detail>
          <Label>Name on Card:</Label>
          <Value>{paymentDetails.nameOnCard}</Value>
        </Detail>
        <Detail>
          <Label>Expiration Date:</Label>
          <Value>{paymentDetails.expirationDate}</Value>
        </Detail>
        <Detail>
          <Label>CVC:</Label>
          <Value>{paymentDetails.cvc}</Value>
        </Detail>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Content = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: 600;
  color: #555;
`;

const Value = styled.span`
  color: #777;
`;
