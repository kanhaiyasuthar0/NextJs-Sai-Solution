"use server";

export async function registerAction(formData: any) {
  console.log(formData, "in server func");
  let email = formData.get("email");
  let password = formData.get("password");
  console.log("🚀 ~ handleSubmit ~ formData:", formData, email, password);
  const res = await fetch("/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (res.ok) {
    const data = await res.json(); // Assuming the response is JSON
    console.log(data, "data1");
    return { success: data, message: "User registered successfully!" };
    // router.push("/home");
    // cookies().set("token", data.token);
    // redirect("/admin/new-site");
  } else {
    // const errorData = await res.json(); // Assuming the error details are in JSON
    // console.error(errorData);
    console.log("🚀 ~ handleSubmit ~ res:", res);
    return { error: "Please provide the correct creds!" };

    // errorMessage = "SOmething went wrong!";
  }
}
