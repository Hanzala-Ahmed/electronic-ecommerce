import Image from "next/image";
import FAQ from "../atoms/faq";
import MenuIcon from "../icons/menuIcon";
import Footer from "../molecules/Footer";
import Header3 from "../molecules/header3";

export default function Help() {
  return (
    <>
      <div className="!w-full h-[400px] bg-help_sec1 bg-[length:100vw_100%] bg-center bg-no-repeat md:min-h-[540px] flex flex-col justify-between">
        <Header3 login={false} />
        <div className="px-6 w-full text-[#5F5D5D] flex flex-col h-[70%] items-center">
          <p className="uppercase text-[40px] font-bold w-full flex justify-center">
            How can we help?
          </p>
          <div className="w-[95%] md:w-[60%] h-[50px] bg-white cursor-pointer px-3 py-2 mt-2 flex relative gap-1 justify-end">
            <input
              type="text"
              className="outline-none border-none px-3 h-full w-[97%]"
              placeholder="Search"
            />
            <Image
              src={"/images/searchIcon.svg"}
              width={30}
              height={30}
              className="w-[20px] absolute left-4 top-3"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-4 md:px-12 my-2 flex flex-col gap-1 mt-14 mb-8">
        <div className="flex gap-4 h-fit items-center font-bold">
          <MenuIcon size={30} color={"#000"} />
          <p className="text-[20px]">Categories</p>
        </div>

        <div className="flex flex-wrap justify-center w-full gap-8 my-12">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21,
          ].map((item, index) => {
            return (
              <div className="w-full md:w-[46%]">
                <FAQ
                  title={"Lock"}
                  description={
                    "Amet minim mollit non deserunt ullamco est sit do amet sint. Velit officia consequat duis enim velit mollit."
                  }
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-12 mb-6">
          <Image
            src={"/images/star.svg"}
            width={30}
            height={30}
            className="w-[20px]"
          />
          <p className="text-[24px] font-semibold">Promoted articles</p>
        </div>

        <div className="flex w-full justify-center items-center gap-7 md:gap-14 h-fit flex-col md:flex-row">
          <div className="flex h-full items-center text-[24px]">
            Submit a request
          </div>
          <div className="w-[70%] md:w-[2px] h-[2px] md:h-28 bg-[#D0021B]" />
          <div className="flex gap-3">
            <Image
              src={"/images/communityIcon.svg"}
              width={30}
              height={30}
              className="w-[40px]"
            />
            <p className="text-[24px]">Community</p>
          </div>
        </div>
      </div>

      <Footer links={false} />
    </>
  );
}
