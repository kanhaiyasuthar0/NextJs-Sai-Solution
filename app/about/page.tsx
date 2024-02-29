import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Sai Solution
        </h1>
        <div className="mb-6 text-gray-400 text-lg">
          <p className="mb-4">
            At Sai Solution, we pride ourselves on being at the forefront of
            innovative construction and interior design solutions. With over a
            decade of experience, our team of skilled professionals is committed
            to transforming spaces into bespoke environments that reflect our
            clients&apos;s visions and needs.
          </p>
          <p className="mb-4">
            Our approach combines the latest trends in design and construction
            with traditional craftsmanship, ensuring every project is unique and
            timeless. From residential to commercial projects, we provide a full
            range of services designed to bring your dream space to life.
          </p>
        </div>
        {/* Placeholder for an Unsplash image related to construction */}
        <div className="mb-6">
          {/* <img
            src="https://via.placeholder.com/600"
            alt="Construction work"
            className="w-full h-auto rounded-lg shadow-md"
          /> */}
        </div>
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Innovative Design</h3>
            <p>
              We push the boundaries of design, incorporating the latest
              innovations to create spaces that are not only functional but also
              aesthetically pleasing.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Expert Team</h3>
            <p>
              Our team consists of experienced architects, designers, and
              builders who work together to deliver exceptional quality and
              service.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Customer Focus</h3>
            <p>
              We listen to our clients and tailor our services to meet their
              unique needs, ensuring their vision is realized from concept to
              completion.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Sustainable Practices
            </h3>
            <p>
              Commitment to sustainability is at our core. We strive to use
              eco-friendly materials and practices in all our projects, reducing
              our environmental impact.
            </p>
          </div>
        </div>
        {/* Placeholder for an Unsplash image related to interior design */}
        <div className="mt-8">
          {/* <img
            src="https://via.placeholder.com/600"
            alt="Interior design"
            className="w-full h-auto rounded-lg shadow-md"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
