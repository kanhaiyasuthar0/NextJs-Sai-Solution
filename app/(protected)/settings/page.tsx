import { auth, signOut } from "@/auth";
import Link from "next/link";

const SettingPage = async () => {
  const session = await auth();
  console.log("🚀 ~ SettingPage ~ session:", session);
  return (
    <div>
      {JSON.stringify(session)}
      <Link href={"/admin/new-site"}>Add new site</Link> <br />
      <Link href={"/admin/analytics"}>analytics</Link>
      <br />
      {/* <Link href={"/admin/analytics"}>analytics</Link> */}
      <br />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>{" "}
      </form>
    </div>
  );
};

export default SettingPage;
