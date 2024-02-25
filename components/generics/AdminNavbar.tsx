"use client";
import Link from "next/link";
import { useState } from "react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* BrandName */}
            <Link href="/home" passHref>
              <div className="flex items-center py-5 px-2 text-gray-200 hover:text-gray-400 cursor-pointer font-bold">
                Sai Solution
              </div>
            </Link>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/home" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/auth/login" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Logout
                </div>
              </Link>
              <Link href="/auth/register" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Add/remove user
                </div>
              </Link>
              <Link href="/videos" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Analytics
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Add new site
                </div>
              </Link>
              <Link href="/about" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Some
                </div>
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {/* Icon for mobile menu */}
              Menu
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link href="/home" passHref>
          <div className="block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/login" passHref>
          <div className="block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">
            Login
          </div>
        </Link>
        <Link href="/videos" passHref>
          <div className="block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">
            Videos
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">
            Contact Us
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="block py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">
            About
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
