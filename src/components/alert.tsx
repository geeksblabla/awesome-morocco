"use client";
import React, { useEffect } from "react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertProps = {
  description: string;
  type: AlertType;
};

const getClassName = (type: AlertType) => {
  switch (type) {
    case "success":
      return "text-green-500 text-white";
    case "error":
      return "text-red-500 text-white";
    case "warning":
      return "text-yellow-500 text-white";
    case "info":
      return "text-blue-500 text-white";
    default:
      return "text-blue-500 text-white";
  }
};

export const Alert = ({ description, type = "info" }: AlertProps) => {
  const className = getClassName(type);
  return (
    <div
      className={`my-4 flex items-center rounded-lg bg-gray-800 p-4 ${className} transition-all duration-100`}
      role="alert"
    >
      <svg
        className="h-4 w-4 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="text-md ml-3 font-medium">{description}</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target="alert"
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
