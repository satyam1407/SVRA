'use client';

import { motion } from 'framer-motion';
import { FiUpload, FiBarChart, FiArrowRight, FiCheckCircle, FiShield } from 'react-icons/fi';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Add Your Properties',
    description: 'Securely import your property details, existing leases, and financial records. Our smart system will help categorize everything.',
    icon: <FiUpload className="text-2xl sm:text-3xl" />,
    color: 'from-blue-500 to-cyan-500',
    features: ['Secure data import', 'Lease management', 'Document upload'],
  },
  {
    number: '02',
    title: 'Optimize & Analyze',
    description: 'Dive into your personalized dashboard. Track expenses, manage tenants, analyze tax implications, and generate insightful reports.',
    icon: <FiBarChart className="text-2xl sm:text-3xl" />,
    color: 'from-purple-500 to-pink-500',
    features: ['Real-time analytics', 'Expense tracking', 'Tax optimization'],
  },
];

const benefits = [
  { icon: <FiCheckCircle />, text: 'No credit card required' },
  { icon: <FiShield />, text: 'Bank-level security' },
  { icon: <FiCheckCircle />, text: '30-day free trial' },
];

export default function GetStartedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <FiCheckCircle className="text-green-500" />
            <span>QUICK SETUP • NO TECHNICAL SKILLS REQUIRED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Get Started in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Minutes
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            Simple onboarding process to get you up and running quickly. No complex setup required.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Background Number - Responsive */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-7xl sm:text-8xl lg:text-9xl font-bold text-gray-100/60 sm:text-gray-100 z-0 select-none">
                  {step.number}
                </div>
                
                {/* Step Card */}
                <div className="relative z-10 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-b ${step.color}`} />
                  
                  <div className="pl-4 sm:pl-6">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg`}>
                      {step.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6 sm:mb-8">
                      {step.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FiCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <Link href="/signup">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                      >
                        <span className="text-base sm:text-lg">Learn More</span>
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Start With SVRA Properties?
                </h3>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Join thousands of property professionals who simplified their management process
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-blue-600">
                      {benefit.icon}
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-800 whitespace-nowrap">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ready to Transform Your Property Management?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
                Start your free trial today. No commitment, cancel anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-base sm:text-lg">Start Your Free Trial Now</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link href="/demo" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-md border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-base sm:text-lg">Watch Demo</span>
                  </motion.button>
                </Link>
              </div>
              
              <p className="text-gray-500 text-sm sm:text-base mt-6">
                Free 30-day trial • No credit card required • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}