"use client";
import { useState } from "react";

export default function FAQ({ title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-xl`}
        onClick={() => setOpen(!open)}
      >
        <button
          type="button"
          className="flex items-center justify-between gap-3 w-full px-4 py-5 sm:p-5"
        >
          <span className="flex text-lg font-semibold text-black">
            {" "}
            How to {title}
          </span>

          {!open ? (
            <svg
              className="w-6 h-6 text-gray-400 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>

        {open && (
          <div className="px-4 pb-5 sm:px-6 sm:pb-6 w-full">
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
}
