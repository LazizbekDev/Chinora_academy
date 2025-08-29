import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-red-900 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm">start 1 July</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-2/3">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Ingliz tili darajangizni 3 bosqichga ko'taring va Amerikancha aksenda, qo'ramasdan gapirishni boshlang!
            </h1>
            <nav className="flex space-x-6 text-lg">
              <a href="#kim-uchun" className="hover:text-red-300">Kim uchun</a>
              <a href="#metodning-avtori" className="hover:text-red-300">Metodning avtori</a>
              <a href="#programma" className="hover:text-red-300">Programma</a>
              <a href="#narxi" className="hover:text-red-300">Narxi</a>
              <a href="#savollar" className="hover:text-red-300">Ko'p beriladigan savollar</a>
            </nav>
            <button className="mt-8 bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full flex items-center">
              <span className="mr-2">+</span> Batafsil ma'lumot olish
            </button>
          </div>
          <div className="w-1/3">
            <div className="bg-gray-700 h-96 rounded-lg flex items-center justify-center">
              {/* Placeholder for professional person image */}
              <span className="text-gray-400">Professional Person Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;