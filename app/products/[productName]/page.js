"use client";
import LabelInput from "@/app/icons/labelInput";
import Tick from "@/app/icons/tick";
import Footer from "@/app/molecules/Footer";
import ProductsCard from "@/app/molecules/ProductsCard";
import Header2 from "@/app/molecules/header2";
import Image from "next/image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const bundleOtions = [
  {
    title: "1-Pack",
    price: 499.99,
  },
  {
    title: "2-Pack",
    price: 499.99,
  },
  {
    title: "4-Pack",
    price: 499.99,
  },
];

const checkoutImage = [
  {
    src: "/images/amex.png",
  },
  {
    src: "/images/vLogo.png",
  },
  {
    src: "/images/deal.png",
  },
  {
    src: "/images/applePay.png",
  },
  {
    src: "/images/giroPay.png",
  },
  {
    src: "/images/discover.png",
  },
  {
    src: "/images/visa.png",
  },
  {
    src: "/images/mastercard.png",
  },
  {
    src: "/images/debitcard.png",
  },
  {
    src: "/images/card.png",
  },
  {
    src: "/images/googlePay.png",
  },
  {
    src: "/images/jcb.png",
  },
];

const features = [
  {
    heading: "FAST SHIPPING",
    src: "/images/fastShipping.png",
  },
  {
    heading: "30-DAY MONEY BACK GUARANTEE",
    src: "/images/30Day.png",
  },
  {
    heading: "1 YEAR WARRANTY",
    src: "/images/warranty.png",
  },
  {
    heading: "CUSTOMER SUPPORT",
    src: "/images/customerSupport.png",
  },
];

export default function ProductDetails() {
  const [reviewsCount, setReviewsCount] = useState(432);
  const [activeTab, setActiveTab] = useState("description");
  const [color, setColor] = useState("white");
  const [bundle, setBundle] = useState("1-Pack");
  const [quantity, setQuantity] = useState(1);

  console.log("activeTab", activeTab);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header2 />

      <div className="w-full flex md:flex-row flex-col justify-between px-6 md:px-12 my-14 gap-5">
        <div className="w-[98%] md:w-[48%] flex justify-center items-center bg-white">
          <Image
            src="/images/product1.png"
            alt="logo"
            width={500}
            height={500}
            layout="fixed"
            className=""
          />
        </div>
        <div className="w-[98%] md:w-[48%] flex flex-col">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold text-[#5F5D5D] uppercase">
              Washing Machine
            </p>
            <p className="text-[#D0021B] font-bold text-[20px]">US$499.99</p>

            <div className="flex gap-1">
              <Rating
                // onClick={handleRating}
                // onPointerEnter={onPointerEnter}
                // onPointerLeave={onPointerLeave}
                // onPointerMove={onPointerMove}
                readonly={true}
                initialValue={4}
                size={20}
                fillColor="#f1a545"
                style={{ display: "flex", justifyContent: "center" }}
              />
              <p className="text-[14px] text-[#5F5D5D]">
                {reviewsCount} reviews
              </p>
            </div>
          </div>{" "}
          {/* tabs styling */}
          <div className="w-full flex border-b-[1px] border-[#D9D9D9] mt-12 md:pl-12 px-2 gap-6">
            <div
              className="flex px-5 py-3 rounded-t-[16px] border-t-[1px] border-[#D9D9D9] border-x-[1px] text-[17px] cursor-pointer font-semibold"
              onClick={() => handleTab("description")}
            >
              Description
            </div>
            <div
              className="flex px-5 py-3 rounded-t-[16px] border-t-[1px] border-[#D9D9D9] border-x-[1px] text-[17px] cursor-pointer font-semibold"
              onClick={() => handleTab("tech-specs")}
            >
              Tech Specs
            </div>
          </div>
          {/* tabs styling end */}
          {activeTab === "description" ? (
            <div className="flex flex-col gap-8">
              <div className="mt-6 text-[15px] md:w-[80%]">
                SwitchBot Bot is compatible with just about any rocker switch or
                button of any appliance found at home, enabling you to instantly
                transform old devices into something much smarter.
                <span className="text-[#D0021B]">{`See more product details>`}</span>
              </div>

              {/* color selection section */}
              <div className="flex flex-col gap-3 ">
                <p className="text-[20px] text-[#5F5D5D] font-semibold">
                  Color
                </p>

                <div className="flex gap-5">
                  <div
                    onClick={() => setColor("white")}
                    className={`border-black border-[1px] bg-white w-[50px] h-[50px] relative cursor-pointer`}
                  >
                    {color === "white" && (
                      <span className="absolute top-[28%] right-[24%]">
                        <Tick color={"#000"} />
                      </span>
                    )}
                  </div>
                  <div
                    onClick={() => setColor("white")}
                    className={`border-black border-[1px] bg-black w-[50px] h-[50px] relative cursor-pointer`}
                  >
                    {color === "black" && (
                      <span className="absolute top-[28%] right-[24%]">
                        <Tick color={"#fff"} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* color selection section end*/}

              {/* bundle section */}
              <div className="flex flex-col gap-3 ">
                <p className="text-[20px] text-[#5F5D5D] font-semibold">
                  Bundle
                </p>
                <div className="flex gap-4 flex-wrap">
                  {bundleOtions.map((item, ind) => {
                    return (
                      <div
                        className={`px-4 py-2 w-fit cursor-pointer border-[1px] border-[#5F5D5D] text-[#5F5D5D] text-[18px] ${
                          bundle === item.title && " bg-[#5F5D5D] text-white"
                        }`}
                        key={ind}
                        onClick={() => setBundle(item.title)}
                      >
                        {item.title}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* bundle section end */}

              {/* quantity section */}
              <div className="flex flex-col gap-3 ">
                <p className="text-[20px] text-[#5F5D5D] font-semibold">
                  Quantity
                </p>

                <div className="flex border-[1px] border-[#5F5D5D] px-2 gap-3 w-fit items-center justify-center">
                  <p
                    className="h-full p-2 text-[20px] cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </p>
                  <p className="text-[20px]">{quantity}</p>
                  <p
                    className="h-full p-2 cursor-pointer text-[20px]"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-center w-fit justify-between">
                  <div className="w-fit h-[40px] text-xs md:text-base border-[#88B8C8] border-[2px] px-6 py-2 cursor-pointer mt-2 uppercase flex justify-center items-center rounded-[31px]">
                    Add to Cart
                  </div>
                  <div className="w-full h-[40px] text-xs md:text-base bg-[#88B8C8] px-6 py-2 cursor-pointer mt-2 uppercase flex justify-center items-center rounded-[31px]">
                    Buy it now
                  </div>
                </div>
              </div>
              {/* quantityt section end */}
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>

      <p className="px-4 font-bold w-full flex justify-center items-center text-center text-[32px] my-10">
        Frequently Bought Together
      </p>

      <div className="w-full flex flex-col md:flex-row gap-3 px-6 md:px-12 my-14">
        <div className="w-[98%] md:w-[50%] flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <div className="border-[2px] border-[#F2EEEE] overflow-hidden">
              <Image
                src="/images/product1.png"
                alt="logo"
                width={200}
                height={200}
                layout="fixed"
                className="cursor-pointer w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-[20px]">+</p>
            <div className="border-[2px] border-[#F2EEEE] overflow-hidden">
              <Image
                src="/images/product1.png"
                alt="logo"
                width={200}
                height={200}
                layout="fixed"
                className="cursor-pointer w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap text-[20px] font-semibold gap-2">
              <p className="">Total Price: </p>
              <p className="">US$80.54</p>
              <p className="line-through text-[#D0021B]">US102.32</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <p className="">You Save: </p>
              <p className="">US$21.78</p>
            </div>

            <div className="w-fit h-[40px] text-xs md:text-base border-[#88B8C8] border-[2px] px-10 py-2 cursor-pointer mt-2 uppercase flex justify-center items-center rounded-[31px]">
              Buy now
            </div>
          </div>
        </div>
        <div className="w-[98%] md:w-[50%] pt-6">
          <div className="flex flex-col gap-3 w-full md:w-[80%]">
            <div className="flex flex-wrap items-center gap-2">
              <div
                className={`bg-[#2CABD3] w-[20px] h-[20px] relative cursor-pointer`}
              >
                <span className="absolute top-[22%] right-[24%]">
                  <Tick color={"#000"} size={11} />
                </span>
              </div>
              <p className="font-bold flex-1">This item: Washing machine</p>

              <div
                className={`px-2 py-1 w-fit cursor-pointer border-[1px] border-[#5F5D5D] text-[#5F5D5D] text-[18px] rounded-[10px]`}
              >
                White/1-pack
              </div>

              <p className="font-bold">US$60.32</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div
                className={`bg-[#2CABD3] w-[20px] h-[20px] relative cursor-pointer`}
              >
                <span className="absolute top-[22%] right-[24%]">
                  <Tick color={"#000"} size={11} />
                </span>
              </div>
              <p className="font-bold flex-1">Dryer machine</p>

              <div
                className={`px-2 py-1 w-fit cursor-pointer border-[1px] border-[#5F5D5D] text-[#5F5D5D] text-[18px] rounded-[10px]`}
              >
                Black/1-pack
              </div>

              <p className="font-bold">US$42.00</p>
            </div>
          </div>

          <div className="w-full border-[2px] border-[#D9D9D9] mt-10 relative">
            <p className="absolute -top-4 px-3 -left-2 bg-white font-bold text-[20px]">
              Guaranteed Safe Checkout
            </p>

            <div className="w-full flex flex-wrap my-10 gap-4 px-4 md:w-[90%]">
              {checkoutImage.map((image, ind) => {
                return (
                  <Image
                    src={image.src}
                    alt="logo"
                    width={80}
                    height={80}
                    layout="fixed"
                    className="w-[80px] h-[50px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3 px-6 md:px-12 my-14 justify-between">
        {features.map((feat, ind) => {
          return (
            <div
              className={`flex w-full md:w-[23%] ${
                ind !== features.length - 1 &&
                "md:border-r-[1px] border-black border-b-[1px] md:border-b-0"
              }`}
            >
              <div className="w-full flex items-center justify-center py-14 gap-8 pr-10 h-full">
                <Image
                  src={feat.src}
                  alt="logo"
                  width={100}
                  height={100}
                  layout="fixed"
                  className="w-[50px] h-[40px]"
                />
                <p className="text-[20px] font-bold">{feat.heading}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-fit flex flex-col md:flex-row gap-3 px-6 md:px-12 my-14 justify-between items-center">
        <div className="flex flex-col h-fit gap-16 items-center md:items-start">
          <div className="flex gap-8 w-full md:w-[70%] items-center">
            <p className="text-[20px] font-semibold">
              No wiring, wireless app or timer control
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
          <div className="flex gap-8 w-[60%] items-center">
            <p className="text-[20px] font-semibold">
              Easy app operation. 600 days long battery life.
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
          <div className="flex gap-8 w-[60%] items-center">
            <p className="text-[20px] font-semibold">
              Linkage with other Switch Bot products is possible.
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
        </div>
        <div className="w-full md:w-[33%] h-full flex justify-center items-center">
          <Image
            src="/images/product1.png"
            alt="logo"
            width={500}
            height={500}
            layout="fixed"
            className="w-full bg-red-300"
          />
        </div>
        <div className="flex flex-col gap-16 md:items-end pr-14 items-center">
          <div className="flex gap-8 w-[60%] items-center">
            <p className="text-[20px] font-semibold">
              No wiring, wireless app or timer control
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
          <div className="flex gap-8 w-[60%] items-center">
            <p className="text-[20px] font-semibold">
              Easy app operation. 600 days long battery life.
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
          <div className="flex gap-8 w-[60%] items-center">
            <p className="text-[20px] font-semibold">
              Linkage with other Switch Bot products is possible.
            </p>
            <span className="w-[10px] h-[10px]">
              <Tick size={30} color={"#D0021B"} />
            </span>
          </div>
        </div>
      </div>

      <p className="px-4 font-bold w-full flex justify-center items-center text-center text-[32px] my-10">
        Related Products
      </p>

      <div className="w-full h-fit flex flex-wrap gap-3 px-6 md:px-12 my-14 justify-between items-center">
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard
            productSize={"small"}
            addToCart={false}
            productCategories={false}
          />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard
            productSize={"small"}
            addToCart={false}
            productCategories={false}
          />
        </div>
        <div className="w-[95%] md:w-[32.5%]">
          <ProductsCard
            productSize={"small"}
            addToCart={false}
            productCategories={false}
          />
        </div>
      </div>

      {/* customer reviews section start */}
      <div className="w-full h-fit flex flex-col md:flex-row gap-3 px-6 md:px-12 my-14 justify-between items-center">
        <div className="flex flex-wrap border-[1px] w-full border-[#D9D9D9] py-12 px-6 gap-4">
          <div className="flex gap-8">
            <div className="pr-20 border-r-[1px] border-[#D9D9D9] flex flex-col gap-4">
              <p className="text-[22px] font-bold">Customer Reviews</p>
              <div className="flex gap-1">
                <Rating
                  // onClick={handleRating}
                  // onPointerEnter={onPointerEnter}
                  // onPointerLeave={onPointerLeave}
                  // onPointerMove={onPointerMove}
                  readonly={true}
                  initialValue={4}
                  size={20}
                  fillColor="#f1a545"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </div>
              <p className="text-[14px] text-[#5F5D5D]">
                Based on {reviewsCount} reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-1">
            {[1, 2, 3, 4, 5].map((item, ind) => {
              return (
                <div className="flex gap-3 items-baseline flex-wrap">
                  <div className="flex gap-1">
                    <Rating
                      // onClick={handleRating}
                      // onPointerEnter={onPointerEnter}
                      // onPointerLeave={onPointerLeave}
                      // onPointerMove={onPointerMove}
                      readonly={true}
                      initialValue={4}
                      size={20}
                      fillColor="#f1a545"
                      style={{ display: "flex", justifyContent: "center" }}
                    />
                  </div>
                  {/* progressbar */}
                  <div className="w-[200px] h-[23px] border-[#D3D3D3] border-[1px]">
                    <div
                      className="h-[23px] bg-[#F49C16]"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <p className="text-[18px]">82%</p>
                  <p className="text-[14px]">{`(325)`}</p>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-3">
            <LabelInput label={"Name"} placeholder={"Enter your name"} />
            <LabelInput
              label={"Email"}
              placeholder={"Enter your email"}
              type="email"
            />
            <div className="flex flex-col gap-2 w-full items-start">
              <label className="font-semibold">Rating</label>
              <Rating
                // onClick={handleRating}
                // onPointerEnter={onPointerEnter}
                // onPointerLeave={onPointerLeave}
                // onPointerMove={onPointerMove}
                readonly={false}
                size={20}
                fillColor="#f1a545"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </div>
            <LabelInput
              label={"Review Title"}
              placeholder={"Give your review a title"}
              type="email"
            />
            <LabelInput
              label={"Review"}
              placeholder={"Write your comments here"}
              type="email"
            />
            <div className="flex flex-col gap-2 w-full items-start">
              <label className="font-semibold">PICTURE/VIDEO(OPTIONAL)</label>
              <div className="border border-[##BEB9B9] p-6 flex justify-center items-center cursor-pointer">
                <Image
                  src="/images/camera.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  layout="fixed"
                  className=""
                />
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="w-fit h-[40px] text-xs md:text-[20px] font-bold bg-[#88B8C8] px-6 py-2 cursor-pointer mt-2 uppercase flex justify-center items-center rounded-[10px]">
                Submit Review
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
