"use client";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Image from "next/image";
import Form from "next/form";
import useBasketStore from "@/sanity/lib/products/store";

const Header = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) => 
  state.items.reduce((total, item) => total + item.quantity, 0) 
  )

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey( );
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900 shadow-2xl text-white p-0">
      {/* Top row */}
      <div className="flex flex-wrap justify-between items-center px-2 py-2 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>

        {/* Search Bar */}
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-6 mt-4 sm:mt-0 hidden sm:block"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-800 text-gray-300 px-5 py-3 rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full max-w-4xl shadow-lg transition-all duration-300 hover:shadow-2xl placeholder-gray-500"
          />
        </Form>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 mt-6 sm:mt-0">
          <motion.div
            whileHover={{ scale: 1.05 }} // Add scale animation on hover
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/basket"
              className="relative flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-600 to-gray-600 hover:from-gray-500 hover:to-red-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <TrolleyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-200" />

              <span className="absolute -top-2 -right-2 bg-gray-200 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>

              <span className="hidden sm:block">My Basket</span>
            </Link>
          </motion.div>

          {/* User Area */}
          <ClerkLoaded>
            <SignedIn>
              {user && (
                <motion.div
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/orders"
                    className="relative flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-600 to-gray-600 hover:from-gray-500 hover:to-red-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <PackageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200" />
                    <span className="hidden sm:block">My Orders</span>
                  </Link>
                </motion.div>
              )}
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <UserButton />
                <div className="hidden sm:block text-xs text-white">
                  <p className="text-gray-300">Welcome Back</p>
                  <p className="font-bold text-indigo-400">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-gray-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full border-black border hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Sign In
                </button>
              </SignInButton>
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-gray-800 text-teal-500 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full border-teal-500 border hover:bg-indigo-500 hover:text-white animate-pulse transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-2 sm:mt-0"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
      {/* Mobile Search Bar */}
      <Form action="/search" className="w-full block sm:hidden mt-4">
        <input
          type="text"
          name="query"
          placeholder="Search for products"
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 w-full shadow-lg transition-all duration-300 placeholder-gray-500"
        />
      </Form>
    </header>
  );
};

export default Header;
