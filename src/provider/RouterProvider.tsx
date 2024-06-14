import {
  RouterProvider as CustomProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import Index from "../pages";
import Man from "../pages/man";
import Shoes from "../pages/shoes";
import Cap from "../pages/cap";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Cart from "../pages/cart";
import { CapItem } from "../types";
import Pay from "../pages/pay";
import AdminPage from "../pages/admin";
const RouterProvider: React.FC = () => {
  const [cartItems, setCartItems] = useState<CapItem[]>([]);

  const handleAddToCart = (item: CapItem) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.src === item.src
      );
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.src === item.src
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevCartItems) => {
      const item = prevCartItems[index];
      if (item.quantity > 1) {
        return prevCartItems.map((cartItem, i) =>
          i === index
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        const newCartItems = [...prevCartItems];
        newCartItems.splice(index, 1);
        return newCartItems;
      }
    });
  };

  const router = createBrowserRouter([
    {
      children: [
        { path: "/", element: <Index /> },
        {
          path: "/Man",
          element: (
            <Man cartItems={cartItems} handleAddToCart={handleAddToCart} />
          ),
        },
        {
          path: "/Shoes",
          element: (
            <Shoes cartItems={cartItems} handleAddToCart={handleAddToCart} />
          ),
        },
        {
          path: "/Cap",
          element: (
            <Cap cartItems={cartItems} handleAddToCart={handleAddToCart} />
          ),
        },
        { path: "/Profile", element: <Profile /> },
        {
          path: "/Cart",
          element: (
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ),
        },
        {
          path: "/pay",
          element: <Pay />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin/:randomString",
      element: <AdminPage />,
    },
  ]);

  return <CustomProvider router={router}></CustomProvider>;
};

export default RouterProvider;
