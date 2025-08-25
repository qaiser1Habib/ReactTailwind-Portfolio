import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import useToast from "@/hooks/useToast";

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactSection = () => {
	const { notify } = useToast();
	const [isSubmitting, setSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	const onSubmit = async (data: ContactFormData) => {
		setSubmitting(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_SERVICE_ID, // EMAILJS SERVICE_ID
				import.meta.env.VITE_TEMPLATE_ID, // EMAILJS TEMPLATE_ID
				{
					from_name: data.name,
					from_email: data.email,
					subject: data.subject,
					message: data.message,
				},
				import.meta.env.VITE_PUBLIC_KEY // EMAILJS PUBLIC_KEY
			);
			notify("success", "Message sent successfully!");
			reset();
		} catch (error: unknown) {
			let errorMessage = "Something went wrong";

			if (error instanceof Error) {
				errorMessage = error.message;
			} else if (typeof error === "string") {
				errorMessage = error;
			}

			notify("error", errorMessage);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Ready to start your next project? Let&apos;s work together to create something amazing. I&apos;m always open to
						discussing new opportunities and exciting challenges.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="text-center md:text-left">
							<h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
							<p className="text-gray-600 mb-8">
								I&apos;m currently available for freelance work and full-time opportunities. Whether you have a project in
								mind or just want to chat about technology, feel free to reach out!
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
									<a href="https://wa.me/923022630092" className="text-green-600 hover:text-green-800 transition-colors">
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
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
										Name
									</label>
									<input
										id="name"
										type="text"
										{...register("name", { required: "Name is required" })}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
									/>
									{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
									{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
								</div>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
									Subject
								</label>
								<input
									id="subject"
									type="text"
									{...register("subject", { required: "Subject is required" })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
								/>
								{errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									rows={5}
									{...register("message", { required: "Message is required" })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
								/>
								{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
							</div>

							<button
								type="submit"
								className="w-full gradient-bg text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 cursor-pointer"
							>
								{isSubmitting ? (
									<>
										<svg
											aria-hidden="true"
											className="inline size-6 animate-spin fill-black me-2"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
										<span className="sr-only">Loading...</span>
										Processing...
									</>
								) : (
									<>
										<i className="fas fa-paper-plane"></i>
										<span>Send Message</span>
									</>
								)}
							</button>
						</form>
					</div>
				</div>

				<div className="text-center mt-16 p-8 gradient-bg rounded-xl text-white">
					<h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
					<p className="text-lg mb-6 opacity-90">
						Let&apos;s discuss your project and bring your ideas to life with modern web technologies.
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
