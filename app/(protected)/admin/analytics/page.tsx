import Link from "next/link";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/site");
  const sites = await res.json();

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="overflow-x-auto">
        <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Site Name</th>
                    <th className="py-3 px-6 text-left">Type</th>
                    <th className="py-3 px-6 text-center">Location</th>
                    <th className="py-3 px-6 text-center">Date</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
                  {sites.map((site, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {site.site_name}
                        </td>
                        <td className="py-3 px-6 text-left">
                          {site.site_type}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {site.site_location}
                        </td>
                        <td className="py-3 px-6 text-center">{site.date}</td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <form action="">
                                {/* <button className="text-yellow-400 hover:text-yellow-500"> */}
                                <Link href={`/home/${site._id}`}>
                                  View
                                  <i className="fas fa-edit"></i>
                                </Link>
                                {/* </button> */}
                              </form>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              {/* <form action={handleDelete}>
                                  <button
                                    // onClick={() => onDelete(site)}
                                    className="text-red-400 hover:text-red-500"
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </form> */}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
