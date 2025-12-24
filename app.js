
import React, { useState, useEffect } from 'https://esm.sh/react@19.2.3';
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
    title: 'دیجیتال مارکتینگ و محتوا',
    items: [
      { title: 'استراتژی دیجیتال مارکتینگ', description: 'طراحی نقشه راه رشد و قیف‌های فروش' },
      { title: 'آنالیز رفتار کاربران', description: 'تحلیل داده‌محور مسیر مشتری و نرخ تبدیل' },
      { title: 'سئو (SEO)', description: 'بهینه‌سازی فنی و محتوایی برای موتورهای جستجو' },
      { title: 'طراحی کمپین‌های تبلیغاتی', description: 'مدیریت کمپین‌های چندکاناله و ROI-focused' },
      { title: 'AI در مارکتینگ', description: 'بهره‌گیری از هوش مصنوعی در توسعه کسب‌وکار' },
      { title: 'محتوا نویسی تخصصی', description: 'خلق محتوای استراتژیک و کپی‌رایتینگ' }
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
    title: 'پلتفرم‌ها و تجارت الکترونیک',
    items: [
      { title: 'مارکت‌پلیس‌ها (Marketplaces)', description: 'طراحی و مدیریت پلتفرم‌های چندفروشندگی' },
      { title: 'تجارت الکترونیک (E-commerce)', description: 'راهکارهای نوین فروش آنلاین' },
      { title: 'پلتفرم‌های اشتراکی', description: 'Subscription-based models' },
      { title: 'سیستم‌های ERP', description: 'برنامه‌ریزی منابع سازمانی' }
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
  },
  {
    title: 'مشاوره و تحلیل کسب‌وکار',
    items: [
      { title: 'مشاوره توسعه نرم‌افزار', description: 'هدایت تیم‌های فنی و معماری دیتابیس' },
      { title: 'استراتژی و KPIها', description: 'تعیین شاخص‌های کلیدی عملکرد' },
      { title: 'تحلیل داده و مشتری', description: 'الگوهای رفتار خرید و وفادارسازی' },
      { title: 'مدل‌های تجارت الکترونیک', description: 'طراحی بیزنس مدل‌های مقیاس‌پذیر' }
    ]
  },
  {
    title: 'کارآفرینی و منتورینگ',
    items: [
      { title: 'منتور استارتاپ', description: 'هدایت تیم‌های نوپا در مسیر محصول' },
      { title: 'برنامه‌ریزی کسب‌وکار', description: 'Business Planning & Pitching' },
      { title: 'رهبری تیم‌های چابک', description: 'Agile Leadership & Mentorship' }
    ]
  }
];

const CLIENTS = [
  "طب آفرین", "نیکان مهر", "تیراژه چاپ تبریز", "ماشین سازی آقایاری",
  "مرکز رشد دانشگاه آزاد اسلامی تبریز", "دانشگاه شهید مدنی آذربایجان",
  "دانشگاه علوم پزشکی تبریز", "پاکت نیما"
];

const STARTUPS = ["اکیپ", "کالیبری"];
const PARTNERS = ["آرکا وب", "تصمیم یاران ایرانیان", "تبلیغاتی خاک", "داده پردازی آذرمهر", "گروه فناوری راهبرد"];

const EDUCATION = [
  { degree: 'کارشناسی ارشد (در حال تحصیل)', major: 'مدیریت کارآفرینی', university: 'دانشگاه تهران (مجازی)', years: '۱۴۰۴ —' },
  { degree: 'کارشناسی', major: 'مهندسی نرم‌افزار کامپیوتر', university: 'پیام نور', years: '۱۳۸۰ – ۱۳۸۴' }
];

const LANGUAGES = [
  { name: 'آذری', level: 'زبان مادری' },
  { name: 'فارسی', level: 'زبان مادری' },
  { name: 'انگلیسی', level: 'Professional Work Proficiency' },
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
    { name: 'نقش‌ها', href: '#roles' },
    { name: 'تخصص‌ها', href: '#skills' },
    { name: 'پروژه‌ها و همکاران', href: '#portfolio' },
    { name: 'تماس', href: '#contact' },
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

const Hero = () => {
  return html`
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
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
          ${SOCIAL_LINKS.map((link) => html`
            <a 
              key=${link.name} 
              href=${link.url} 
              target="_blank" 
              className=${`${link.color} text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform`}
            >
              <${Lucide[link.icon]} size=${20} />
              <span>${link.name}</span>
            </a>
          `)}
        </div>
        
        <a href="#about" className="animate-bounce text-slate-400 hover:text-indigo-500">
          <${Lucide.ChevronDown} size=${32} />
        </a>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl -z-10 opacity-40 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-40 -ml-48 -mb-48"></div>
    </section>
  `;
};

const About = () => html`
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-indigo-100">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Strategy" className="object-cover w-full h-full mix-blend-multiply opacity-90" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block text-center">
            <p className="text-2xl font-bold">Data Driven</p>
            <p className="text-xs opacity-80 uppercase tracking-widest mt-1">Growth Engineering</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-black mb-6 text-slate-900 flex items-center gap-3">
            <${Lucide.Target} className="text-indigo-600" />
            درباره تخصص و استراتژی من
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
            <p>من <strong>صمد المکچی</strong>، متخصص و استراتژیست بازاریابی دیجیتال با بیش از دو دهه تجربه در قلب دنیای فناوری هستم. نگاه من به مارکتینگ، فراتر از تبلیغات صرف است؛ من به <strong>«مهندسی رشد»</strong> معتقدم. جایی که تحلیل دقیق داده‌ها، درک عمیق روانشناسی مشتری و زیرساخت‌های فنی پیشرفته (MarTech) با هم تلاقی می‌کنند.</p>
            <p>تخصص من در طراحی <strong>استراتژی‌های جامع دیجیتال</strong>، از بهینه‌سازی موتورهای جستجو (SEO) و مدیریت کمپین‌های تبلیغاتی تا تحلیل پیشرفته رفتار کاربر و افزایش نرخ تبدیل (CRO) متمرکز است.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const RolesSection = () => html`
  <section id="roles" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4">نقش‌ها و مسئولیت‌ها</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        ${ROLES.map((role) => html`
          <div key=${role} className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 text-slate-700 font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all">
            ${role}
          </div>
        `)}
      </div>
    </div>
  </section>
`;

const Skills = () => html`
  <section id="skills" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900 mb-4">مهارت‌های تخصصی</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${SKILL_CATEGORIES.map((cat) => html`
          <div key=${cat.title} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
            <h3 className="font-black text-xl text-slate-800 mb-6">${cat.title}</h3>
            <ul className="space-y-4">
              ${cat.items.map((skill) => html`
                <li key=${skill.title} className="flex items-start gap-3">
                  <${Lucide.CheckCircle2} size=${18} className="text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">${skill.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">${skill.description}</p>
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

const Portfolio = () => html`
  <section id="portfolio" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-black mb-8">تعدادی از مشتریان</h2>
          <div className="grid gap-3">
            ${CLIENTS.map((c) => html`
              <div key=${c} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-slate-700 text-sm font-medium">
                ${c}
              </div>
            `)}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-black mb-8">استارتاپ‌ها</h2>
            <div className="grid grid-cols-2 gap-4">
              ${STARTUPS.map((s) => html`
                <div key=${s} className="bg-white p-6 rounded-3xl shadow-md text-center font-black text-lg">
                  ${s}
                </div>
              `)}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black mb-8">همکاران</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${PARTNERS.map((p) => html`
                <div key=${p} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-slate-700 font-bold flex items-center gap-3">
                   <${Lucide.Users} size=${18} className="text-indigo-600" /> ${p}
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
  <section id="education" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-black mb-10">تحصیلات</h2>
          ${EDUCATION.map((edu) => html`
            <div key=${edu.major} className="mb-8 border-r-2 border-indigo-500 pr-4">
              <h3 className="font-black text-lg">${edu.degree} - ${edu.major}</h3>
              <p className="text-slate-400">${edu.university}</p>
              <p className="text-indigo-400 text-sm font-bold">${edu.years}</p>
            </div>
          `)}
        </div>
        <div>
          <h2 className="text-2xl font-black mb-10">زبان‌ها</h2>
          <div className="grid grid-cols-2 gap-4">
            ${LANGUAGES.map((l) => html`
              <div key=${l.name} className="bg-white/5 p-4 rounded-2xl">
                <p className="font-bold">${l.name}</p>
                <p className="text-slate-400 text-xs">${l.level}</p>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const Goals = () => html`
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-black mb-8">چشم‌انداز همکاری</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-12">
          ${[
            "افزایش سهم بازار با استراتژی‌های مدرن",
            "بهینه‌سازی نرخ تبدیل و سفر مشتری",
            "اجرای کمپین‌های داده‌محور و ROI-Positive",
            "هدایت تیم‌های نوپا در مسیر محصول و رشد"
          ].map((goal) => html`
            <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-3">
              <${Lucide.ChevronLeft} size=${20} /> ${goal}
            </div>
          `)}
        </div>
        <p className="text-indigo-100 text-lg mb-10">
           من به دنبال پروژه‌هایی هستم که در آن تکنولوژی و دیجیتال مارکتینگ برای خلق ارزش واقعی با هم ترکیب شوند.
        </p>
        <a href="mailto:samad.elmakchi@gmail.com" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-black shadow-lg">
          درخواست مشاوره رشد
        </a>
      </div>
    </div>
  </section>
`;

const App = () => html`
  <div className="min-h-screen text-right" dir="rtl">
    <${Navbar} />
    <${Hero} />
    <${About} />
    <${RolesSection} />
    <${Skills} />
    <${Portfolio} />
    <${Extra} />
    <${Goals} />
    <footer className="bg-slate-50 py-12 text-center border-t">
       <p className="text-slate-400">© ${new Date().getFullYear()} - صمد المکچی</p>
    </footer>
  </div>
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
