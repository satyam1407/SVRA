'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  const features = [
    { icon: <FiUsers className="text-lg md:text-xl" />, text: 'Multi-Role Access' },
    { icon: <FiTrendingUp className="text-lg md:text-xl" />, text: 'Real-Time Analytics' },
    // { icon: <FiCheckCircle className="text-lg md:text-xl" />, text: 'Tax Compliance' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Replace with your actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/70" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
            >
              Simplify Property{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient bg-300%">
                Management
              </span>
            </motion.h1>

            {/* Main Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-10 max-w-2xl leading-relaxed"
            >
              A comprehensive platform for property owners, managers, tenants, and investors to manage properties, expenses, claims, and rental agreements with ease.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 md:mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <FiCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-gray-800 whitespace-nowrap">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12"
            >
              <Link href={'/signup'} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Get Started Free
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href={'/signin'} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-md border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                >
                  Sign In
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats/Trust indicator */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Property Professionals</p>
                </div>
              </div>
              
              <div className="hidden sm:block h-8 w-px bg-gray-300" />
              
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">4.9/5</p>
                  <p className="text-xs text-gray-600">Customer Rating</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-xl hidden lg:block"
        />
        
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-xl hidden lg:block"
        />
      </div>
    </section>
  );
}