'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiClipboard, FiBarChart2, FiDollarSign, FiUsers, FiLock, FiArrowRight } from 'react-icons/fi';

const features = [
  {
    icon: <FiFileText />,
    title: 'Rent Collection & Payments',
    description: 'Collect rent securely through digital payments, track payment history, and send automatic reminders to reduce delays and improve cash flow.',
    linkText: 'Learn About Tax Tools',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FiClipboard />,
    title: 'Smart Rental Agreement Management',
    description: 'Create, manage, and securely store all rental agreements and tenant communications in one centralized, accessible location.',
    linkText: 'Manage Agreements Now',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Advanced Property Analytics',
    description: 'Access detailed performance reports, cash flow projections, and market insights to make informed decisions and maximize returns.',
    linkText: 'View Analytics Demo',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FiDollarSign />,
    title: 'Comprehensive Expense Management',
    description: 'Effortlessly track, categorize and manage expenses. Gain real-time insights into your property\'s financial health.',
    linkText: 'Explore Expense Tools',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: <FiUsers />,
    title: 'Multi-User Role System',
    description: 'Assign specific roles (Owner, Manager, Tenant, Investor) with tailored permissions, fostering better collaboration and communication.',
    linkText: 'See Role Benefits',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <FiLock />,
    title: 'Secure Document Storage',
    description: 'Keep all vital property documents securely stored and easily accessible when needed.',
    linkText: 'Discover Document Security',
    gradient: 'from-gray-700 to-gray-900',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Every Role
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage properties efficiently and effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full card-hover">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                {/* <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                >
                  {feature.linkText}
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}