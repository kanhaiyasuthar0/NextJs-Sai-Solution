"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export async function loginAction(formData: any) {
  console.log(formData, "in server func");
  let email = formData.get("email");
  let password = formData.get("password");
  console.log("🚀 ~ handleSubmit ~ formData:", formData, email, password);
  //   const res = await fetch("http://localhost:3000/api/user/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   if (res.ok) {
  //     const data = await res.json(); // Assuming the response is JSON
  //     console.log(data, "data1");
  //     return { success: data };
  //     // router.push("/home");
  //     // cookies().set("token", data.token);
  //     // redirect("/admin/new-site");
  //   } else {
  //     // const errorData = await res.json(); // Assuming the error details are in JSON
  //     // console.error(errorData);
  //     console.log("🚀 ~ handleSubmit ~ res:", res);
  //     return { error: "something went wrong" };

  //     // errorMessage = "SOmething went wrong!";
  //   }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid creds" };

        default:
          return { error: "something went wrong" };
      }
    }
    throw error;
  }
}
