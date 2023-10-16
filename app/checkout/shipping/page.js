import LabelInput from "@/app/atoms/labelInput";
import Image from "next/image";
import Link from "next/link";

export default function Shipping() {
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
        <Link
          href={"/checkout/shipping"}
          className="cursor-pointer text-[#D0021B]"
        >
          Shipping
        </Link>
        <p className="font-bold">{`>`}</p>
        <Link href={"#"} className="cursor-pointer">
          Payment
        </Link>
      </div>

      <div className="flex flex-col items-center mt-[50px]">
        <div className="w-full md:w-[70%] border-[1px] flex flex-col gap-3 border-[#8B8989] rounded-[20px] px-6 py-5">
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex-1 flex gap-8">
              <p className="">Contact</p>
              <p className="">abcdef@gmail.com</p>
            </div>
            <p className="cursor-pointer text-[#D0021B]">Change</p>
          </div>
          <div className="h-[1px] bg-[#8B8989] my-1 w-[80%]" />
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex-1 flex gap-8">
              <p className="">Ship to</p>
              <p className="">
                house no 231,23rd street , network TX 75500, United State
              </p>
            </div>
            <p className="cursor-pointer text-[#D0021B]">Change</p>
          </div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex-1 flex gap-8">
              <p className="">Method</p>
              <p className="">
                Standard Shipping(5-7 business days) ·
                <span className="font-bold text-[18px]"> Free</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] flex gap-3 mt-[120px] mb-20 flex-col">
          <div>
            <p className="text-[22px] font-bold">Payment</p>
            <p className="text-sm">
              All transactions are secure and encrypted.
            </p>
          </div>
          <div className="rounded-[20px] overflow-hidden border-[1px] border-[#8B8989] ">
            <div className="border-b-[1px] border-[#8B8989] rounded-t-[20px] px-6 py-5 flex gap-3 flex-wrap justify-between">
              <div className="flex gap-3 flex-1">
                <input
                  className="rounded-[14px] border-[1px] h-[30px] w-[30px] border-[#D6D3D3] outline-none accent-[#D0021B]"
                  type="radio"
                  name="save-info"
                  id="save-info"
                />
                <label htmlFor="save-info">
                  <p className="text-[18px] cursor-pointer font-bold">
                    Credit Card
                  </p>
                </label>
              </div>
              <div className="flex gap-2 items-center flex-wrap">
                <Image
                  src="/images/amex.png"
                  alt="logo"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="w-fit"
                />
                <Image
                  src="/images/visa.png"
                  alt="logo"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="w-fit"
                />
                <Image
                  src="/images/mastercard.png"
                  alt="logo"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="w-fit"
                />
                <Image
                  src="/images/jcb.png"
                  alt="logo"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="w-fit"
                />
                <p className="">and more</p>
              </div>
            </div>
            <div className="w-full bg-[#F8F8F8] px-2 md:px-10 py-8 gap-4 flex flex-col flex-wrap">
              <LabelInput
                placeholder="Card number"
                type="text"
                className="rounded-[14px] py-3"
              />
              <LabelInput
                placeholder="Name on card"
                type="text"
                className="rounded-[14px] py-3"
              />
              <div className="flex gap-3 flex-wrap justify-between">
                <div className="w-full md:w-[46%]">
                  <LabelInput
                    placeholder="Expiration date (MM/YY)"
                    type="text"
                    className="rounded-[14px] py-3"
                  />
                </div>
                <div className="w-full md:w-[46%]">
                  <LabelInput
                    placeholder="Security code"
                    type="text"
                    className="rounded-[14px] py-3"
                  />
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-[#8B8989] rounded-b-[20px] px-6 py-5 flex gap-3 flex-wrap justify-between">
              <div className="flex gap-3 flex-1">
                <input
                  className="rounded-[14px] border-[1px] h-[30px] w-[30px] border-[#D6D3D3] outline-none accent-[#D0021B]"
                  type="radio"
                  name="save-info"
                  id="save-info"
                />
                <label htmlFor="save-info">
                  <Image
                    src="/images/paypal.png"
                    alt="logo"
                    width={60}
                    height={60}
                    layout="fixed"
                    className="w-fit"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] flex gap-3 mb-20 flex-col">
          <div>
            <p className="text-[22px] font-bold">Billing address</p>
            <p className="text-sm">
              Select the address that matches your card or payment method.
            </p>
          </div>
          <div className="border-[1px] border-[#8B8989] rounded-[20px] py-5 flex flex-col gap-3 justify-between">
            <div className="flex gap-3 flex-1 px-6">
              <input
                className="rounded-[14px] border-[1px] h-[30px] w-[30px] border-[#D6D3D3] outline-none accent-[#D0021B]"
                type="radio"
                name="save-info"
                id="save-info"
              />
              <label htmlFor="save-info">
                <p className="text-[18px] cursor-pointer">
                  Same as shipping address
                </p>
              </label>
            </div>
            <div className="w-full h-[1px] bg-[#996666] my-2" />
            <div className="flex gap-3 flex-1 px-6">
              <input
                className="rounded-[14px] border-[1px] h-[30px] w-[30px] border-[#D6D3D3] outline-none accent-[#D0021B]"
                type="radio"
                name="save-info"
                id="save-info"
              />
              <label htmlFor="save-info">
                <p className="text-[18px] cursor-pointer">
                  Use a different billing address
                </p>
              </label>
            </div>
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
