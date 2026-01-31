// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const testimonials = [
//   {
//     name: 'Mark Johnson',
//     role: 'Property Manager at Elite Property Management',
//     content: "Managing multiple properties across different clients is complex. This tool simplifies everything from tenant communications to maintenance requests and financial reporting. My team's efficiency has skyrocketed.",
//     rating: 5,
//   },
//   {
//     name: 'Jessica White',
//     role: 'Commercial Property Owner at Whitestone Holdings',
//     content: "We needed a robust solution for our commercial portfolio, and this platform delivered. The multi-user roles feature is fantastic for our accounting and operations teams.",
//     rating: 5,
//   },
//   {
//     name: 'Emily Rodrigo',
//     role: 'Real Estate Investment Advisor',
//     content: "As an investor, having detailed revenue and expense breakdowns gives me the data I need to make informed decisions impacting my portfolio's performance.",
//     rating: 5,
//   },
//   {
//     name: 'David Chen',
//     role: 'Property Owner',
//     content: "The tax compliance features alone have saved me thousands in missed deductions. The platform pays for itself many times over.",
//     rating: 5,
//   },
// ];

// export default function TestimonialsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             What Our{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Clients Say
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Trusted by property professionals worldwide
//           </p>
//         </motion.div>

//         <div className="max-w-6xl mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             loop={true}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             breakpoints={{
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//             className="pb-12"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full card-hover"
//                 >
//                   <div className="flex mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <FiStar key={i} className="text-yellow-500 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 italic mb-8">"{testimonial.content}"</p>
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-gray-600">{testimonial.role}</p>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* <div className="flex justify-center items-center space-x-4 mt-8">
//             <button className="swiper-button-prev w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
//               <FiChevronLeft className="text-gray-700 text-xl" />
//             </button>
//             <div className="flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//             <button className="swiper-button-next w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
//               <FiChevronRight className="text-gray-700 text-xl" />
//             </button>
//           </div> */}
//         </div>

//         <AnimatePresence>
//           {testimonials[activeIndex] && (
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mt-16 max-w-3xl mx-auto text-center"
//             >
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-2xl font-bold mb-6">
//                 {testimonials[activeIndex].name.charAt(0)}
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 {testimonials[activeIndex].name}
//               </h3>
//               <p className="text-gray-600">{testimonials[activeIndex].role}</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    name: 'Mark Johnson',
    role: 'Property Manager at Elite Property Management',
    content: "Managing multiple properties across different clients is complex. This tool simplifies everything from tenant communications to maintenance requests and financial reporting. My team's efficiency has skyrocketed.",
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Jessica White',
    role: 'Commercial Property Owner at Whitestone Holdings',
    content: "We needed a robust solution for our commercial portfolio, and this platform delivered. The multi-user roles feature is fantastic for our accounting and operations teams.",
    rating: 5,
    avatar: 'JW',
  },
  {
    name: 'Emily Rodrigo',
    role: 'Real Estate Investment Advisor',
    content: "As an investor, having detailed revenue and expense breakdowns gives me the data I need to make informed decisions impacting my portfolio's performance.",
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David Chen',
    role: 'Property Owner',
    content: "The tax compliance features alone have saved me thousands in missed deductions. The platform pays for itself many times over.",
    rating: 5,
    avatar: 'DC',
  },
  {
    name: 'Sarah Miller',
    role: 'Real Estate Portfolio Manager',
    content: "The real-time analytics and reporting features transformed how we track performance across 50+ properties. Our decision-making process is now data-driven and efficient.",
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'Robert Kim',
    role: 'Property Investor',
    content: "Finally, a platform that understands the needs of investors. The ROI tracking and predictive analytics have helped us identify profitable opportunities we would have otherwise missed.",
    rating: 5,
    avatar: 'RK',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiStar className="text-yellow-500" />
            <span>TRUSTED BY 10,000+ PROPERTY PROFESSIONALS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of property professionals who have transformed their management experience
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Swiper Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="hidden lg:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
              <button
                ref={navigationPrevRef}
                className="swiper-button-prev w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:shadow-xl transition-all duration-300 pointer-events-auto border border-gray-200 -translate-x-6"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="text-gray-700 text-xl" />
              </button>
              <button
                ref={navigationNextRef}
                className="swiper-button-next w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:shadow-xl transition-all duration-300 pointer-events-auto border border-gray-200 translate-x-6"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="text-gray-700 text-xl" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay initialization to ensure refs are set
                setTimeout(() => {
                  if (swiper?.params?.navigation) {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }, 100);
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function (index, className) {
                  return `<span class="${className} w-2 h-2 rounded-full bg-gray-300 opacity-100"></span>`;
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="!pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
                  >
                    {/* Decorative quote icon */}
                    {/* <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity"> */}
                      {/* <FiQuote className="w-24 h-24 text-blue-600" /> */}
                    {/* </div> */}

                    {/* Rating */}
                    <div className="flex mb-4 md:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className="w-5 h-5 text-yellow-500 fill-current" 
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="flex-grow mb-6 md:mb-8 relative z-10">
                      <p className="text-gray-600 text-base md:text-sm md:min-h-30 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-bold text-gray-900 truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            <div 
              ref={paginationRef} 
              className="swiper-pagination flex justify-center items-center gap-2 mt-8 lg:mt-0"
            />
          </div>

          {/* Active Testimonial Highlight */}
          <motion.div
            key={activeIndex + 1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 md:mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                    {testimonials[activeIndex + 1]?.avatar}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[activeIndex + 1]?.rating || 5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[activeIndex]?.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {testimonials[activeIndex]?.role}
                  </p>
                  <p className="text-gray-700 italic text-center md:text-left">
                    "{testimonials[activeIndex]?.content}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          {/* <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: '10K+', label: 'Properties Managed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
                { value: '4.9/5', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}