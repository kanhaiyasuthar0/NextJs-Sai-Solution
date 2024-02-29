import { ThreeDCardDemo } from "@/components/generics/Card3d";
import Image from "next/image";
import Link from "next/link";

function HomePage(props) {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-white text-3xl font-bold mb-6">Site Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
            {props.data.map((site) => (
              <Link key={site._id} href={`/home/${site._id}`}>
                {/* <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={site.images[0]}
                      alt={site.site_name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl text-white font-semibold">
                        {site.site_name}
                      </h2>
                      <p className="text-gray-400">{site.site_description}</p>
                    </div>
                  </div> */}
                <ThreeDCardDemo site={site} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <Carousel className="hero-carousel">

        <Image
          className="d-block w-100"
          src="https://source.unsplash.com/1200x600/?modern-furniture,trendy-interior"
          alt="First slide"
          width={1200}
          height={600}
        />

        <Image
          className="d-block w-100"
          src="https://source.unsplash.com/1200x600/?elegant-furniture,trendy-interior"
          alt="Second slide"
          height={1200}
          width={600}
        />
       
      </Carousel> */}
    </>
  );
}

export default HomePage;
