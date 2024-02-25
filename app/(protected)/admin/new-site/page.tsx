import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const NewSite = () => {
  async function handleSubmit(formData) {
    "use server";
    console.log(formData.get("images"));
    const site_name = formData.get("site_name");
    const site_type = formData.get("site_type");
    const site_location = formData.get("site_location");
    const date = formData.get("date");
    const yt_link = formData.get("yt_link");
    // For 'images', assuming it's a simple text input or textarea allowing comma-separated URLs
    const images = formData.get("images") ? formData.getAll("images") : [];
    console.log("🚀 ~ handleSubmit ~ images:", images);

    // console.log(formData.get("images"));
    // return {};
    const promises = await images.map((image) => uploadImageToCloud(image));
    const uploadedImageLinks = await Promise.all(promises);

    console.log("🚀 ~ handleSubmit ~ images:", images);
    const site_description = formData.get("site_description");
    const token = cookies().get("token")?.value;
    console.log("🚀 ~ handleSubmit ~ token:", token);
    const res = await fetch("http://localhost:3000/api/site", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        site_name,
        site_type,
        site_location,
        date,
        yt_link,
        images: uploadedImageLinks,
        site_description,
      }),
    });

    if (res.ok) {
      const data = await res.json(); // Assuming the response is JSON
      console.log(data, "data1");
      revalidatePath("/home");
      // router.push("/home");
      //   redirect("/home");
    } else {
      const errorData = await res.json(); // Assuming the error details are in JSON
      console.error(errorData);
    }

    async function uploadImageToCloud(image) {
      "use server";
      try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "tlgdfr2f");
        formData.append("cloud_name", "dthmtmcvm");
        console.log(
          "🚀 ~ uploadImageToCloud ~ formData:",
          formData.get("file")
        );
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dthmtmcvm/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log("🚀 ~ uploadImageToCloud ~ data:", data);
        return data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <form
        action={handleSubmit}
        className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-white">
          Submit Site Information
        </h2>

        <div>
          <label
            htmlFor="site_name"
            className="block text-sm font-medium text-gray-300"
          >
            Site Name
          </label>
          <input
            type="text"
            name="site_name"
            id="site_name"
            // value={formData.site_name}
            // onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="site_type"
            className="block text-sm font-medium text-gray-300"
          >
            Site Type
          </label>
          <input
            type="text"
            name="site_type"
            id="site_type"
            // value={formData.site_type}
            // onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="site_location"
            className="block text-sm font-medium text-gray-300"
          >
            Site Location
          </label>
          <input
            type="text"
            name="site_location"
            id="site_location"
            // value={formData.site_location}
            // onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-300"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            // value={formData.date}
            // onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="yt_link"
            className="block text-sm font-medium text-gray-300"
          >
            YouTube Link
          </label>
          <input
            type="url"
            name="yt_link"
            id="yt_link"
            // value={formData.yt_link}
            // onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-300"
          >
            Upload Images
          </label>
          <input
            type="file"
            name="images"
            id="images"
            accept="image/*" // Accept images of any type
            multiple // Allow multiple file selections
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"
          />
        </div>

        <div>
          <label
            htmlFor="site_description"
            className="block text-sm font-medium text-gray-300"
          >
            Site Description
          </label>
          <textarea
            name="site_description"
            id="site_description"
            // value={formData.site_description}
            // onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSite;
