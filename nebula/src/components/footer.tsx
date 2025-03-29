"use client";

import Link from 'next/link';
import {
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Mail,
  Shield,
  Globe,
  Bot
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-background-darker pt-16 pb-8 border-t border-border-color">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <h3 className="text-xl font-bold">
                  Nebula<span className="text-gradient">OSINT</span>
                </h3>
              </Link>
            </div>
            <p className="text-sm text-text-muted mb-6">
              Professional Intelligence Solutions for advanced threat detection and comprehensive OSINT capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/osint" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <Globe size={14} className="mr-1" />
                  OSINT Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/threat-intelligence" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <Shield size={14} className="mr-1" />
                  Threat Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/ai-analysis" className="text-sm text-text-muted hover:text-primary-light flex items-center">
                  <Bot size={14} className="mr-1" />
                  AI-Powered Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-sm text-text-muted flex items-start">
                <Mail size={14} className="mr-2 mt-1" />
                <span>info@nebulaosint.com</span>
              </p>
              <Link href="/contact" className="inline-block mt-4 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 py-2 px-4 rounded-lg hover:shadow-glow transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-color mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted mb-4 md:mb-0">
            © {currentYear} Nebula<span className="text-primary">OSINT</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-primary-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-primary-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
