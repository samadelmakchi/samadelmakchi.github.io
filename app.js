
import React, { useState, useEffect, useRef } from 'https://esm.sh/react@19.2.3';
import ReactDOM from 'https://esm.sh/react-dom@19.2.3/client';
import htm from 'https://esm.sh/htm';
import * as Lucide from 'https://esm.sh/lucide-react@0.561.0';

const html = htm.bind(React.createElement);

// --- Constants ---
const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samad-elmakchi', color: 'bg-[#0077B5]', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/samad.elmakchi', color: 'bg-[#E4405F]', icon: 'Instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/989141189645', color: 'bg-[#25D366]', icon: 'MessageCircle' },
  { name: 'Telegram', url: 'https://t.me/samadelmakchi', color: 'bg-[#0088cc]', icon: 'Send' },
  { name: 'X', url: 'https://x.com/elmakchi', color: 'bg-[#1DA1F2]', icon: 'Twitter' },
  { name: 'Facebook', url: 'https://facebook.com/samad.elmakchi', color: 'bg-[#1877F2]', icon: 'Facebook' },
  { name: 'GitHub', url: 'https://github.com/samadelmakchi', color: 'bg-[#181717]', icon: 'Github' },
  { name: 'Gmail', url: 'mailto:samad.elmakchi@gmail.com', color: 'bg-[#D14836]', icon: 'Mail' },
];

const ROLES = [
  "استراتژیست دیجیتال مارکتینگ", "برنامه نویس فول استک", "مالک محصول (Product Owner)",
  "اسکرام مستر", "تحلیل‌گر رفتار مشتری", "متخصص سئو (SEO)", "طراح کمپین‌های تبلیغاتی",
  "برنامه نویس بازارهای مالی", "برنامه نویس بلاکچین", "مهندس دواپس (DevOps)",
  "دیتا ویژوالیزیشن", "برنامه نویس موبایل", "طراح سایت"
];

const SKILL_CATEGORIES = [
  {
    title: 'دیجیتال مارکتینگ و رشد',
    icon: 'TrendingUp',
    items: [
      { title: 'استراتژی رشد', description: 'SEO, SEM, Google Ads, Content Strategy' },
      { title: 'تحلیل و بهینه‌سازی', description: 'GA4, GTM, Hotjar, CRO, A/B Testing' },
      { title: 'گیمیفیکیشن', description: 'طراحی با فریم‌ورک Octalysis برای وفادارسازی' },
      { title: 'اتوماسیون', description: 'HubSpot, CRM Integration, Zapier' }
    ]
  },
  {
    title: 'مدیریت محصول و تیم',
    icon: 'Target',
    items: [
      { title: 'متدولوژی‌های چابک', description: 'Scrum, Kanban, Agile Marketing' },
      { title: 'مدیریت پروژه', description: 'Jira, Confluence, Miro, Asana' },
      { title: 'نقش‌ها', description: 'Scrum Master, Product Owner' },
      { title: 'مهارت‌های نرم', description: 'رهبری تیم، حل تعارض، منتورینگ' }
    ]
  },
  {
    title: 'هوش مصنوعی (AI-Marketing)',
    icon: 'Brain',
    items: [
      { title: 'AI Agent Design', description: 'خودکارسازی تعامل و پشتیبانی هوشمند' },
      { title: 'n8n Workflow', description: 'اتصال سرویس‌ها برای اتوماسیون مارکتینگ' },
      { title: 'دیتاماینینگ', description: 'پیش‌بینی رفتار مشتری با مدل‌های ML' },
      { title: 'AI Automation', description: 'بهینه‌سازی جریان تولید محتوا' }
    ]
  },
  {
    title: 'دواپس و زیرساخت MarTech',
    icon: 'Shield',
    items: [
      { title: 'کانتینرسازی', description: 'Docker / Compose برای استقرار سریع' },
      { title: 'زیرساخت مقیاس‌پذیر', description: 'Kubernetes & CI/CD Pipelines' },
      { title: 'مانیتورینگ', description: 'Prometheus, Grafana برای پایداری سرویس' },
      { title: 'شبکه‌سازی', description: 'Traefik, Load Balancing' }
    ]
  },
  {
    title: 'توسعه نرم‌افزار',
    icon: 'Code',
    items: [
      { title: 'Backend', description: 'Laravel (PHP), FastAPI (Python)' },
      { title: 'Frontend', description: 'Vue.js, Nuxt, Tailwind CSS' },
      { title: 'Database', description: 'MySQL, PostgreSQL, MongoDB, Redis' },
      { title: 'API Design', description: 'RESTful, GraphQL Expert' }
    ]
  },
  {
    title: 'بلاکچین و تحلیل مالی',
    icon: 'BarChart3',
    items: [
      { title: 'تحلیل داده مالی', description: 'Python (Pandas, NumPy, TA-Lib)' },
      { title: 'الگوریتمیک تریدینگ', description: 'Pine Script, MQL4/5 Development' },
      { title: 'Web3 & Blockchain', description: 'Solidity, Smart Contracts Architecture' }
    ]
  }
];

const CLIENTS = ["طب آفرین", "نیکان مهر", "تیراژه چاپ تبریز", "ماشین سازی آقایاری", "مرکز رشد دانشگاه آزاد", "دانشگاه شهید مدنی", "دانشگاه علوم پزشکی تبریز", "پاکت نیما"];
const PARTNERS = ["آرکا وب", "تصمیم یاران ایرانیان", "تبلیغاتی خاک", "داده پردازی آذرمهر", "گروه فناوری راهبرد", "هوشمند افزار نوین راهبرد"];

const EDUCATION = [
  { degree: 'کارشناسی ارشد (در حال تحصیل)', major: 'مدیریت کارآفرینی', university: 'دانشگاه تهران (مجازی)', years: '۱۴۰۴ —' },
  { degree: 'کارشناسی', major: 'مهندسی نرم‌افزار کامپیوتر', university: 'پیام نور', years: '۱۳۸۰ – ۱۳۸۴' }
];

const LANGUAGES = [
  { name: 'آذری', level: 'زبان مادری' },
  { name: 'فارسی', level: 'زبان مادری' },
  { name: 'انگلیسی', level: 'Professional Proficiency' },
  { name: 'ترکی استانبولی', level: 'متوسط' }
];

// --- Components ---

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
    { name: 'تخصص‌ها', href: '#skills' },
    { name: 'نقش‌ها', href: '#roles' },
    { name: 'پروژه‌ها', href: '#portfolio' },
    { name: 'چشم‌انداز', href: '#goals' },
  ];

  return html`
    <nav className=${`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-black tracking-tighter gradient-text">صمد المکچی</span>
          </div>
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-8 space-x-reverse">
              ${navLinks.map((link) => html`
                <a key=${link.name} href=${link.href} className="text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-black transition-colors">
                  ${link.name}
                </a>
              `)}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick=${() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-indigo-600">
              ${isOpen ? html`<${Lucide.X} size=${24} />` : html`<${Lucide.Menu} size=${24} />`}
            </button>
          </div>
        </div>
      </div>
      ${isOpen && html`
        <div className="md:hidden glass border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            ${navLinks.map((link) => html`
              <a key=${link.name} href=${link.href} onClick=${() => setIsOpen(false)} className="text-slate-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-black">
                ${link.name}
              </a>
            `)}
          </div>
        </div>
      `}
    </nav>
  `;
};

const Hero = () => html`
  <section className="relative pt-40 pb-24 overflow-hidden bg-white reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <img 
          src="https://avatars.githubusercontent.com/u/6169366?v=4" 
          alt="صمد المکچی" 
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-white shadow-2xl relative object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">صمد المکچی</h1>
      <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-10 leading-relaxed font-bold">
        استراتژیست رشد و معمار مارکتینگ‌تک | متخصص تحول دیجیتال
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        ${SOCIAL_LINKS.slice(0, 4).map((link) => html`
          <a key=${link.name} href=${link.url} target="_blank" className=${`${link.color} text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg hover:scale-105 transition-all`}>
            <${Lucide[link.icon]} size=${18} />
            <span>${link.name}</span>
          </a>
        `)}
      </div>
      
      <a href="#about" className="animate-bounce text-slate-300 hover:text-indigo-500 transition-colors">
        <${Lucide.ChevronDown} size=${40} />
      </a>
    </div>
  </section>
`;

const About = () => html`
  <section id="about" className="py-24 bg-slate-50 reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-70 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-10 rounded-[2rem] shadow-2xl hidden md:block">
            <p className="text-4xl font-black">20+</p>
            <p className="text-xs opacity-90 font-bold uppercase tracking-widest mt-2">سال سابقه در اکوسیستم فناوری</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
            <span className="text-indigo-600 font-black text-sm uppercase tracking-widest">About My Strategy</span>
          </div>
          <h2 className="text-4xl font-black mb-8 text-slate-900 leading-tight">درباره تخصص، نگاه استراتژیک و مسیر حرفه‌ای من</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg text-justify font-medium">
            <p>من <strong>صمد المکچی</strong> هستم، استراتژیست رشد و معمار سیستم‌های مارکتینگ‌تک با بیش از ۲۰ سال سابقه فعالیت مستمر در اکوسیستم فناوری ایران. تخصص من در نقطه تلاقی بازاریابی دیجیتال، مدیریت محصول و مهندسی نرم‌افزار قرار دارد. در طول دو دهه فعالیت، تمرکز اصلی من همواره بر تبدیل داده‌های خام به تصمیمات استراتژیک و سودآور برای کسب‌وکارها بوده است.</p>
            <p>من به رویکرد <strong>«مهندسی رشد»</strong> معتقدم؛ رویکردی که در آن از ابزارهای فنی نه فقط برای نگهداری سیستم، بلکه برای شتاب‌دهی به فروش و بهبود تجربه مشتری استفاده می‌شود. از طراحی معماری‌های پیچیده بک‌ند و دواپس گرفته تا پیاده‌سازی قیف‌های فروش هوشمند و تحلیل رفتار کاربران با استفاده از هوش مصنوعی، هدف من خلق یک اکوسیستم یکپارچه برای رشد است.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            ${[
    { label: 'تفکر سیستمی', icon: Lucide.Cpu, desc: 'تلفیق هوشمند مارکتینگ و فنی' },
    { label: 'رشد داده‌محور', icon: Lucide.BarChart3, desc: 'تصمیم‌گیری بر اساس اعداد' },
    { label: 'مدیریت محصول', icon: Lucide.Layers, desc: 'رهبری چابک با متد اسکرام' }
  ].map((item) => html`
              <div key=${item.label} className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <${item.icon} size=${28} />
                </div>
                <h4 className="font-black text-slate-900 text-base mb-2">${item.label}</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">${item.desc}</p>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const Skills = () => html`
  <section id="skills" className="py-24 bg-white reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-5">مهارت‌های تخصصی و فنی</h2>
        <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${SKILL_CATEGORIES.map((cat) => html`
          <div key=${cat.title} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <${Lucide[cat.icon]} size=${24} />
              </div>
              <h3 className="font-black text-xl text-slate-900">${cat.title}</h3>
            </div>
            <ul className="space-y-5">
              ${cat.items.map((s) => html`
                <li key=${s.title} className="flex items-start gap-4">
                  <div className="p-1 bg-white rounded-lg shadow-sm">
                    <${Lucide.CheckCircle2} size=${18} className="text-indigo-500" />
                  </div>
                  <div className="text-right">
                    <p className="font-black text-slate-800 text-sm">${s.title}</p>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-bold">${s.description}</p>
                  </div>
                </li>
              `)}
            </ul>
          </div>
        `)}
      </div>
    </div>
  </section>
`;

const RolesSection = () => html`
  <section id="roles" className="relative py-32 reveal parallax bg-slate-900" 
           style=${{ backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000")', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(15, 23, 42, 0.92)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-6">نقش‌ها و مسئولیت‌های کلیدی</h2>
        <p className="text-indigo-300 font-bold max-w-2xl mx-auto">تجارب من در جایگاه‌های مختلف مدیریتی و فنی که باعث شکل‌گیری دیدگاه ۳۶۰ درجه من به کسب‌وکارهای دیجیتال شده است.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        ${ROLES.map((r) => html`
          <div key=${r} className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 text-white font-black hover:bg-white hover:text-indigo-900 transition-all cursor-default text-lg">
            ${r}
          </div>
        `)}
      </div>
    </div>
  </section>
`;

const Portfolio = () => html`
  <section id="portfolio" className="py-24 bg-white reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Right Side: Clients (Occupies 5 cols) -->
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600"><${Lucide.Briefcase} size=${28} /></div>
            <h2 className="text-2xl font-black text-slate-900">مشتریان منتخب</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${CLIENTS.map((c) => html`<div key=${c} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 font-black text-slate-700 hover:bg-white hover:shadow-md transition-all">${c}</div>`)}
          </div>
        </div>
        
        <!-- Left Side: Partners (Occupies 7 cols) -->
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 rounded-2xl text-blue-600"><${Lucide.Users} size=${28} /></div>
            <h2 className="text-2xl font-black text-slate-900">همکاران تجاری و استراتژیک</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${PARTNERS.map((p) => html`
              <div key=${p} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 font-black text-slate-700 border border-transparent hover:border-indigo-200 hover:bg-white hover:shadow-lg transition-all text-center h-full">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-sm leading-tight">${p}</span>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const Extra = () => html`
  <section id="extra" className="py-24 bg-slate-900 text-white reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4"><${Lucide.GraduationCap} className="text-indigo-400" /> سوابق تحصیلی</h2>
        ${EDUCATION.map((edu) => html`
          <div key=${edu.major} className="mb-10 border-r-4 border-indigo-500 pr-6">
            <h3 className="font-black text-xl text-white">${edu.degree} - ${edu.major}</h3>
            <p className="text-slate-400 mt-1 font-bold">${edu.university}</p>
            <p className="text-indigo-400 text-sm font-black mt-2">${edu.years}</p>
          </div>
        `)}
      </div>
      <div>
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4"><${Lucide.Globe} className="text-indigo-400" /> تسلط بر زبان‌ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          ${LANGUAGES.map((l) => html`
            <div key=${l.name} className="bg-white/5 p-6 rounded-3xl border border-white/10 group hover:border-indigo-500 transition-colors">
              <p className="font-black text-white text-lg">${l.name}</p>
              <p className="text-slate-400 text-sm mt-1 font-bold">${l.level}</p>
            </div>
          `)}
        </div>
        <div className="mt-10 space-y-4">
          ${["آرام، منظم، پرانرژی", "همکاری‌محور و یادگیرنده", "تفکر سیستم‌محور", "حل مسئله خلاق"].map(t => html`
            <div className="flex items-center gap-4 text-slate-300 text-base font-bold">
              <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.8)]"></div> ${t}
            </div>
          `)}
        </div>
      </div>
    </div>
  </section>
`;

const Goals = () => html`
  <section id="goals" className="py-24 bg-white reveal">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-900 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">چشم‌انداز همکاری‌های آتی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-16">
          ${[
    "افزایش سهم بازار با استراتژی‌های مدرن",
    "بهینه‌سازی نرخ تبدیل و سفر مشتری",
    "اجرای کمپین‌های داده‌محور و ROI-Positive",
    "هدایت تیم‌های نوپا در مسیر محصول و رشد"
  ].map((goal) => html`
            <div key=${goal} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl flex items-center gap-4 border border-white/10">
              <${Lucide.ChevronLeft} size=${24} className="text-indigo-200" />
              <span className="font-bold text-lg">${goal}</span>
            </div>
          `)}
        </div>
        <p className="text-indigo-100 text-xl font-bold mb-14 max-w-2xl mx-auto leading-relaxed">
           من به دنبال پروژه‌هایی هستم که در آن تکنولوژی و دیجیتال مارکتینگ برای خلق ارزش واقعی با هم ترکیب شوند.
        </p>
        <a href="https://wa.me/989141189645" target="_blank" className="inline-flex items-center gap-4 bg-white text-indigo-800 px-14 py-6 rounded-full font-black text-2xl shadow-xl hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all">
          <${Lucide.MessageCircle} size=${32} />
          ارتباط مستقیم در واتساپ
        </a>
      </div>
    </div>
  </section>
`;

const Footer = () => html`
  <footer className="bg-slate-50 border-t py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="font-black gradient-text text-xl mb-4 tracking-tighter">صمد المکچی</p>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        ${SOCIAL_LINKS.map(link => html`
          <a key=${link.name} href=${link.url} target="_blank" title=${link.name} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300">
            <${Lucide[link.icon]} size=${18} />
          </a>
        `)}
      </div>
      <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase">© ${new Date().getFullYear()} - Samad Elmakchi Personal Portfolio</p>
    </div>
  </footer>
`;

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return html`
    <div className="min-h-screen text-right" dir="rtl">
      <${Navbar} />
      <${Hero} />
      <${About} />
      <${Skills} />
      <${RolesSection} />
      <${Portfolio} />
      <${Extra} />
      <${Goals} />
      <${Footer} />
    </div>
  `;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
