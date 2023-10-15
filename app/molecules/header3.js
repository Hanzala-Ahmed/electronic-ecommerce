"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-responsive-modal";
import LabelInput from "../atoms/labelInput";

export default function Header3({ login = true }) {
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
    setSignupOpen(false);
  };
  const onCloseSigupModal = () => {
    setOpen(false);
    setSignupOpen(false);
  };

  return (
    <>
      <div className="w-full flex py-3 px-6 md:px-12 h-[70px] items-center md:justify-start justify-between">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={50}
          layout="fixed"
        />
        <div className="hidden md:flex flex-1 gap-4 font-semibold text-[#5F5D5D] justify-between items-center mx-3">
          <div className="flex gap-4 h-full items-center">
            <Link href={"#"} className="">
              Help Center
            </Link>
          </div>
          <div className="flex gap-4 items-center h-full">
            <Link href={"#"} className="">
              Submit a request
            </Link>
            <Link href={"#"} className="">
              Back to our website
            </Link>
          </div>
        </div>

        {login && (
          <div className="flex gap-3">
            <Image
              src="/images/searchRed.svg"
              alt="logo"
              width={24}
              height={24}
              layout="fixed"
              className="cursor-pointer"
            />
            <Image
              src="/images/profile.svg"
              alt="logo"
              width={24}
              height={24}
              layout="fixed"
              className="cursor-pointer"
            />
            <Image
              src="/images/cart.svg"
              alt="logo"
              width={24}
              height={24}
              layout="fixed"
              className="cursor-pointer"
            />
          </div>
        )}

        {!login && (
          <div
            className="px-3 py-2 bg-[#5F5D5D] text-[18px] cursor-pointer ml-3"
            onClick={() => {
              setOpen(true);
              setSignupOpen(false);
            }}
          >
            Sign In
          </div>
        )}

        <div className="flex md:hidden h-full items-center justify-center px-3">
          <Image
            src="/images/menuIcon.svg"
            alt="logo"
            width={40}
            height={40}
            layout="fixed"
            className="cursor-pointer"
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        styles={{
          modal: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <div className="w-[400px] min-h-40 px-6 py-10 rounded-[20px] bg-white">
          <p className="w-full text-[32px] font-semibold uppercase flex justify-center items-center mb-8">
            Login
          </p>
          <div className="flex flex-col gap-4">
            <LabelInput label="Email" placeholder={""} />
            <LabelInput label="Password" placeholder={""} />
          </div>
          <div className="w-full flex justify-end">
            <p className="text-xs my-1">Forget your password?</p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="px-7 py-2 bg-[#D0021B] mb-3 mt-10 text-[18px] text-white cursor-pointer ml-3 uppercase rounded-[10px]"
              onClick={() => {}}
            >
              LOGIN
            </div>

            <p className="text-sm my-3">
              Not registered?{" "}
              <span
                className="cursor-pointer text-[#D0021B]"
                onClick={() => {
                  setSignupOpen(true);
                  setOpen(false);
                }}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        open={signupOpen}
        onClose={onCloseSigupModal}
        center
        showCloseIcon={false}
        styles={{
          modal: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <div className="w-[400px] min-h-40 px-6 py-10 rounded-[20px] bg-white">
          <p className="w-full text-[32px] font-semibold uppercase flex justify-center items-center mb-8">
            SIGN UP
          </p>
          <div className="flex flex-col gap-4">
            <LabelInput label="User Name" placeholder={""} />
            <LabelInput label="Email" placeholder={""} />
            <LabelInput label="Password" placeholder={""} />
            <LabelInput label="Confirm Password" placeholder={""} />
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="px-7 py-2 bg-[#D0021B] mb-3 mt-10 text-[18px] text-white cursor-pointer ml-3 uppercase rounded-[10px]"
              onClick={() => {}}
            >
              SIGN UP
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
