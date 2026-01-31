'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Handle smooth scroll for anchor links
  const handleScrollToSection = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-screen z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href={'/'}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">S</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer">
                  SVRA Properties
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {pathname !== '/' && (
                <Link href="/">
                  <motion.div
                    whileHover={{ scale: 1.05, color: '#2563eb' }}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Home
                  </motion.div>
                </Link>
              )} 
              <motion.a
                whileHover={{ scale: 1.05, color: '#2563eb' }}
                href="/#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#2563eb' }}
                href="/#pricing"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Pricing
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#2563eb' }}
                href="/#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                FAQ
              </motion.a>
              <div className="flex space-x-4">
                <Link href={'/signin'}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link href={'/signup'}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="right-3 md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Now as a full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-xl font-bold text-blue-900">
                      SVRA Properties
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 p-6 space-y-1">
                  {pathname !== '/' && (
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        Home
                      </div>
                    </Link>
                  )}
                  <button
                    onClick={() => handleScrollToSection('features')}
                    className="w-full text-left px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => handleScrollToSection('pricing')}
                    className="w-full text-left px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => handleScrollToSection('testimonials')}
                    className="w-full text-left px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    FAQ
                  </button>
                </div>

                {/* CTA Buttons */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <Link href={'/signin'} onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3.5 text-blue-600 font-medium border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors">
                      Sign In
                    </button>
                  </Link>
                  <Link href={'/signup'} onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiMenu, FiX, FiUser } from 'react-icons/fi';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-2 cursor-pointer"
//             >
//               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">S</span>
//               </div>
//               <span className="text-2xl font-bold text-blue-900">SVRA</span>
//             </motion.div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {/* {pathname !== '/' && (
//               <Link href="/">
//                 <motion.div
//                   whileHover={{ scale: 1.05, color: '#2563eb' }}
//                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                 >
//                   Home
//                 </motion.div>
//               </Link>
//             )} */}
//             <Link href="/#features">
//               <motion.div
//                 whileHover={{ scale: 1.05, color: '#2563eb' }}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 Features
//               </motion.div>
//             </Link>
//             <Link href="/#pricing">
//               <motion.div
//                 whileHover={{ scale: 1.05, color: '#2563eb' }}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 Pricing
//               </motion.div>
//             </Link>
//             <div className="flex items-center space-x-4">
//                 {/* <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                   <FiUser />
//                   <span>Sign In</span>
//                 </motion.button> */}
//               <div className="flex space-x-4">
//               <Link href="/signin">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="btn-secondary"
//                   >
//                   Sign in
//                 </motion.button>
//                   </Link>
//                 <Link href="/signup">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="btn-primary"
//                   >
//                     Get Started
//                   </motion.button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-700"
//           >
//             {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
//             >
//               <div className="py-4 space-y-4">
//                 {pathname !== '/' && (
//                   <Link href="/">
//                     <div className="block px-4 py-2 hover:bg-blue-50">Home</div>
//                   </Link>
//                 )}
//                 <Link href="/#features">
//                   <div className="block px-4 py-2 hover:bg-blue-50">Features</div>
//                 </Link>
//                 <Link href="/#pricing">
//                   <div className="block px-4 py-2 hover:bg-blue-50">Pricing</div>
//                 </Link>
//                 <Link href="/signin">
//                   <div className="block px-4 py-2 hover:bg-blue-50">Sign In</div>
//                 </Link>
//                 <div className="px-4 space-y-2 pt-4 border-t">
//                   <button className="btn-secondary w-full">Watch Demo</button>
//                   <Link href="/signup">
//                     <button className="btn-primary w-full">Start Free Trial</button>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }