import React from 'react';
import { SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { Sparkles, Shield, Zap, ArrowRight, Cpu, Globe } from 'lucide-react';
import { FaInstagram, FaTwitter, FaDiscord, FaBalanceScale } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Background Neon Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navbar with Clerk Auth */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Nexus<span className="text-indigo-400">IT</span>
            </span>
          </div>
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition">Asosiy</a>
            <a href="#services" className="hover:text-indigo-400 transition">Xizmatlar</a>
            <a href="#about" className="hover:text-indigo-400 transition">Biz haqimizda</a>
          </nav>

          {/* Clerk Auth Buttons & Profile */}
          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
                Kirish
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all">
                Ro'yxatdan o'tish
              </button>
            </SignUpButton>

            <div className="ml-2 flex items-center">
              <UserButton />
            </div>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-4 h-4" /> Kelajak texnologiyalari endi Sizning biznesingizda
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Biznesingizni raqamli <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              cho‘qqilarga olib chiqing
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zamonaviy veb-ilovalar, sun'iy intellekt integratsiyasi va yuqori tezlikdagi IT yechimlar orqali raqobatchilardan oldinda bo'ling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition duration-200 flex items-center justify-center gap-2">
              Loyihani boshlash <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition duration-200">
              Portfolio ko'rish
            </button>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nima uchun bizni tanlashadi?</h2>
            <p className="text-slate-400">Biz eng so‘nggi texnologiyalar va mukammal dizayn yondashuvidan foydalanamiz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-indigo-500/50 transition group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">O‘ta yuqori tezlik</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                React va zamonaviy frontend arxitekturasi yordamida sahifalar soniya ulushida ochilishini ta’minlaymiz.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Xavfsizlik va Ishonchlilik</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ma’lumotlaringiz eng so‘nggi shifrlash protokollari va xavfsizlik standartlari asosida himoyalanadi.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-teal-500/50 transition group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Global Masshtab</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Istalgan hajmdagi yuklamalarga bardosh beruvchi bulutli (Cloud) infratuzilma yechimlari.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] text-[#9e9e9e] px-6 py-12 md:px-16 text-sm font-sans border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="text-[#8b5cf6]">Nexus</span>IT
            </a>
            <p className="text-[#888888]">Kelajak texnologiyalari markazi</p>
            
            <div className="flex items-center gap-2 text-white font-semibold">
              <FaBalanceScale className="text-base" /> MIT License
            </div>
            
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors"><FaInstagram /></a>
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors"><FaTwitter /></a>
              <a href="#" className="text-[#b0b0b0] hover:text-white text-lg transition-colors"><FaDiscord /></a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Tools</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">React.js</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Design Systems</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Components</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Information</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-base">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 text-[#666666] text-xs">
          2026 NexusIT. All rights reserved.
        </div>
      </footer>

    </div>
  );
}