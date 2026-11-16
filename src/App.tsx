import { SignInButton, SignUpButton, UserButton } from '@clerk/react';
import heroImage from './Ko‘k fonda zamonaviy ish joyi.png';
import { FaInstagram, FaTwitter, FaDiscord, FaBalanceScale } from 'react-icons/fa'; 

export default function Home() {
  return (
    <div>
    
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">
            My App
          </span>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Kirish
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Ro'yxatdan o'tish
            </button>
          </SignUpButton>

          <UserButton />
        </div>
      </header>

     
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Zamonaviy IT ish joyi"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Biz haqimizda
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Biz zamonaviy texnologiyalar va innovatsion yechimlar orqali qulay hamda samarali ish muhitini yaratamiz.
          </p>
        </div>
      </section>

    
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizning Asosiy Xizmatlarimiz</h2>
            <p className="text-gray-600">Sizning biznesingiz va kundalik vazifalaringizni avtomatlashtirish uchun eng yaxshi yechimlar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tezkor Ishga Tushirish</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Loyihangizni qisqa fursatlarda tayyor holatga keltirib, foydalanuvchilarga taqdim etamiz.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovatsion Yondashuv</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Eng so'nggi texnologiyalar va zamonaviy dizayn tamoyillaridan foydalanamiz.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Xavfsizlik va Ishonchlilik</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Ma'lumotlaringiz xavfsizligi eng yuqori darajada himoyalangan.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {[
            { title: "We use cookies.", desc: "We use cookies to ensure that we give you the best experience on our website." },
            { title: "Privacy First.", desc: "Your data is completely secure and protected under high-standard privacy guidelines." },
            { title: "Fast Performance.", desc: "Enjoy lightning-fast speeds and optimized workflows for your daily tasks." },
            { title: "24/7 Support.", desc: "Our dedicated support team is always ready to help you whenever you need assistance." }
          ].map((card, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-between bg-white p-7 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(123,87,255,0.15)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
           
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

             
              <div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300 mb-2">
                <svg xmlSpace="preserve" viewBox="0 0 122.88 122.25" className="w-[42px] fill-[#7b57ff]">
                  <g>
                    <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z" />
                  </g>
                </svg>
              </div>

              
              <div className="text-center my-3">
                <p className="text-lg font-bold text-gray-900">{card.title}</p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {card.desc}{' '}
                  <a href="#" className="text-purple-600 hover:underline font-medium">Learn more</a>.
                </p>
              </div>

              
              <div className="flex flex-row gap-3 w-full mt-4">
                <button className="flex-1 py-2.5 cursor-pointer rounded-xl bg-[#7b57ff] font-semibold text-white text-xs hover:bg-[#6842e8] shadow-md shadow-purple-200 transition-all">
                  Allow
                </button>
                <button className="flex-1 py-2.5 cursor-pointer rounded-xl bg-gray-100 font-semibold text-gray-600 text-xs hover:bg-gray-200 transition-all">
                  Decline
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    
      <footer className="bg-[#0b0b0b] text-[#9e9e9e] px-6 py-12 md:px-16 text-sm font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="text-[#8b5cf6]">u</span>iverse
            </a>
            <p className="text-[#888888]">Uiverse | The universe of UI</p>
            
            <div className="flex items-center gap-2 text-white font-semibold">
              <FaBalanceScale className="text-base" /> MIT License
            </div>
            <p className="text-[#888888] leading-relaxed">
              All content (UI elements) on this site are published under the{' '}
              <a href="#" className="text-[#b0b0b0] underline hover:text-white transition-colors">
                MIT License
              </a>.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors">
                <FaDiscord />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Tools</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">
                  SuperSample.dev
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Design Systems</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Cssbuttons.io</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Neumorphism.io</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Browsergames.gg</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Information</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Post Guidelines</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Give feedback</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Report bug</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Cookie policy</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 text-[#666666] text-xs">
          2026 Pixel Galaxies. All rights reserved. - Uiverse.io
        </div>
      </footer>
    </div>
  );
}