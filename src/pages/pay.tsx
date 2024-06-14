import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 10);
};

export default function Pay() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const paymentDetails = {
      cardNumber: formData.get("cardNumber") as string,
      nameOnCard: formData.get("nameOnCard") as string,
      expirationDate: formData.get("expirationDate") as string,
      cvc: formData.get("cvc") as string,
    };

    const randomString = generateRandomString();

    console.log(`/admin/${randomString}`);

    toast.success("결제가 완료되었습니다!", {
      autoClose: 2000,
    });

    localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));
    localStorage.setItem("adminRandomString", randomString);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <Container>
        <PaymentForm onSubmit={handleSubmit}>
          <FormTitle>Payment Details</FormTitle>
          <FormWrapper>
            <FormGroup>
              <Label>
                <Icon className="fas fa-credit-card"></Icon> Card Number
              </Label>
              <Input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                pattern="\d{4} \d{4} \d{4} \d{4}"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>
                <Icon className="fas fa-user"></Icon> Name on Card
              </Label>
              <Input
                type="text"
                name="nameOnCard"
                placeholder="John Doe"
                pattern="[a-zA-Z\s]+"
                required
              />
            </FormGroup>
            <FormRow>
              <FormGroup>
                <Label>
                  <Icon className="fas fa-calendar-alt"></Icon> Expiration Date
                </Label>
                <Input
                  type="text"
                  name="expirationDate"
                  placeholder="MM/YY"
                  pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <Icon className="fas fa-lock"></Icon> CVC
                </Label>
                <Input
                  type="text"
                  name="cvc"
                  placeholder="123"
                  pattern="\d{3,4}"
                  required
                />
              </FormGroup>
            </FormRow>
            <SubmitButton type="submit">Pay Now</SubmitButton>
          </FormWrapper>
        </PaymentForm>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

const PaymentForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

const Icon = styled.i`
  margin-right: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
