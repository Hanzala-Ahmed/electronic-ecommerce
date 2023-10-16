import Link from "next/link";

export default function Information() {
  return (
    <div className="w-full px-4 md:px-12">
      <p className="w-full p-6 flex justify-center items-center text-center text-[36px] font-bold text-[#D0021B] uppercase">
        HOME APPILANCES
      </p>

      {/* breadcrumbs */}
      <div className="mt-[12px] px-4 md:px-20 flex gap-1.5 flex-wrap">
        <Link href={"/checkout"} className="cursor-pointer text-[#D0021B]">
          Cart
        </Link>
        <p className="font-bold">{`>`}</p>
        <Link
          href={"/checkout/information"}
          className="cursor-pointer text-[#D0021B]"
        >
          Information
        </Link>
        <p className="font-bold">{`>`}</p>
        <Link href={"/checkout/shipping"} className="cursor-pointer">
          Shipping
        </Link>
        <p className="font-bold">{`>`}</p>
        <Link href={"#"} className="cursor-pointer">
          Payment
        </Link>
      </div>

      <div className="flex flex-col items-center mt-[50px]">
        <div className="w-full md:w-[70%] border-[1px] border-[#8B8989] rounded-[20px] px-6 py-5">
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex-1 flex gap-8">
              <p className="">Contact</p>
              <p className="">abcdef@gmail.com</p>
            </div>
            <p className="cursor-pointer text-[#D0021B]">Change</p>
          </div>
          <div className="h-[1px] bg-[#8B8989] my-3 w-[80%]" />
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex-1 flex gap-8">
              <p className="">Ship to</p>
              <p className="">
                house no 231,23rd street , network TX 75500, United State
              </p>
            </div>
            <p className="cursor-pointer text-[#D0021B]">Change</p>
          </div>
        </div>
        <div className="w-full md:w-[60%] flex gap-3 mt-[120px] mb-20 flex-col">
          <p className="text-[22px] font-bold">Shipping Method</p>
          <div className="border-[1px] border-[#8B8989] rounded-[20px] px-6 py-5 flex gap-3 justify-between">
            <div className="flex gap-3 flex-1">
              <input
                className="rounded-[14px] border-[1px] h-[30px] w-[30px] border-[#D6D3D3] outline-none accent-[#D0021B]"
                type="radio"
                name="save-info"
                id="save-info"
              />
              <label htmlFor="save-info">
                <p className="text-[18px] cursor-pointer">
                  Standard Shipping(5-7 business days)
                </p>
              </label>
            </div>
            <p className="text-[18px] font-bold">Free</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center my-4 gap-2 mt-[60px] md:w-[50%] flex-wrap">
          <Link
            href={"#"}
            className="gap-2 flex w-fit text-[#D0021B] font-semibold cursor-pointer"
          >
            <p>{`>`}</p>
            <p className="">Return to cart</p>
          </Link>
          <div className="w-fit py-2 px-3 h-fit my-2 rounded-[11px] text-white bg-[#D0021B] font-semibold flex justify-center items-center cursor-pointer">
            Continue to payment
          </div>
        </div>
      </div>
    </div>
  );
}
