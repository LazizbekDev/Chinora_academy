import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Xato: Foydalanuvchi mavjud bo‘lmagan sahifaga kirdi:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF7F3] text-[#2E1F26]">
      <div className="text-center max-w-md px-6">
        <h1 className="text-6xl font-bold text-[#C7A27C] mb-4">404</h1>
        <p className="text-xl font-serif mb-3">Oops! Sahifa topilmadi</p>
        <p className="text-gray-600 mb-6">
          Siz qidirayotgan manzil mavjud emas yoki o‘chirib yuborilgan bo‘lishi mumkin.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full 
          bg-[#C7A27C] text-[#2E1F26] px-6 py-3 font-semibold 
          shadow-lg hover:shadow-xl hover:bg-[#b08f67] transition"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
};

export default NotFound;
