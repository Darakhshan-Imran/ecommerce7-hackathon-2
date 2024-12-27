"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'
import { iconsList } from "../../constants"
import filter from "../../../public/filter.jpg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed flex items-center pl-[3rem] md:pl-0 top-0 h-[7.75rem] left-0 right-0 bg-white z-40 shadow-sm">
      <div className="wrapper py-4 px-6 sm:px-6 lg:px-10">
        {/* Desktop Layout */}
        <div className="flex flex-col gap-5 space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo and Search Section */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6 lg:space-x-12 w-full lg:w-auto">
            {/* Logo */}
            <h1 className="text-[#3563E9] sm:mx-[4rem] tracking-wide text-3xl sm:text-4xl font-bold whitespace-nowrap">
              MORENT
            </h1>

            {/* Search Bar */}
            <div className="relative hidden md:block w-full max-w-[500px]">
              <Search
                className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search something here"
                className="pl-10 pr-12 py-2.5 w-full border  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none hover:opacity-80 transition-opacity"
                aria-label="Filter"
              >
                <Image 
                  src={filter}
                  alt="Filter" 
                  width={20} 
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Icons Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {iconsList.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute right-4 top-4 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="grid grid-cols-4 gap-6 justify-items-center">
              {iconsList.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
