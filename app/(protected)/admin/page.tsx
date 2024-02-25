// "use client";
// pages/protected.js
import { auth } from "@/auth";
import { useSession, signIn, signOut } from "next-auth/react";

export default async function ProtectedPage() {
  // const { data: session } = useSession();
  const session = await auth();

  return (
    <>
      {JSON.stringify(session)}
      {/* <h1>You are not signed in</h1> */}
      {/* <button>Sign in</button> */}
    </>
  );
}
