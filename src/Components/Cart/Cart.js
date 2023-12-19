import React, { useState } from "react";
import { data } from "../../DataBase/database";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { CartItems } from "../CartItems/CartItems";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementItems,
  IncrementItems,
  addItems,
} from "../../Redux/cart/cartSlice";

export const Cart = () => {
  const onAddReduxHandler = (items) => {
    dispatch(addItems(items));
  };

  const dispatch = useDispatch();

  const incCount = (index) => {
    dispatch(IncrementItems(index));
  };

  const deCount = () => {
    dispatch(DecrementItems());
  };

  const cartItemsList = useSelector((state) => state.cart.items);

  const modifiedDataHandleFunction = () => {
    const modifiedData = data.map((dataObj) => {
      cartItemsList.map((cartItemsListObj) => {});
    });
  }

  return (
    <div className="flex">
      <div>
        {data && (
          <div className="grid grid-cols-4 gap-2 mx-auto px-4 md:px-12 w-full m-3 ">
            {data.map((dataObj, index) => {
              return (
                <div key={index}>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      className="rounded-t-lg w-56 item-centre flex"
                      src={dataObj.image}
                      alt="restaurantsObj.info.name"
                    />
                    <header className="leading-tight p-2 md:p-4">
                      <Link
                        to={`/cartItems/${dataObj.id}`}
                        className="text-lg font-bold opacity-75 curser-pointer"
                      >
                        {dataObj.title}
                      </Link>
                      <div className="flex font-bold opacity-75">
                        <Rating />
                        <p className="text-sm mx-1">{dataObj.rating.rate}.</p>
                      </div>

                      <div className="text-gray-500 text-sm">
                        {dataObj.description}
                      </div>
                    </header>
                    {dataObj.showAddButton ? (
                      <div className="flex justify-center items-center">
                        <div className="pr-8 flex ">
                          <span
                            onClick={() => deCount(dataObj.id)}
                            className="font-semibold"
                          >
                            -
                          </span>
                          <input
                            type="text"
                            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value={dataObj.quantity}
                          />
                          <span
                            className="font-semibold"
                            onClick={() => incCount(dataObj.id)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          onAddReduxHandler(dataObj);
                        }}
                        className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full m-2"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <CartItems />
      </div>
    </div>
  );
};
