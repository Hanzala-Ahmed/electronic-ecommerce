import Image from "next/image";

export default function ProductsCard({ productSize }) {
  return (
    <div className="bg-[#D5E6EC] px-2 pt-2 pb-8 w-full">
      <div
        className={`w-full ${
          productSize === "small" ? "h-[300px]" : "h-[500px]"
        } bg-white flex justify-center items-center overflow-hidden`}
      >
        <Image
          src="/images/product1.png"
          alt="logo"
          width={150}
          height={150}
          layout="fixed"
          className="cursor-pointer w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <p className="text-[20px] font-semibold">Air Conditioner</p>
        <p className="text-[#8B7474] text-[14px]">Bigger, smarter,now Plus.</p>
        <p className="text-[#D0021B] font-bold text-[20px]">US$499.99</p>

        <div className="flex flex-col md:flex-row gap-3 items-center w-fit justify-between">
          <div className="w-fit h-[40px] text-xs md:text-base bg-[#88B8C8] px-6 py-2 cursor-pointer mt-2 uppercase flex justify-center items-center rounded-[31px]">
            Add to Cart
          </div>
          {!productSize && (
            <div className="w-fit h-[40px] text-xs md:text-base bg-[#D0021B] px-6 py-2 mt-2 cursor-pointer uppercase flex justify-center items-center rounded-[31px]">
              LEARN MORE
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
