import { auth } from "@/auth";
import HomePage from "@/components/Pages/Home/HomePage";
import { revalidatePath } from "next/cache";

async function Home() {
  const session = await auth();
  console.log("🚀 ~ SettingPage ~ session:", session);

  const res = await fetch(`${process.env.BASE_URL}/api/site`);
  console.log("🚀 ~ Home ~ res:", res);
  const data = await res.json();

  // console.log("🚀 ~ getStaticSideProps ~ res:", data);
  return (
    <>
      <HomePage data={data} session={session} />
    </>
  );
}

export default Home;
