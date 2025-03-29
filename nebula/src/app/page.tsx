"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Zap,
  Bot,
  ShieldCheck,
  ChevronRight,
  Database,
  Server,
  Share2
} from 'lucide-react';

// Animation for the typing effect
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayText;
};

import { useState } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const typedText = useTypewriter('Intelligence Solutions');

  // Parallax effect for the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center bg-background-darker overflow-hidden"
      >
        {/* Particle/Cyber Grid Effect (CSS-only for performance) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="cyber-grid"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-primary-light">Next-Gen OSINT Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
              Professional Open Source{' '}
              <span className="relative">
                <span className="text-gradient">{typedText}</span>
                <span className="cursor inline-block w-1 h-10 ml-1 bg-primary animate-pulse"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Harness the power of advanced AI and machine learning to uncover valuable intelligence from open sources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/dashboard"
                className="btn btn-primary group"
              >
                Start For Free
                <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
              <Link
                href="/pricing"
                className="btn btn-secondary"
              >
                View Pricing
              </Link>
            </div>

            {/* Trusted By */}
            <div className="mt-16 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
              <p className="text-sm text-text-muted mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="h-8 w-24 bg-gray-500/20 rounded"></div>
                <div className="h-8 w-24 bg-gray-500/20 rounded"></div>
                <div className="h-8 w-24 bg-gray-500/20 rounded"></div>
                <div className="h-8 w-24 bg-gray-500/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-primary-light">Core Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Intelligence <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-text-secondary">
              Our platform combines cutting-edge technology with expert analysis to deliver actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="feature-card group">
              <div className="feature-icon">
                <Search size={30} />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-primary-light transition-colors">
                Advanced Searches
              </h3>
              <p className="text-text-muted text-sm">
                Access to extensive databases and search capabilities to find critical information in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group">
              <div className="feature-icon">
                <Zap size={30} />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-primary-light transition-colors">
                Real-time Results
              </h3>
              <p className="text-text-muted text-sm">
                Our optimized systems deliver results instantly, saving you valuable time during investigations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card group">
              <div className="feature-icon">
                <Bot size={30} />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-primary-light transition-colors">
                AI-Powered Analysis
              </h3>
              <p className="text-text-muted text-sm">
                Advanced machine learning models analyze vast amounts of data to identify patterns and insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card group">
              <div className="feature-icon">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-primary-light transition-colors">
                Enterprise Security
              </h3>
              <p className="text-text-muted text-sm">
                Your searches and data are handled with military-grade encryption and privacy protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background-lighter py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-primary-light">The Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How <span className="text-gradient">NebulaOSINT</span> Works
            </h2>
            <p className="text-text-secondary">
              Our platform simplifies the intelligence gathering process while maximizing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="glass p-8 rounded-lg h-full">
                <div className="mb-4 text-accent-1">
                  <Database size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                <p className="text-text-muted text-sm">
                  Our system continuously monitors and collects data from thousands of sources across the internet.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mt-8 md:mt-12">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="glass p-8 rounded-lg h-full">
                <div className="mb-4 text-accent-3">
                  <Server size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Processing & Analysis</h3>
                <p className="text-text-muted text-sm">
                  Advanced AI algorithms analyze and correlate data points to identify patterns and generate insights.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mt-8 md:mt-24">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="glass p-8 rounded-lg h-full">
                <div className="mb-4 text-accent-2">
                  <Share2 size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Actionable Intelligence</h3>
                <p className="text-text-muted text-sm">
                  Receive comprehensive reports and real-time alerts that you can immediately act upon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your <span className="text-gradient">Intelligence Capabilities</span>?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Choose the plan that fits your needs and unlock the power of professional OSINT tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="btn btn-primary"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for particle effects */}
      <style jsx>{`
        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: grid-move 25s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          }
          100% {
            transform: perspective(500px) rotateX(60deg) translateY(0px) translateZ(-200px);
          }
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        .feature-card {
          background-color: var(--background-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2rem;
          transition: all var(--transition-medium);
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
      `}</style>
    </main>
  );
}
