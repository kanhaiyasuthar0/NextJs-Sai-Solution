// pages/site/[siteId].js

import { auth } from "@/auth";
import SubmitButton from "@/components/generics/Button";
import DeleteButton from "@/components/generics/DeleteButton";
import { revalidatePath } from "next/cache";
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
  const res = await fetch(`/api/site/${siteId}`);
  const site = await res.json();
  console.log("🚀 ~ SiteDetailPage ~ res:", site);

  async function updateUser(siteId, formData) {
    "use server";
    console.log("🚀 ~ handleDeleteAction ~ formData:", formData);
    console.log("🚀 ~ handleDeleteAction ~ siteId:", siteId);

    const res = await fetch(`/api/site/${siteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const site = await res.json();
    console.log("🚀 ~ updateUser ~ site:", site);
    revalidatePath(`/home/${siteId}`);
    redirect("/home");
  }

  const handleDeleteAction = updateUser.bind(null, siteId);
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{site.site_name}</h1>
        <p className="text-gray-400 mb-6">{site.site_description}</p>
        {session && (
          <form action={handleDeleteAction}>
            <DeleteButton text={"Delete"} />
          </form>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {site[0]?.images?.map((image: any, index: number) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SiteDetailPage;
