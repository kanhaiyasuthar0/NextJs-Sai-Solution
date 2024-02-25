"use client";
// import axios from "axios";
// import { useRouter } from "next/navigation";
import SubmitButton from "@/components/generics/Button";
import React, { useState, useTransition } from "react";
// import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { loginAction } from "@/app/actions/login.action";
// import { useFormState, useFormStatus } from "react-dom";
// import { authenticate } from "../lib/actions";
// import { getCsrfToken } from "next-auth/react";

function LoginForm() {
  const [isLoading, startTransition] = useTransition();
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  // const providers = await getProviders();
  // const { pending } = useFormStatus();
  // if (pending) return <>Loading</>;
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();
  var errorMessage = "";

  const handleLogin = async (formData: any) => {
    console.log(formData, "in client func");
    startTransition(async () => {
      const response = await loginAction(formData);
      console.log("🚀 ~ handleLogin ~ response:", response);
    });
  };

  // const handleSubmit = async (formData) => {
  //   "use server";
  //   let email = formData.get("email");
  //   let password = formData.get("password");
  //   console.log("🚀 ~ handleSubmit ~ formData:", formData, email, password);
  //   const res = await fetch("http://localhost:3000/api/user/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   if (res.ok) {
  //     const data = await res.json(); // Assuming the response is JSON
  //     console.log(data, "data1");
  //     // router.push("/home");
  //     cookies().set("token", data.token);
  //     redirect("/admin/new-site");
  //   } else {
  //     // const errorData = await res.json(); // Assuming the error details are in JSON
  //     // console.error(errorData);
  //     console.log("🚀 ~ handleSubmit ~ res:", res);
  //     errorMessage = "SOmething went wrong!";
  //   }
  //   // event.preventDefault();
  //   // Here you can add your logic to handle the login
  //   // console.log({ "email", "password" });
  //   // Ideally, submit these details to your login API
  // };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" action={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-700 text-white"
                placeholder="Email address"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-700 text-white"
                placeholder="Password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {errorMessage}
          <div>
            <SubmitButton text={"Sign in"} />
            {/* {errorMessage ?? ""} */}
            {/* <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {pending ? "Loading..." : "Sign in"}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
