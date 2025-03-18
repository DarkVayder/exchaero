import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 sec
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-300">
          Have questions? Reach out to us, and we’ll get back to you soon.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
            <div className="flex items-center space-x-3 mb-3">
              <Mail className="text-gray-500" size={20} />
              <p className="text-gray-700">support@exchaero.ng</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-gray-500" size={20} />
              <p className="text-gray-700">+(234) 567-890</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-gray-500" size={20} />
              <p className="text-gray-700">123 Kubwa Plaza, Abuja, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Send a Message</h2>
            {isSubmitted && (
              <div className="flex items-center bg-green-100 text-green-700 p-4 rounded-md mb-4">
                <CheckCircle className="mr-2" size={20} />
                <p>Message sent successfully!</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-md text-black bg-gray-100 focus:ring-2 focus:ring-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-md text-black bg-gray-100 focus:ring-2 focus:ring-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 border rounded-md text-black bg-gray-100 focus:ring-2 focus:ring-gray-800"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
