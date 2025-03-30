"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Define validation schema with Zod
const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Show loading toast
      const toastId = toast.loading("Sending your message...");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success toast
      toast.success("Message sent successfully!", {
        id: toastId,
        description: "We'll get back to you soon",
      });

      reset();
    } catch (error) {
      // Error toast
      toast.error("Failed to send message", {
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#D41D33] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-[#D41D33] bg-opacity-10 rounded-lg text-[#D41D33]">
                      <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        Phone
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        +977 015372578
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+977015372578"
                    className="flex items-center cursor-pointer p-2 rounded-lg bg-[#D41D33] w-full sm:w-auto justify-center"
                  >
                    <PhoneCall className="h-4 w-4 md:h-5 md:w-5 mr-2 text-white" />
                    <p className="text-gray-100 text-xs md:text-sm">Call Now</p>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-[#D41D33] bg-opacity-10 rounded-lg text-[#D41D33]">
                      <Mail className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        Email
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        info@vedanga.edu.np
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@vedanga.edu.np"
                    className="flex items-center cursor-pointer p-2 rounded-lg bg-[#D41D33] w-full sm:w-auto justify-center"
                  >
                    <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 text-white" />
                    <p className="text-gray-100 text-xs md:text-sm">Mail Now</p>
                  </a>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#D41D33] bg-opacity-10 rounded-lg text-[#D41D33]">
                    <Clock className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Monday - Friday: 8:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      Saturday: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64 md:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2714812211584!2d85.31089731506!3d27.702739982790633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b19295555f%3A0xabfe5f4b310f37a9!2sRabi%20Bhawan%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1647856732345!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Last Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Phone<span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-[#D41D33] text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  <span className="text-sm md:text-base">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}