"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled
    ? 'fixed w-full glass z-50 backdrop-blur-md py-3 transition-all duration-300 shadow-lg'
    : 'absolute w-full z-50 py-4 transition-all duration-300';

  const logoText = "Nebula";
  const logoSpan = "OSINT";

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <h1 className="text-xl font-bold">
              {logoText}<span className="text-gradient">{logoSpan}</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className={`text-sm font-medium hover:text-primary-light transition-colors relative ${
                  pathname === '/'
                    ? 'text-white after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-gray-300'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`text-sm font-medium hover:text-primary-light transition-colors relative ${
                  pathname === '/pricing'
                    ? 'text-white after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-gray-300'
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-sm font-medium hover:text-primary-light transition-colors relative ${
                  pathname === '/contact'
                    ? 'text-white after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-gray-300'
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="ml-4 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-glow transition-all"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-darker border-t border-border-color animate-fadeIn">
          <nav className="container mx-auto py-4 px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className={`block py-2 ${pathname === '/' ? 'text-primary-light' : 'text-gray-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`block py-2 ${pathname === '/pricing' ? 'text-primary-light' : 'text-gray-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 ${pathname === '/contact' ? 'text-primary-light' : 'text-gray-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block mt-4 text-center py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
