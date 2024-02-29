// pages/site/[siteId].js

import { auth } from "@/auth";
import SubmitButton from "@/components/generics/Button";
import DeleteButton from "@/components/generics/DeleteButton";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

async function SiteDetailPage(context: any) {
  const session = await auth();
  // console.log("🚀 ~ SiteDetailPage ~ context:", context.params.siteId);
  const {
    params: { siteId },
  } = context;
  console.log("🚀 ~ SiteDetailPage ~ siteId:", siteId);
  // return <>Hello</>;
  // Render site details
  // const { siteId } = context.params;
  const res = await fetch(`${process.env.BASE_URL}/api/site/${siteId}`);
  const site = await res.json();
  console.log("🚀 ~ SiteDetailPage ~ res:", site);

  async function updateUser() {
    "use server";
    console.log("🚀 ~ handleDeleteAction ~ siteId:", siteId);

    const res = await fetch(`${process.env.BASE_URL}/api/site/${siteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const site = await res.json();
    console.log("🚀 ~ updateUser ~ site:", site);
    revalidatePath(`/home/${siteId}`);
    revalidatePath(`/admin/analytics`);

    redirect("/home");
  }

  const handleDeleteAction = updateUser.bind(null, siteId);
  console.log(site, "123");
  let siteData = site[0];
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="bg-gray-800 text-white p-6 rounded-lg shadow">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">{siteData.site_name}</h1>
            <p className="text-gray-300 mb-4 text-lg">
              {siteData.site_description}
            </p>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-gray-700 text-sm rounded-full">
                {siteData.site_type}
              </span>
              <span className="px-4 py-1 bg-gray-700 text-sm rounded-full">
                {new Date(siteData.date).toLocaleDateString()}
              </span>
            </div>
            <Link href={`/video/${siteData.id}`}>
              <button className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-150 ease-in-out">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Video
              </button>
            </Link>
          </div>
        </header>
        {session && (
          <form action={handleDeleteAction}>
            <DeleteButton text={"Delete"} />
          </form>
        )}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {siteData.images?.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default SiteDetailPage;
