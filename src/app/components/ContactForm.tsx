import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-500 mb-8">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-start mb-6">
              <div className="text-yellow-500 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 3 7l-2 4h5l2-4a10 10 0 0 0 5 0l2 4h5l-2-4a10 10 0 0 0 3-7 10 10 0 0 0-10-10z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-500">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="text-yellow-500 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm1 17h-2v-2h2v2zm0-4h-2v-6h2v6z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-500">Mobile: (+84) 546-6789</p>
                <p className="text-gray-500">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-500 mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm5 15h-10v-2h10v2zm-3-5h-4v-5h4v5z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Working Time</p>
                <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is optional"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
