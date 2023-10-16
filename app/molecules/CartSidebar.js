import Image from "next/image";

export default function CartSidebar({ setCartOpen, quantity, setQuantity }) {
  return (
    // <div className="absolute top-0 p-3 bg-[#989898] bg-opacity-50 right-0 transition ease-in-out duration-200 h-[100vh] w-[100vw] flex justify-end items-center">
    <div className="min-w-[300px] absolute right-4 top-[15px] md:w-[528px] h-[96vh] border-[0.5px] shadow-lg bg-white rounded-[20px] overflow-hidden">
      <div className="w-full h-[50px] flex justify-center items-center relative bg-[#D9D9D9]">
        <p className="text-[18px] font-semibold">Your Cart</p>
        <div
          className="absolute right-0 px-4 text-[18px] font-semibold cursor-pointer"
          onClick={() => setCartOpen(false)}
        >
          X
        </div>
      </div>

      {/* cart item start */}
      <div className="mt-[20px] flex flex-col gap-6 p-3 h-[60%] overflow-y-auto">
        <div className="w-full m-h-[182px] p-3 bg-[#D5E6EC] rounded-[14px] flex gap-[18px]">
          <Image
            src="/images/product2.png"
            alt="logo"
            width={100}
            height={100}
            layout="fixed"
            className="w-[90px] md:w-[137px] h-[110px] md:h-[150px]"
          />

          <div className="w-full flex flex-col gap-[12px] justify-center h-full">
            <p className="font-semibold text-[18px]">washing machine</p>
            <p className="font-semibold">White. 1- pack</p>
            <div className="flex-1 flex justify-between gap-2 flex-wrap">
              <p className="font-bold text-[18px]">US$40.36</p>
              <div className="w-fit min-w-[120px] p-1 rounded-[25px] overflow-hidden bg-[#88B8C8] flex h-fit">
                <div
                  className="px-3 flex justify-center items-center cursor-pointer border-r-[1px] border-r-[#000]"
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                >
                  <Image
                    src="/images/delete.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    layout="fixed"
                    className="w-[20px]"
                  />
                </div>
                <div className="px-3 flex text-[22px] font-bold flex-1 justify-center items-center border-r-[1px] border-r-[#000]">
                  {quantity}
                </div>
                <div
                  className="px-3 text-[22px] font-bold flex justify-center items-center cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 flex justify-between px-8">
        <p className="font-semibold">Subtotal</p>
        <p className="font-semibold">US$40.36</p>
      </div>

      <div className="px-8 flex flex-col justify-center items-center gap-1">
        <div className="w-full py-2 px-3 min-h-[60px] my-2 text-white bg-[#D0021B] text-[22px] font-bold flex justify-center items-center cursor-pointer">
          Checkout
        </div>
        <p
          className="text-[#D0021B] cursor-pointer"
          onClick={() => setCartOpen(false)}
        >
          Continue Shopping
        </p>
      </div>
      {/* cart item end */}
    </div>
    // </div>
  );
}
