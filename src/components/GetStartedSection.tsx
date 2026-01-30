'use client';

import { motion } from 'framer-motion';
import { FiUpload, FiBarChart, FiArrowRight } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Add Your Properties',
    description: 'Securely import your property details, existing leases, and financial records. Our smart system will help categorize everything.',
    icon: <FiUpload />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Optimize & Analyze',
    description: 'Dive into your personalized dashboard. Track expenses, manage tenants, analyze tax implications, and generate insightful reports.',
    icon: <FiBarChart />,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function GetStartedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple onboarding process to get you up and running quickly
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-gray-100 z-0">
                  {step.number}
                </div>
                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-8`}>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-8">{step.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Get Started
                    <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-12 py-4 text-lg"
            >
              Start Your Free Trial Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}