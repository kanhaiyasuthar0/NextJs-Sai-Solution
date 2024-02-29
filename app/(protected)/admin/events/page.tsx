import eventPost from "@/app/actions/events.actions";
import { uploadImageToCloud } from "@/utils/common";

const EventForm = () => {
  const handlePost = async (formData: FormData) => {
    "use server";

    const response = await eventPost(formData);
    console.log("🚀 ~ handlePost ~ response:", response);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <form action={handlePost} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="title"
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
            />
          </div>
          <div className="w-full px-3">
            <label
              htmlFor="description"
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600 h-32"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="date"
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="location"
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            />
          </div>
          {/* <div className="w-full px-3">
            <label
              htmlFor="imageUrl"
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="appearance-none block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
            />
          </div> */}
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
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
