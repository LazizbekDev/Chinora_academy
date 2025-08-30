import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header-background py-6 md:py-10 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Xush kelibsiz!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mt-2"
        >
          Sizning kelajagingizni o‘zgartirish uchun bu yerdan boshlang.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;