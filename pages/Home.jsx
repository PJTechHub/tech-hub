import Head from "next/head";
import Navbar from "../components/Navbar";
import hero from "../assets/milad-fakurian-iLHDO19h0ng-unsplash.jpg";
import learning from "../assets/luke-peters-B6JINerWMz0-unsplash.jpg";
import mentorship from "../assets/market-analytics-8403845.png";
import resources from "../assets/annie-spratt-xKJUnFwfz3s-unsplash.jpg";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>PJ Tech Hub</title>
        <meta
          name="description"
          content="Learn and grow with PJ Tech Hub - the ultimate knowledge platform for IT enthusiasts!"
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 pt-[70px]">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white z-0">
          <Image
            src={hero}
            alt="Hand Image"
            className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          />

          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to PJ Tech Hub</h1>
            <p className="text-lg mb-6">
              Your one-stop platform for learning IT skills and exploring new
              technologies.
            </p>
            <a
              href="#features"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded shadow hover:bg-gray-100 transition"
            >
              Explore More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
            What We Offer
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="relative group max-w-sm p-6 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src={learning} // Replace with your image file
                alt="Practical Learning"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487c.637 1.07.674 2.308.118 3.342a4.5 4.5 0 01-.318 5.686l-6.75 6.75A4.5 4.5 0 014 16.25V10.5a4.5 4.5 0 014.5-4.5h6.25a4.5 4.5 0 012.112.487z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300">
                Practical Learning
              </h3>
              <p className="text-gray-600">
                Hands-on projects and resources to enhance your IT knowledge.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative group max-w-sm p-6 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src={mentorship} // Replace with your image file
                alt="Expert Guidance"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11m0 0l-4 4m4-4l-4-4m13 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m15-4h1a2 2 0 012 2v5m0 0v2m0-2h-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition duration-300">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Access mentorship from industry professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative group max-w-sm p-6 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src={resources} // Replace with your image file
                alt="Free Resources"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="absolute top-4 left-4 bg-purple-500 text-white p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3v4.75H5M5 20h14a2 2 0 002-2V10a2 2 0 00-2-2h-7l-4-4H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition duration-300">
                Free Resources
              </h3>
              <p className="text-gray-600">
                A curated collection of tools, repositories, and learning
                materials.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction />

        {/* Testimonials Section (Optional) */}
        <section className="py-16 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
            What Our Members Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/person1.jpg" // Replace with your image file
                alt="Testimonial 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600">
                &quot;PJ Tech Hub provided me with hands-on projects that
                elevated my skills!&quot;
              </p>
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">Software Developer</p>
            </div>
            <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="/images/person2.jpg" // Replace with your image file
                alt="Testimonial 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600">
                &quot;I learned more in a few weeks here than I did in months
                elsewhere.&quot;
              </p>
              <h3 className="font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-200 text-center">
        &copy; 2024 PJ Tech Hub. All rights reserved.
      </footer>
    </>
  );
}
