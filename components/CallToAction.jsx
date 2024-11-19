import { useState } from "react";
import emailjs from "emailjs-com";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lhwn14d", // Replace with your EmailJS service ID
        "template_tv996hh", // Replace with your EmailJS template ID
        {
          name: formData.name, // Matches {{name}} in the template
          email: formData.email, // Matches {{email}} in the template
          number: formData.number, // Matches {{number}} in the template
        },
        "7TrsQJlFA9bNmo-L-" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSuccessMessage("Your details have been submitted successfully!");
          setIsModalOpen(false);
          setFormData({ name: "", email: "", number: "" }); // Reset the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div>
      {/* Call to Action Section */}
      <section className="bg-blue-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Join Us Today!
        </h2>
        <p className="text-gray-600 mb-6">
          Start your journey with PJ Tech Hub and become an IT pro.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Fill Your Details</h3>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-gray-700 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 p-4 rounded shadow-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
}
