'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/9c/a6/0d/9ca60da5a3a315ade76ed81d3ada2574.jpg"
          alt="Newsletter background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2 sm:mb-3">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
            Subscribe to our newsletter for latest updates and exclusive offers
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={subscribed}
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all disabled:opacity-50 flex items-center justify-center space-x-2 text-sm whitespace-nowrap"
            >
              {subscribed ? (
                <>
                  <FiCheck className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <FiMail className="w-5 h-5" />
                  <span>Subscribe</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
