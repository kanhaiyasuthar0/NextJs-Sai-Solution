import { auth } from "@/auth";
import HomePage from "@/components/Pages/Home/HomePage";
import { revalidatePath } from "next/cache";

async function Home() {
  const session = await auth();
  console.log("🚀 ~ SettingPage ~ session:", session);

  const res = await fetch("http://localhost:3000/api/site");
  const data = await res.json();

  // console.log("🚀 ~ getStaticSideProps ~ res:", data);
  return (
    <>
      <HomePage data={data} session={session} />
    </>
  );
}

export default Home;
