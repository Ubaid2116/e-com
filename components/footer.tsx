"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-10 px-6 mt-7">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top: Logo and About Section */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={70}
                height={70}
                className="rounded-full border-2 border-teal-500 shadow-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-teal-300">Cubex</h1>
                <p className="text-sm text-gray-400">
                  Crafting with passion and precision.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              At Cubex, we aim to provide the best products with
              exceptional service. Our dedication to innovation ensures you
              always get the latest and greatest in technology and design.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[250px] mr-4 pt-3"> 
            <h2 className="text-lg font-semibold text-teal-300 mb-4">
              Contact Us
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Address:</strong> 1234 Market Street, Suite 567, Cityville
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Email:</strong> support@yourbrand.com
            </p>
            <p className="text-sm text-gray-400">
              <strong>Phone:</strong> +1 234 567 8900
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-lg font-semibold text-teal-300 mb-4">
              Stay Updated
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter to get the latest updates, exclusive
              deals, and more.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full shadow-md placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-teal-600 to-red-500 hover:from-red-500 hover:to-teal-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Middle: Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: FaFacebookF, color: "text-blue-500" },
            { icon: FaTwitter, color: "text-blue-400" },
            { icon: FaInstagram, color: "text-pink-500" },
            { icon: FaLinkedinIn, color: "text-blue-700" },
          ].map(({ icon: Icon, color }, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
              }}
              className={`p-4 rounded-full bg-gray-800 hover:${color} transition-all duration-300 shadow-md cursor-pointer`}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom: Decorative Section */}
        <div className="flex justify-center">
          <div className="w-full border-t border-gray-700 mb-4" />
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            © 2025 Cubex. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with ❤️ by Yemna.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
