import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItems } from "../CartItems/CartItems";

export const Header = () => {
  const cartItemsList = useSelector((state) => state.cart.items);
  const [openCart, setOpenCart] = useState(false);
  const onOpenHandle = ( ) => {
    setOpenCart(!openCart);
  }
  return (
    <header className="bg-white shadow-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <div className="flex">Home</div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            onClick={() => onOpenHandle()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cart ({cartItemsList.length})
          </Link>
        </div>
      </nav>
      {openCart && <CartItems onOpenHandle={onOpenHandle} />}
    </header>
  );
};
