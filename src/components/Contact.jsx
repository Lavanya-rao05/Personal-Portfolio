const Contact = () => {
  return (
    <section id="contact" className="py-16 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Contact Me</h2>
        <div className="flex flex-col items-center">
          <form
            action="https://formspree.io/f/meoaaara"  // 👉 replace with your Formspree ID
            method="POST"
            className="space-y-6 max-w-2xl w-full"
          >
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-5 py-3 mt-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Address Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3 mt-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="6"
                required
                className="w-full px-5 py-3 mt-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
