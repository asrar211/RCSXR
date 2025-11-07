import { IconPlus } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export const Cart = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleClick = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <>
      {show && (
        <div className="flex">
          <div
            onClick={handleClick}
            className="bg-black/40 w-screen h-screen fixed z-100 top-0 left-0"
          ></div>

          <div className="fixed xl:w-[400px] xl:h-screen bg-white overflow-y-scroll xl:top-0 xl:right-0 bottom-0 z-101 h-[60%] w-full shadow-[inset_1px_-1px_5px_rgba(0,0,0,0.5)] rounded-t-xl xl:rounded-none">
            <div className="flex justify-between mx-5 mt-5">
              <h1 className="font-medium text-[15px]">Shopping Cart</h1>
              <span onClick={handleClick} className="rotate-45 cursor-pointer">
                <IconPlus size={17} color="gray" />
              </span>
            </div>

            <div className="flex flex-col mt-10">
              <h1 className="text-[19px] font-medium mx-5">Your Cart</h1>
              <p className="text-sm text-neutral-500 font-light mx-5">
                You have 3 items in your cart
              </p>
              <hr className="text-neutral-200 w-full h-px mt-5" />
            </div>

            <div className="mt-5 flex flex-col gap-4 ">
              <CartItems />
              <CartItems />
              <CartItems />
            </div>

            <hr className="h-px w-full mt-5 text-neutral-200" />

            <div className="mt-5">
              <div className="flex justify-between mx-5">
                <h4 className="font-light text-neutral-500 text-[15px]">
                  Subtotal
                </h4>
                <p className="text-[15px] font-medium">$799.99</p>
              </div>
              <div className="flex justify-between mx-5 mt-2">
                <h4 className="font-light text-neutral-500 text-[15px]">
                  Discount
                </h4>
                <p className="text-[15px] font-medium">$100</p>
              </div>

              <hr className="h-px w-[90%] mt-5 text-neutral-200 mx-auto" />

              <div className="flex justify-between mx-5 mt-3">
                <h4 className="font-medium text-[17px]">Total</h4>
                <p className="font-medium text-[17px]">$699.99</p>
              </div>

              <div className="flex justify-center items-center">
                <button className="bg-neutral-800 text-neutral-50 w-[89%] mx-auto mt-5 py-2.5 rounded-md text-sm hover:bg-neutral-700 transition-all duration-300 ease-in-out">
                  Checkout
                </button>
              </div>

              <div className="flex justify-between mx-5 my-3">
                <button className="px-4 text-sm py-1.5 border border-neutral-200 rounded-md shadow-md hover:shadow-lg hover:bg-neutral-100">
                  Continue Shopping
                </button>
                <button className="px-4 text-sm py-1.5 border border-neutral-200 rounded-md shadow-md hover:shadow-lg hover:bg-neutral-100">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function CartItems() {
  return (
    <div className="shadow-md border border-neutral-200 rounded-xl xl:w-[350px] xl:mx-auto p-3 hover:bg-neutral-50 transition-all duration-300 ease-in-out mx-5">
      <div className="flex items-center gap-3 relative">
        <img
          className="w-22 h-22 object-cover shadow-sm rounded-md"
          src="https://img.freepik.com/free-photo/clothes-young-childhood-shoe-new_1203-5970.jpg"
          alt="shoe"
        />
        <div className="flex flex-col">
          <div className="">
            <h4 className="font-medium text-[14px]">Premium Shoes</h4>
            <IconPlus
              size={17}
              color="gray"
              className="rotate-45 absolute top-0 right-0 cursor-pointer"
            />
          </div>
          <p className="text-sm text-neutral-500">Shoes</p>
          <div className="flex justify-between items-end gap-10">
            <div className="flex items-center gap-1 rounded-md border border-neutral-300 w-fit mt-2">
              <button className="py-1 px-2 border-r border-neutral-300 text-neutral-500 hover:bg-neutral-100 rounded-tl-md rounded-bl-md transition-all duration-300 ease-in-out">
                -
              </button>
              <p className="px-2 text-sm">1</p>
              <button className="border-l py-1 px-2 border-neutral-300 text-neutral-500 hover:bg-neutral-100 rounded-tr-md rounded-br-md transition-all duration-300 ease-in-out">
                +
              </button>
            </div>
            <p className="text-[14px] font-light">$199.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
