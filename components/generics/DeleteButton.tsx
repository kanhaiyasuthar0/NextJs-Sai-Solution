"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton(props: any) {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg cursor-pointer transition ease-in duration-200"
      type="submit"
      aria-disabled={pending}
      disabled // check this value
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
}
