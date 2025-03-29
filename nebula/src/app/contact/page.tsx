"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Send,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));

    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        submitted: true,
        loading: false
      }));
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background-darker relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Animated Dots Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, var(--primary) 2%, transparent 0%)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-darker/80 to-background/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-primary-light">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contact</span> Our Team
            </h1>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Whether you have a question about our services, pricing, or need technical support, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass border border-border-color rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {formState.submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                    <Send className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormState({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                      submitted: false,
                      loading: false
                    })}
                    className="text-primary-light flex items-center mx-auto"
                  >
                    Send another message
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background-darker border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background-darker border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background-darker border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Pricing Question">Pricing Question</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background-darker border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState.loading}
                    className={`
                      w-full py-3 px-4 rounded-lg text-white flex items-center justify-center
                      bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-glow transition-all
                      ${formState.loading ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
                  >
                    {formState.loading ? 'Sending...' : 'Send Message'}
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-text-muted text-sm mb-2">We'll respond within 24 hours</p>
                    <a href="mailto:info@nebulaosint.com" className="text-primary-light hover:underline">
                      info@nebulaosint.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
                    <p className="text-text-muted text-sm mb-2">Our support team is available Mon-Fri 9am-5pm EST</p>
                    <Link href="/chat" className="text-primary-light hover:underline">
                      Start a conversation
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Support</h3>
                    <p className="text-text-muted text-sm mb-2">Call us for enterprise support</p>
                    <a href="tel:+18005551234" className="text-primary-light hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background-lighter border border-border-color flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Twitter size={18} className="text-text-muted hover:text-primary" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background-lighter border border-border-color flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Github size={18} className="text-text-muted hover:text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background-lighter border border-border-color flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Linkedin size={18} className="text-text-muted hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-background-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-text-secondary">
              Visit our headquarters for in-person meetings and demonstrations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="glass border border-border-color rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">NebulaOSINT Headquarters</h3>
                    <address className="text-text-muted text-sm not-italic">
                      1234 Cyber Avenue<br />
                      Suite 567<br />
                      San Francisco, CA 94103<br />
                      United States
                    </address>
                  </div>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-light hover:underline flex items-center"
                >
                  Get directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 h-64 bg-background-card rounded-xl overflow-hidden">
              {/* This would be a map in a real implementation */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-text-muted text-sm">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
