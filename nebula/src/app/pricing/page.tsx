"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, AlertCircle, ChevronRight, Shield, Zap, Database, Bot } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  // Price multiplier for annual billing (20% discount)
  const annualMultiplier = 0.8;

  const plans = [
    {
      name: "Basic",
      description: "For individuals and small teams getting started with OSINT",
      price: {
        monthly: 30,
        annually: 30 * 12 * annualMultiplier
      },
      features: [
        "Standard OSINT searches",
        "Access to essential tools",
        "Limited search speed",
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      popular: false
    },
    {
      name: "Vip",
      description: "For organizations requiring advanced intelligence capabilities",
      price: {
        monthly: 50,
        annually: 50 * 12 * annualMultiplier
      },
      features: [
        "Everything in Basic",
        "Advanced search algorithms",
        "Access to premium databases",
        "Real-time threat alerts",
        "Priority support",
        "50 searches per day",
        "5 user licenses"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      popular: true
    },
    {
      name: "Ai Feature",
      description: "For large organizations with complex intelligence needs",
      price: {
        monthly: 130,
        annually: 130 * 12 * annualMultiplier
      },
      features: [
        "Everything in Professional",
        "AI-powered threat analysis",
        "Custom integration options",
        "Dedicated account manager",
        "Advanced API access",
        "Unlimited searches",
        "Custom user licenses"
      ],
      icon: <Bot className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background-darker relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Animated Grid Effect */}
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
              <span className="text-xs font-medium text-primary-light">Flexible Plans</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Pricing</span> for Every Need
            </h1>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Choose the plan that best fits your intelligence needs. All plans include our core platform features with different capacity and capability options.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-background-lighter p-1 rounded-lg mb-12">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isAnnual ? 'bg-transparent text-text-muted' : 'bg-primary text-white'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isAnnual ? 'bg-primary text-white' : 'bg-transparent text-text-muted'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual <span className="text-xs opacity-80">(20% off)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-2xl
                  ${plan.popular ? 'transform md:-translate-y-4' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className={`bg-gradient-to-r ${plan.color} text-white text-xs font-bold px-4 py-1 rounded-bl-lg`}>
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`
                  glass border border-border-color h-full
                  ${plan.popular ? 'border-primary/50' : ''}
                  transition-all duration-300 hover:border-primary hover:shadow-glow
                `}>
                  <div className="p-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mb-6`}>
                      {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-text-muted mb-6 text-sm">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">${isAnnual
                          ? Math.round(plan.price.annually / 12)
                          : plan.price.monthly}
                        </span>
                        <span className="text-text-muted ml-2 mb-1">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-xs text-text-muted mt-1">
                          Billed annually (${Math.round(plan.price.annually)}/year)
                        </p>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className={`
                        w-full py-3 px-4 rounded-lg text-white flex items-center justify-center
                        bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all text-sm font-medium
                      `}
                    >
                      Get Started
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>

                  <div className="border-t border-border-color p-8">
                    <p className="font-medium mb-4 text-sm">Plan includes:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex text-sm">
                          <Check size={18} className={`mr-2 flex-shrink-0 text-accent-1`} />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Contact */}
          <div className="mt-16 glass border border-border-color rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-start">
                  <Database size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
                    <p className="text-text-muted text-sm">
                      Contact our sales team for custom pricing, on-premise deployments,
                      and specialized intelligence solutions for your organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-background-lighter border border-border-color hover:border-primary rounded-lg px-6 py-3 text-sm font-medium transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-text-secondary">
              Find answers to common questions about our platform and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem
                question="How do I get started with OSINT Services?"
                answer="Simply select a plan that suits your needs and complete the signup process. Once you've subscribed, you'll receive an email with login credentials and instructions to access your account. Our onboarding team will be available to help you get started and make the most of our platform."
              />

              <FaqItem
                question="Can I upgrade my plan later?"
                answer="Yes, you can upgrade your plan at any time. The new features will be immediately available after upgrading, and we'll prorate your billing so you only pay the difference. You can manage your subscription directly from your account dashboard."
              />

              <FaqItem
                question="Is there a contract or commitment?"
                answer="Our services are offered on a month-to-month basis with no long-term contract required. For annual plans, you commit to a full year of service at a discounted rate. You can cancel anytime, but refunds are only available within the first 14 days of your subscription."
              />

              <FaqItem
                question="Do you offer a free trial?"
                answer="Yes, we offer a 14-day free trial on our Basic and Professional plans. The trial includes limited access to our platform features so you can evaluate if it meets your needs. No credit card is required to start your trial."
              />

              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoice-based payments with net-30 terms upon credit approval."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// FAQ Item Component
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border-color rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <AlertCircle size={20} />
        </span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-6 pt-0 text-text-muted text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
}
