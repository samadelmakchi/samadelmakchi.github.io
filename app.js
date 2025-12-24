
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
    items: [
      { title: 'استراتژی دیجیتال مارکتینگ', description: 'طراحی نقشه راه رشد و قیف‌های فروش' },
      { title: 'آنالیز رفتار کاربران', description: 'تحلیل داده‌محور مسیر مشتری و نرخ تبدیل' },
      { title: 'سئو (SEO)', description: 'بهینه‌سازی فنی و محتوایی برای موتورهای جستجو' },
      { title: 'طراحی کمپین‌های تبلیغاتی', description: 'مدیریت کمپین‌های چندکاناله و ROI-focused' },
      { title: 'AI در مارکتینگ', description: 'بهره‌گیری از هوش مصنوعی در توسعه کسب‌وکار' }
    ]
  },
  {
    title: 'دواپس و زیرساخت (DevOps)',
    items: [
      { title: 'زیرساخت و GitOps', description: 'مدیریت چرخه حیات نرم‌افزار با GitHub Actions' },
      { title: 'داکر و کانتینرسازی', description: 'Docker & Docker Compose' },
      { title: 'اتوماسیون انسیبل', description: 'Ansible Playbooks & Automation' },
      { title: 'Traefik', description: 'Reverse Proxy, Load Balancing & SSL' }
    ]
  },
  {
    title: 'فناوری‌های نوظهور',
    items: [
      { title: 'بلاکچین (Blockchain)', description: 'معماری غیرمتمرکز و قراردادهای هوشمند' },
      { title: 'متاورس و کریپتو', description: 'Metaverse, Crypto Ecosystems' },
      { title: 'بازارهای مالی', description: 'تحلیل و الگوریتم‌های معاملاتی' },
      { title: 'مارکتینگ‌تک و فین‌تک', description: 'MarTech & FinTech Solutions' }
    ]
  }
];

const CLIENTS = ["طب آفرین", "نیکان مهر", "تیراژه چاپ تبریز", "ماشین سازی آقایاری", "مرکز رشد دانشگاه آزاد", "دانشگاه شهید مدنی", "دانشگاه علوم پزشکی تبریز", "پاکت نیما"];
const STARTUPS = ["اکیپ", "کالیبری"];
const PARTNERS = ["آرکا وب", "تصمیم یاران ایرانیان", "تبلیغاتی خاک", "داده پردازی آذرمهر", "گروه فناوری راهبرد"];

const EDUCATION = [
  { degree: 'کارشناسی ارشد (در حال تحصیل)', major: 'مدیریت کارآفرینی', university: 'دانشگاه تهران (مجازی)', years: '۱۴۰۴ —' },
  { degree: 'کارشناسی', major: 'مهندسی نرم‌افزار کامپیوتر', university: 'پیام نور', years: '۱۳۸۰ – ۱۳۸۴' }
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
    { name: 'چشم‌انداز همکاری', href: '#goals' },
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
                <a key=${link.name} href=${link.href} className="text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            ${navLinks.map((link) => html`
              <a key=${link.name} href=${link.href} onClick=${() => setIsOpen(false)} className="text-slate-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
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
      <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-10 leading-relaxed font-medium">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-indigo-100">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
            <p className="text-3xl font-black">20+</p>
            <p className="text-xs opacity-80 uppercase tracking-widest mt-1">سال تجربه در تکنولوژی</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-black mb-8 text-slate-900">درباره تخصص و استراتژی من</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
            <p>من <strong>صمد المکچی</strong>، متخصص و استراتژیست بازاریابی دیجیتال با بیش از دو دهه تجربه هستم. نگاه من به مارکتینگ، فراتر از تبلیغات است؛ من به <strong>«مهندسی رشد»</strong> معتقدم.</p>
            <p>هدف من ترکیب داده‌های دقیق با ابزارهای پیشرفته برای خلق نتایج مقیاس‌پذیر در کسب‌وکارهای مدرن است.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            ${[
              { label: 'تفکر سیستمی', icon: Lucide.Cpu, desc: 'ادغام مارکتینگ و فنی' },
              { label: 'رشد داده‌محور', icon: Lucide.BarChart3, desc: 'تحلیل دقیق مسیر رشد' },
              { label: 'مدیریت محصول', icon: Lucide.Layers, desc: 'رهبری تیم‌های چابک' }
            ].map((item) => html`
              <div key=${item.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <${item.icon} size=${24} />
                </div>
                <h4 className="font-black text-slate-800 mb-1">${item.label}</h4>
                <p className="text-xs text-slate-500">${item.desc}</p>
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
        <h2 className="text-4xl font-black text-slate-900 mb-4">مهارت‌های تخصصی</h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${SKILL_CATEGORIES.map((cat) => html`
          <div key=${cat.title} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <h3 className="font-black text-2xl text-slate-800 mb-8 group-hover:text-indigo-600 transition-colors">${cat.title}</h3>
            <ul className="space-y-5">
              ${cat.items.map((s) => html`
                <li key=${s.title} className="flex items-start gap-4">
                  <div className="p-1 bg-white rounded-lg shadow-sm group-hover:bg-indigo-50 transition-colors">
                    <${Lucide.CheckCircle2} size=${18} className="text-indigo-500" />
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800 text-sm">${s.title}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">${s.description}</p>
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
  <section id="roles" className="py-24 bg-slate-50 reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4">نقش‌ها و مسئولیت‌ها</h2>
        <p className="text-slate-500">مسیر حرفه‌ای من در یک نگاه</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        ${ROLES.map((r) => html`
          <div key=${r} className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 text-slate-700 font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all cursor-default">
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
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <${Lucide.Briefcase} className="text-indigo-600" /> مشتریان و همکاران
          </h2>
          <div className="grid gap-3">
            ${CLIENTS.map((c) => html`<div key=${c} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 font-medium text-slate-700">${c}</div>`)}
          </div>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-indigo-900 p-12 rounded-[3rem] parallax relative overflow-hidden text-white" 
               style=${{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000")', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(31, 41, 55, 0.85)' }}>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8">استارتاپ‌ها</h3>
              <div className="grid grid-cols-2 gap-6">
                ${STARTUPS.map((s) => html`<div key=${s} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl text-center font-black text-2xl border border-white/20">${s}</div>`)}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-8">شرکت‌های همکار</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${PARTNERS.map((p) => html`
                <div key=${p} className="bg-slate-50 p-6 rounded-2xl flex items-center gap-4 font-bold border border-transparent hover:border-indigo-100 transition-all">
                  <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600"><${Lucide.Users} size=${20} /></div> ${p}
                </div>
              `)}
            </div>
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
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4"><${Lucide.GraduationCap} className="text-indigo-400" /> تحصیلات</h2>
        ${EDUCATION.map((edu) => html`
          <div key=${edu.major} className="mb-10 border-r-4 border-indigo-500 pr-6">
            <h3 className="font-black text-xl text-white">${edu.degree} - ${edu.major}</h3>
            <p className="text-slate-400 mt-1">${edu.university}</p>
            <p className="text-indigo-400 text-sm font-bold mt-2">${edu.years}</p>
          </div>
        `)}
      </div>
      <div>
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4"><${Lucide.Globe} className="text-indigo-400" /> زبان‌ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          ${[
            { n: 'آذری', l: 'زبان مادری' },
            { n: 'فارسی', l: 'زبان مادری' },
            { n: 'انگلیسی', l: 'Professional Proficiency' },
            { n: 'ترکی استانبولی', l: 'متوسط' }
          ].map((l) => html`
            <div key=${l.n} className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <p className="font-black text-white text-lg">${l.n}</p>
              <p className="text-slate-400 text-sm mt-1">${l.l}</p>
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
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-black mb-10">چشم‌انداز همکاری</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-14">
          ${[
            "افزایش سهم بازار با استراتژی‌های مدرن",
            "بهینه‌سازی نرخ تبدیل و سفر مشتری",
            "اجرای کمپین‌های داده‌محور و ROI-Positive",
            "هدایت تیم‌های نوپا در مسیر محصول و رشد"
          ].map((goal) => html`
            <div key=${goal} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl flex items-center gap-4 border border-white/10">
              <${Lucide.ChevronLeft} size=${24} className="text-indigo-200" /> ${goal}
            </div>
          `)}
        </div>
        <p className="text-indigo-100 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
           من به دنبال پروژه‌هایی هستم که در آن تکنولوژی و دیجیتال مارکتینگ برای خلق ارزش واقعی با هم ترکیب شوند.
        </p>
        <a href="https://wa.me/989141189645" target="_blank" className="inline-flex items-center gap-3 bg-white text-indigo-700 px-12 py-5 rounded-full font-black text-xl shadow-xl hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all">
          <${Lucide.MessageCircle} size=${28} />
          ارتباط در واتساپ
        </a>
      </div>
    </div>
  </section>
`;

const Footer = () => html`
  <footer className="bg-slate-50 border-t py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="font-black gradient-text text-3xl mb-8">صمد المکچی</p>
      <div className="flex justify-center gap-5 mb-12 flex-wrap">
        ${SOCIAL_LINKS.map(link => html`
          <a key=${link.name} href=${link.url} target="_blank" title=${link.name} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300">
            <${Lucide[link.icon]} size=${22} />
          </a>
        `)}
      </div>
      <p className="text-slate-400 text-sm font-medium">© ${new Date().getFullYear()} - تمامی حقوق برای صمد المکچی محفوظ است</p>
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
    }, { threshold: 0.1 });

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
