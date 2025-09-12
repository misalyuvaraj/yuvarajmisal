import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const CookieBanner = () => {
  const { data } = usePortfolio();
  const message = data?.privacy?.cookiesMessage || '';
  const cta = data?.privacy?.cta || 'Got It';

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted && message) setVisible(true);
  }, [message]);

  if (!visible || !message) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto"
    >
      <div className="bg-gray-900 text-white rounded-xl shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 border border-gray-700">
        <p className="text-sm sm:text-base opacity-90">{message}</p>
        <button
          onClick={() => {
            localStorage.setItem('cookieAccepted', 'true');
            setVisible(false);
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

export default CookieBanner;



