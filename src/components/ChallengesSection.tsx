'use client';

import { motion } from 'framer-motion';
import { FiDollarSign, FiFile, FiUsers, FiAlertCircle } from 'react-icons/fi';

const challenges = [
  {
    title: 'Lack of Real-time Property Insights',
    description: 'Property owners and investors lack immediate access to consolidated financial performance data, making it challenging to assess profitability, identify trends, and make informed decisions for their portfolio.',
    icon: <FiFile className="text-2xl md:text-3xl" />,
    role: 'Owner, Investor/Banker',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Disorganized Expense Management',
    description: 'Property managers struggle with manual expense tracking, receipt management, and reconciling various vendor invoices, leading to errors, delays, and a lack of real-time financial oversight.',
    icon: <FiDollarSign className="text-2xl md:text-3xl" />,
    role: 'Property Manager',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Confusing Rental Agreements',
    description: 'Tenants often find rental agreements hard to understand, leading to misunderstandings about terms, responsibilities, and payment schedules.',
    icon: <FiUsers className="text-2xl md:text-3xl" />,
    role: 'Tenant',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function ChallengesSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Common Property Management{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Challenges
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We understand the pain points you face daily and provide solutions to overcome them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center text-white mb-4 md:mb-6 flex-shrink-0`}>
                  {challenge.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-base mb-4 md:mb-6 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                    {challenge.role}
                  </span>
                  <FiAlertCircle className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 text-lg md:text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}