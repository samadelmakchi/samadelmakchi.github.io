
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Instagram, Mail, Twitter, 
  MessageCircle, Send, Facebook, ChevronDown, Rocket, 
  Code, Shield, Brain, BarChart3, Users, Briefcase, GraduationCap,
  Globe2, Lightbulb, CheckCircle2, ChevronLeft, Link
} from 'lucide-react';
import { SOCIAL_LINKS, SKILL_CATEGORIES, EXPERIENCES, EDUCATION, LANGUAGES } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'درباره من', href: '#about' },
    { name: 'مهارت‌ها', href: '#skills' },
    { name: 'تجربیات', href: '#experience' },
    { name: 'تحصیلات', href: '#education' },
    { name: 'تماس', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-black tracking-tighter gradient-text">صمد المکچی</span>
          </div>
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-indigo-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin': return <Linkedin size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'message-circle': return <MessageCircle size={20} />;
      case 'send': return <Send size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'github': return <Github size={20} />;
      case 'mail': return <Mail size={20} />;
      // Added Link to imports to satisfy the default case
      default: return <Link size={20} />;
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-indigo-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/6169366?v=4" 
              alt="صمد المکچی" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl relative"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">صمد المکچی</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed font-medium">
            استراتژیست بازاریابی دیجیتال | مدیر محصول چابک | توسعه‌دهنده فول‌استک | معمار سیستم
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${link.color} text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform`}
              >
                {getIcon(link.icon)}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          
          <a href="#about" className="animate-bounce text-slate-400 hover:text-indigo-500">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl -z-10 opacity-40 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-40 -ml-48 -mb-48"></div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/tech/800/800" alt="Work background" className="object-cover w-full h-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-4xl font-black">+۲۰</p>
            <p className="text-sm">سال تجربه حرفه‌ای</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-black mb-6 text-slate-900 flex items-center gap-3">
            <Users className="text-indigo-600" />
            درباره من
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>سلام 👋 من <strong>صمد المکچی</strong> هستم.</p>
            <p>من <strong>مهندس نرم‌افزار</strong> و <strong>معمار سیستم</strong> با بیش از بیست سال تجربه حرفه‌ای در طراحی، توسعه و مقیاس‌پذیری سیستم‌های تحت وب و معماری‌های میکروسرویس هستم.</p>
            <p>تلفیقی از دانش فنی عمیق در حوزه‌های DevOps، بک‌اند، فرانت‌اند، تست و مستندسازی و درک راهبردی از رشد کسب‌وکار، بازاریابی دیجیتال، استراتژی فروش، تحلیل داده و گیمیفیکیشن دارم که امکان ایجاد پل میان فناوری و اهداف تجاری را فراهم می‌کند.</p>
            <p>تمرکز من بر خلق محصولاتی با معماری قدرتمند و عملکرد پایدار است که بتوانند تجربه‌ای متمایز برای کاربر ارائه داده و به رشد واقعی و پایدار سازمان‌ها منجر شوند. رویکرد من بر تفکر سیستمی، تحلیل داده‌محور و اصول مدیریت چابک استوار است.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { label: 'تفکر سیستمی', icon: Brain },
              { label: 'مدیریت چابک', icon: Rocket },
              { label: 'تحلیل داده‌محور', icon: BarChart3 }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <item.icon className="text-indigo-600 mb-2" size={24} />
                <span className="text-sm font-bold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Rocket size={24} className="text-indigo-500" />;
      case 1: return <BarChart3 size={24} className="text-pink-500" />;
      case 2: return <Brain size={24} className="text-purple-500" />;
      case 3: return <Shield size={24} className="text-blue-500" />;
      case 4: return <Code size={24} className="text-green-500" />;
      case 5: return <Globe2 size={24} className="text-orange-500" />;
      default: return <Code size={24} className="text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">مهارت‌های تخصصی</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">مجموعه‌ای از توانمندی‌های فنی و مدیریتی که در طول دو دهه فعالیت حرفه‌ای کسب شده است.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-black text-xl text-slate-800">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{skill.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-3">
          <Briefcase className="text-indigo-600" /> سوابق کاری
        </h2>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-8 bottom-0 w-0.5 bg-slate-100 hidden md:block"></div>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative md:pr-16 group">
              <div className="absolute -right-2 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>
              <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-transparent group-hover:border-indigo-200 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-bold">{exp.company}</p>
                  </div>
                  <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-500">
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ExtraInfo = () => (
  <section id="education" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
            <GraduationCap className="text-indigo-400" /> تحصیلات
          </h2>
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1 bg-indigo-500 rounded-full h-auto"></div>
                <div>
                  <h3 className="font-black text-lg text-white">{edu.degree} - {edu.major}</h3>
                  <p className="text-slate-400 font-medium">{edu.university}</p>
                  <p className="text-indigo-400 text-sm font-bold mt-1">{edu.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Traits */}
        <div>
          <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
            <Globe2 className="text-indigo-400" /> زبان‌ها و ویژگی‌ها
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="font-bold text-white text-sm">{lang.name}</p>
                <p className="text-slate-400 text-xs">{lang.level}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              "آرام، منظم، پرانرژی",
              "همکاری‌محور و متمرکز بر یادگیری جمعی",
              "علاقه‌مند به مستندسازی حرفه‌ای",
              "تفکر سیستم‌محور (کد + فرآیند + کسب‌وکار)",
              "حل مسئله با رویکرد داده‌محور و خلاق"
            ].map((trait, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Goals = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-600 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <Lightbulb className="text-indigo-200 mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">به دنبال چه هستم؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            {[
              "ساخت سیستم‌های فنی قوی و مقیاس‌پذیر",
              "طراحی تجربه کاربری عالی",
              "اجرای استراتژی‌های رشد هوشمند",
              "رهبری تیم‌های چابک و هم‌افزا"
            ].map((goal, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl text-white font-medium">
                <ChevronLeft size={20} className="text-indigo-200" />
                {goal}
              </div>
            ))}
          </div>
          <p className="mt-12 text-indigo-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            اگر تیم شما به کسی نیاز دارد که هم کد بزند، هم فرآیند بسازد، هم بازار را بشناسد و هم تیم را متحد کند — من همین‌جام.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a href="mailto:samad.elmakchi@gmail.com" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-black hover:bg-indigo-50 transition-colors shadow-lg">
               شروع همکاری
             </a>
             <a href="https://t.me/samadelmakchi" target="_blank" className="bg-indigo-500 text-white px-8 py-3 rounded-full font-black border border-indigo-400 hover:bg-indigo-400 transition-colors">
               گفتگو در تلگرام
             </a>
          </div>
        </div>
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-xl font-black tracking-tighter gradient-text block mb-4">صمد المکچی</span>
      <p className="text-slate-400 text-sm mb-8">© {new Date().getFullYear()} - تمامی حقوق محفوظ است.</p>
      <div className="flex justify-center gap-4">
        {SOCIAL_LINKS.slice(0, 4).map((link) => (
          <a key={link.name} href={link.url} className="text-slate-400 hover:text-indigo-600 transition-colors">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ExtraInfo />
      <Goals />
      <Footer />
    </div>
  );
};

export default App;
