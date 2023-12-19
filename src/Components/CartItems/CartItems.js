import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecrementItems, IncrementItems } from "../../Redux/cart/cartSlice";

export const CartItems = () => {
  const cartItemsList = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const incCount = (index, cartItemsObj) => {
    dispatch(IncrementItems(index, cartItemsObj));
  };

  const deCount = (index) => {
    dispatch(DecrementItems(index));
  };

  return (
    <>
      {cartItemsList && (
        <div>
          <div className="h-screen">
            <div className="py-12">
              <div className="max-w-md mx-auto  shadow-lg rounded-lg  md:max-w-5xl">
                <div className="md:flex ">
                  <div className="w-full p-4 px-5 py-5">
                    <div className="col-span-2 p-5">
                      <h1 className="text-xl font-bold">Shopping Cart</h1>
                      {cartItemsList.map((cartItemsObj, index) => {
                        return (
                          <div
                            className="items-center mt-6 pt-6 p-9"
                            key={index}
                          >
                            <div className="flex items-center">
                              <img
                                src={cartItemsObj.image}
                                alt={cartItemsObj.id}
                                width="160"
                                className="rounded-xl"
                              />

                              <div className="flex flex-col ml-3">
                                <span className="md:text-md font-bold text-sm">
                                  {cartItemsObj.title}
                                </span>
                              </div>
                            </div>

                            <div className="flex justify-center items-center">
                              <div className="pr-8 flex ">
                                <button
                                  onClick={() => deCount(cartItemsObj.id)}
                                  className="font-semibold"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                  value={cartItemsObj.quantity}
                                />
                                <button
                                  className="font-semibold"
                                  onClick={() =>
                                    incCount(cartItemsObj.id, cartItemsObj)
                                  }
                                >
                                  +
                                </button>
                              </div>

                              <div className="pr-8 ">
                                <span className="text-gray-900 text-sm">
                                  ₹ {cartItemsObj.price}
                                </span>
                              </div>
                              <div>
                                <i className="fa fa-close text-xs font-medium"></i>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
