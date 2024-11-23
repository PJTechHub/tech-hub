import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { url } from "@/Service/service";
import hero from "@/assets/milad-fakurian-iLHDO19h0ng-unsplash.jpg";
import learning from "@/assets/luke-peters-B6JINerWMz0-unsplash.jpg";
import mentorship from "@/assets/market-analytics-8403845.png";
import resources from "@/assets/annie-spratt-xKJUnFwfz3s-unsplash.jpg";
import "animate.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`${url}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>PJ Tech Hub</title>
        <meta
          name="description"
          content="Learn and grow with PJ Tech Hub - the ultimate knowledge platform for IT enthusiasts!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 pt-[64px]">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <Image
            src={hero}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 z-0"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to PJ Tech Hub
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your one-stop platform for learning IT skills and exploring new technologies.
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
        <section id="features" className="py-16 bg-gray-50 h-[56vh]">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
            {[{ img: learning, title: "Practical Learning", desc: "Hands-on projects and resources to enhance your IT knowledge." }, 
              { img: mentorship, title: "Expert Guidance", desc: "Access mentorship from industry professionals." },
              { img: resources, title: "Free Resources", desc: "A curated collection of tools, repositories, and learning materials." }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-500"
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16"
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 text-white animate__animated animate__fadeInUp">
            Benefits of Subscription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20 animate__animated animate__fadeInUp">
            {[
              { title: "Exclusive Content", desc: "Subscribers get access to exclusive content, courses, and tutorials." },
              { title: "Early Access", desc: "Get early access to new courses, features, and updates." },
              { title: "Priority Support", desc: "Access priority support for quick resolutions to queries." },
              { title: "Discounts & Offers", desc: "Enjoy exclusive discounts and offers on valuable resources." }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-2xl hover:bg-indigo-50 group"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition duration-300">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />

        {/* Newsletter Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Subscribe for Updates
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 mb-4 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              {message && (
                <p className={`mb-4 ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
