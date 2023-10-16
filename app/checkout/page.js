import Link from "next/link";
import LabelInput from "../atoms/labelInput";

export default function Checkout() {
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
        <Link href={"/checkout/information"} className="cursor-pointer">
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
      {/* breadcrumbs end */}

      {/* checkout form */}
      <div className="w-full my-4 flex justify-center px-4 md:px-12 flex-col items-center">
        <div className="md:w-[50%] w-full">
          <p className="my-6 text-[22px] font-bold">Contact</p>
          <LabelInput
            placeholder="Enter your email"
            type="email"
            className="rounded-[14px]"
          />
          <p className="my-4 text-[22px] font-bold">Shipping Address</p>
          <div className="flex flex-col gap-4">
            <LabelInput
              placeholder="Country/region"
              type="text"
              className="rounded-[14px]"
            />
            <div className="flex gap-3 flex-wrap justify-between">
              <div className="w-full md:w-[45%]">
                <LabelInput
                  placeholder="FIrst Name"
                  type="text"
                  className="rounded-[14px]"
                />
              </div>
              <div className="w-full md:w-[45%]">
                <LabelInput
                  placeholder="Last Name"
                  type="text"
                  className="rounded-[14px]"
                />
              </div>
            </div>
            <LabelInput
              placeholder="Address"
              type="text"
              className="rounded-[14px]"
            />
            <div className="flex gap-3 flex-wrap justify-between">
              <div className="w-full md:w-[31%]">
                <LabelInput
                  placeholder="City"
                  type="text"
                  className="rounded-[14px] text-center"
                />
              </div>
              <div className="w-full md:w-[31%]">
                <LabelInput
                  placeholder="City"
                  type="text"
                  className="rounded-[14px] text-center"
                />
              </div>
              <div className="w-full md:w-[31%]">
                <LabelInput
                  placeholder="Zip Code"
                  type="text"
                  className="rounded-[14px] text-center"
                />
              </div>
            </div>
            <LabelInput
              placeholder="Phone"
              type="text"
              className="rounded-[14px]"
            />
          </div>
        </div>
        <div className="my-2 flex gap-2 md:w-[50%] w-full">
          <input
            className="rounded-[14px] border-[1px] border-[#D6D3D3] px-4 py-2 outline-none"
            type="checkbox"
            name="save-info"
            id="save-info"
          />
          <label htmlFor="save-info" className="flex-1">
            Save this information for next time
          </label>
        </div>

        <div className="flex justify-between w-full items-center my-4 gap-2 md:w-[50%] flex-wrap">
          <Link
            href={"#"}
            className="gap-2 flex w-fit text-[#D0021B] font-semibold cursor-pointer"
          >
            <p>{`>`}</p>
            <p className="">Return to cart</p>
          </Link>
          <div className="w-fit py-2 px-3 h-fit my-2 rounded-[11px] text-white bg-[#D0021B] font-semibold flex justify-center items-center cursor-pointer">
            Continue to checkout
          </div>
        </div>
      </div>
    </div>
  );
}
