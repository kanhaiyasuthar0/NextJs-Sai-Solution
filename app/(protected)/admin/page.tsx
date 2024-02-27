// "use client";
// pages/protected.js
import { auth } from "@/auth";
import { MainAdminPanel } from "@/components/main-admin-panel";
import { useSession, signIn, signOut } from "next-auth/react";

export default async function ProtectedPage() {
  // const { data: session } = useSession();
  const session = await auth();

  return (
    <>
      <MainAdminPanel session={session} />
    </>
  );
}
