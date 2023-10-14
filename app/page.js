import Image from "next/image";
import Header from "./molecules/header";
import ProductsCard from "./molecules/ProductsCard";
import Footer from "./molecules/Footer";

export default function Home() {
  return (
    <>
      <div className="!w-full h-[400px] bg-home_sec1 bg-[length:100vw_100%] bg-center bg-no-repeat md:min-h-[540px] flex flex-col justify-between">
        {/* <div></div> */}
        <Header login={false} />
        <div className="px-6 w-full text-white flex flex-col h-[75%]">
          <p className="uppercase text-[40px] font-bold">HOME APPLIANCES</p>
          <div className="w-fit h-[40px] bg-[#D0021B] cursor-pointer px-6 py-2 mt-2 uppercase flex justify-center items-center rounded-[31px]">
            LEARN MORE
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-2 md:px-4 my-2 flex flex-col items-center justify-center md:flex-row gap-1">
        <div className="w-[95%] md:w-[50%]">
          <ProductsCard />
        </div>
        <div className="w-[95%] md:w-[50%]">
          <ProductsCard />
        </div>
      </div>

      <p className="px-4 font-bold w-full flex justify-center items-center text-center text-[32px] my-10">
        Products to help make home life smart.
      </p>

      <div className="w-full flex justify-center items-center flex-wrap gap-3 my-3 px-2 md:px-4">
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard productSize={"small"} />
        </div>
      </div>

      <Footer />
    </>
  );
}
