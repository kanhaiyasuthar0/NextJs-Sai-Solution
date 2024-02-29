"use client";
import { auth } from "@/auth";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const session = await auth();
  const { data: session, status } = useSession();
  //   if (session) {
  //     return <></>;
  //   }
  console.log("🚀 ~ SettingPage ~ session:", session);
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
              {session && (
                <Link href="/admin/analytics" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Analytics
                  </div>
                </Link>
              )}
              {session && (
                <Link href="/admin" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Main panel
                  </div>
                </Link>
              )}
              <Link href="/home" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/videos" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Videos
                </div>
              </Link>
              <Link href="/events" passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Events
                </div>
              </Link>
              {/* <Link href={`/auth/login`} passHref>
                <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                  Login
                </div>
              </Link>  */}

              {!session ? (
                <Link href={`/auth/${!session ? "login" : "login"}`} passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Login
                  </div>
                </Link>
              ) : (
                ""
              )}

              {/* {!session && (
                <Link href="/auth/register" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Register
                  </div>
                </Link>
              )} */}
              {/* {session && (
                <Link href="/admin/new-site" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Add/remove site
                  </div>
                </Link>
              )} */}

              {!session && (
                <Link href="/contact" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Contact Us
                  </div>
                </Link>
              )}
              {!session && (
                <Link href="/about" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    About
                  </div>
                </Link>
              )}

              {/* {session && (
                <Link href="/settings" passHref>
                  <div className="py-5 px-3 hover:text-gray-400 cursor-pointer">
                    Settings
                  </div>
                </Link>
              )} */}
              {/* {session && (
                <button
                  className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              )} */}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {/* Icon for mobile menu */}
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

export default Navbar;
