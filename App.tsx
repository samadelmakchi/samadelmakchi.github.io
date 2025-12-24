
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Linkedin, Instagram, Mail, Twitter, 
  MessageCircle, Send, Facebook, ChevronDown, 
  Code, Shield, Brain, BarChart3, Briefcase, GraduationCap,
  Globe2, Lightbulb, CheckCircle2, ChevronLeft, Link, TrendingUp, Target, MousePointer2,
  Users, Rocket, Handshake, Award
} from 'lucide-react';
import { SOCIAL_LINKS, SKILL_CATEGORIES, EDUCATION, LANGUAGES, ROLES, CLIENTS, STARTUPS, PARTNERS } from './constants';

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
    { name: 'نقش‌ها', href: '#roles' },
    { name: 'تخصص‌ها', href: '#skills' },
    { name: 'پروژه‌ها و همکاران', href: '#portfolio' },
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
      case 'github': return <Link size={20} />;
      case 'mail': return <Mail size={20} />;
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
            استراتژیست رشد و معمار مارکتینگ‌تک | متخصص تحول دیجیتال
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
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-indigo-100">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Digital Marketing Strategy" className="object-cover w-full h-full mix-blend-multiply opacity-90" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block text-center">
            <p className="text-2xl font-bold">Data Driven</p>
            <p className="text-xs opacity-80 uppercase tracking-widest mt-1">Growth Engineering</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-black mb-6 text-slate-900 flex items-center gap-3">
            <Target className="text-indigo-600" />
            درباره تخصص و استراتژی من
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
            <p>من <strong>صمد المکچی</strong>، متخصص و استراتژیست بازاریابی دیجیتال با بیش از دو دهه تجربه در قلب دنیای فناوری هستم. نگاه من به مارکتینگ، فراتر از تبلیغات صرف است؛ من به <strong>«مهندسی رشد»</strong> معتقدم. جایی که تحلیل دقیق داده‌ها، درک عمیق روانشناسی مشتری و زیرساخت‌های فنی پیشرفته (MarTech) با هم تلاقی می‌کنند تا یک سیستم بازاریابی هوشمند و مقیاس‌پذیر خلق شود.</p>
            <p>تخصص من در طراحی <strong>استراتژی‌های جامع دیجیتال</strong>، از بهینه‌سازی موتورهای جستجو (SEO) و مدیریت کمپین‌های تبلیغاتی تا تحلیل پیشرفته رفتار کاربر و افزایش نرخ تبدیل (CRO) متمرکز است. من به کسب‌وکارها کمک می‌کنم تا با استفاده از هوش مصنوعی و اتوماسیون، نه تنها دیده شوند، بلکه وفاداری مشتری را به یک دارایی پایدار تبدیل کنند.</p>
            <p>تجربه من در نقش‌هایی چون مالک محصول و معمار سیستم، به من این توانایی را داده است که شکاف میان تیم‌های مارکتینگ و فنی را پر کرده و با پیاده‌سازی شاخص‌های کلیدی عملکرد (KPIs)، مسیر رشد را شفاف و قابل اندازه‌گیری نمایم.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { label: 'بهینه‌سازی تبدیل', icon: MousePointer2 },
              { label: 'مارکتینگ‌تک', icon: Briefcase },
              { label: 'تحلیل داده', icon: BarChart3 }
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

const RolesSection = () => (
  <section id="roles" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4">نقش‌ها و مسئولیت‌ها</h2>
        <p className="text-slate-500">تخصص‌های متنوعی که در طول سال‌ها تجربه در پروژه‌های بزرگ ایفا کرده‌ام.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {ROLES.map((role, idx) => (
          <div key={idx} className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 text-slate-700 font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all cursor-default">
            {role}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <TrendingUp size={24} className="text-indigo-500" />;
      case 1: return <Shield size={24} className="text-blue-500" />;
      case 2: return <Briefcase size={24} className="text-pink-500" />;
      case 3: return <Code size={24} className="text-green-500" />;
      case 4: return <BarChart3 size={24} className="text-orange-500" />;
      case 5: return <Users size={24} className="text-purple-500" />;
      default: return <Lightbulb size={24} className="text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">مهارت‌های تخصصی</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">مجموعه ابزارها و دانش فنی من برای خلق ارزش در پروژه‌های دیجیتال.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl group-hover:bg-indigo-50 transition-colors">
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
                      {skill.description && <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{skill.description}</p>}
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

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Clients */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-black text-slate-900">تعدادی از مشتریان</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-slate-700 text-sm font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Startups & Partners */}
        <div className="lg:col-span-2 space-y-12">
          {/* Startups */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="text-orange-500" size={28} />
              <h2 className="text-2xl font-black text-slate-900">استارتاپ‌ها</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {STARTUPS.map((startup, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 text-center font-black text-lg text-slate-800">
                  {startup}
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="text-green-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">همکاران</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PARTNERS.map((partner, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-slate-700 font-bold flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Users size={18} className="text-indigo-600" />
                  </div>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExtraInfo = () => (
  <section id="education" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
              "علاقه‌مند به مستندسازی استراتژی‌ها",
              "تفکر سیستم‌محور (مارکتینگ + تکنولوژی)",
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">چشم‌انداز همکاری</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            {[
              "افزایش سهم بازار با استراتژی‌های مدرن",
              "بهینه‌سازی نرخ تبدیل و سفر مشتری",
              "اجرای کمپین‌های داده‌محور و ROI-Positive",
              "هدایت تیم‌های نوپا در مسیر محصول و رشد"
            ].map((goal, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl text-white font-medium">
                <ChevronLeft size={20} className="text-indigo-200" />
                {goal}
              </div>
            ))}
          </div>
          <p className="mt-12 text-indigo-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            من به دنبال پروژه‌هایی هستم که در آن تکنولوژی و دیجیتال مارکتینگ برای خلق ارزش واقعی با هم ترکیب شوند.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a href="mailto:samad.elmakchi@gmail.com" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-black hover:bg-indigo-50 transition-colors shadow-lg">
               درخواست مشاوره رشد
             </a>
             <a href="https://t.me/samadelmakchi" target="_blank" className="bg-indigo-500 text-white px-8 py-3 rounded-full font-black border border-indigo-400 hover:bg-indigo-400 transition-colors">
               گفتگو در تلگرام
             </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-50 border-t border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-xl font-black tracking-tighter gradient-text block mb-4">صمد المکچی</span>
      <p className="text-slate-400 text-sm mb-8">© {new Date().getFullYear()} - استراتژیست رشد و تحول دیجیتال</p>
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
    <div className="min-h-screen text-right" dir="rtl">
      <Navbar />
      <Hero />
      <About />
      <RolesSection />
      <Skills />
      <PortfolioSection />
      <ExtraInfo />
      <Goals />
      <Footer />
    </div>
  );
};

export default App;
