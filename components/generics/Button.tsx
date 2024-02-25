"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton(props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? "Loading..." : props.text}
    </button>
  );
}
