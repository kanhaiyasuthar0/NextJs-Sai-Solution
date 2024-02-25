// pages/site/[siteId].js

async function SiteDetailPage(context) {
  // console.log("🚀 ~ SiteDetailPage ~ context:", context.params.siteId);
  const {
    params: { siteId },
  } = context;
  console.log("🚀 ~ SiteDetailPage ~ siteId:", siteId);
  // return <>Hello</>;
  // Render site details
  // const { siteId } = context.params;
  const res = await fetch(`http://localhost:3000/api/site/${siteId}`);
  const site = await res.json();
  console.log("🚀 ~ SiteDetailPage ~ res:", site);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{site.site_name}</h1>
        <p className="text-gray-400 mb-6">{site.site_description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {site[0]?.images?.map((image, index) => (
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
