"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-responsive-modal";

export default function Header2({ login = true }) {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="w-full flex py-3 px-6 md:px-12 h-[70px] items-center md:justify-start justify-between">
        <Image
          src="/images/logo2.png"
          alt="logo"
          width={80}
          height={50}
          layout="fixed"
        />
        <div className="hidden md:flex flex-1 gap-4 font-semibold text-black justify-center items-center">
          <Link href={"#"} className="">
            Products
          </Link>
          <Link href={"#"} className="">
            Combos
          </Link>
          <Link href={"#"} className="">
            Deals
          </Link>
          <Link href={"#"} className="">
            Explore
          </Link>
          <Link href={"#"} className="">
            Support
          </Link>
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

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </>
  );
}
