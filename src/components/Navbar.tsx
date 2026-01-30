'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-blue-900 cursor-pointer">SVRA Properties</span>
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
                className="btn-secondary cursor-pointer"
              >
                Sign In
              </motion.button>
              </Link>
              <Link href={'signup'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cursor-pointer"
              >
                Get Started
              </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <a href="#features" className="block px-4 py-2 hover:bg-blue-50">Features</a>
                <a href="#pricing" className="block px-4 py-2 hover:bg-blue-50">Pricing</a>
                <a href="#testimonials" className="block px-4 py-2 hover:bg-blue-50">FAQ</a>
                <div className="px-4 space-y-2 pt-4 border-t">
                  <button className="btn-secondary w-full">Watch Demo</button>
                  <button className="btn-primary w-full">Start Free Trial</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
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