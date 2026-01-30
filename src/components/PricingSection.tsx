'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

const plans = [
  {
    name: 'Professional',
    description: 'Advanced features for growing property portfolios and small management teams.',
    price: '$149.99',
    period: '/month',
    features: [
      'Up to 10 Properties',
      'Advanced Expense Management',
      'Multi-User Access (3)',
      'Rental Agreement Templates',
      'Property Performance Analytics',
      'Priority Email & Chat Support',
    ],
    buttonText: 'Choose Professional',
    popular: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large property management firms.',
    price: '$499',
    period: '/month',
    features: [
      'Unlimited Properties',
      'Custom User Roles',
      'Account Manager',
      '24/7 Support',
      'Advanced Security & Compliance',
      'API Access',
    ],
    buttonText: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold flex items-center">
                    <FiStar className="mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              }`}>
                <div className={`p-8 bg-gradient-to-r ${plan.gradient} text-white`}>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-blue-100">{plan.description}</p>
                  <div className="mt-6 flex items-end">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-xl ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FiCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-semibold ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-12"
        >
          Have questions? Check our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            FAQ
          </a>
        </motion.p>
      </div>
    </section>
  );
}