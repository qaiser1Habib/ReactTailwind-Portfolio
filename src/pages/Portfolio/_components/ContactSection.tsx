import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const { name, email, subject, message } = data;

    const mailtoLink = `mailto:qaiserhabib6@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    alert(
      "Thank you for your message! Your email client should now open with the pre-filled message."
    );

    reset();
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s work together to create
            something amazing. I&apos;m always open to discussing new
            opportunities and exciting challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 mb-8">
                I&apos;m currently available for freelance work and full-time
                opportunities. Whether you have a project in mind or just want
                to chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:qaiserhabib6@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    qaiserhabib6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Whatsapp</h4>
                  <a
                    href="https://wa.me/923022630092"
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    +92 302 2630092
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/qaisar-habib-827075203/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    linkedin.com/in/qaiserhabib
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 cursor-pointer"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 p-8 gradient-bg rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let&apos;s discuss your project and bring your ideas to life with
            modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:qaiserhabib6@gmail.com"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <i className="fas fa-envelope"></i>
              <span>Email Me</span>
            </a>
            <a
              href="tel:03022630092"
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <i className="fas fa-phone"></i>
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
