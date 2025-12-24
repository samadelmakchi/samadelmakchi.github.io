
const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samad-elmakchi', color: 'bg-[#0077B5]', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/samad.elmakchi', color: 'bg-[#E4405F]', icon: 'instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/989141189645', color: 'bg-[#25D366]', icon: 'message-circle' },
  { name: 'Telegram', url: 'https://t.me/samadelmakchi', color: 'bg-[#0088cc]', icon: 'send' },
  { name: 'X', url: 'https://x.com/elmakchi', color: 'bg-[#1DA1F2]', icon: 'twitter' },
  { name: 'Facebook', url: 'https://facebook.com/samad.elmakchi', color: 'bg-[#1877F2]', icon: 'facebook' },
  { name: 'GitHub', url: 'https://github.com/samadelmakchi', color: 'bg-[#181717]', icon: 'github' },
  { name: 'Gmail', url: 'mailto:samad.elmakchi@gmail.com', color: 'bg-[#D14836]', icon: 'mail' },
];

const SKILL_CATEGORIES = [
  {
    title: 'بازاریابی دیجیتال و رشد',
    icon: 'trending-up',
    items: [
      { title: 'استراتژی رشد', description: 'SEO, SEM, Google Ads, Content Strategy' },
      { title: 'تحلیل و بهینه‌سازی', description: 'GA4, GTM, Hotjar, CRO, A/B Testing' },
      { title: 'گیمیفیکیشن', description: 'طراحی با فریم‌ورک Octalysis برای وفادارسازی' },
      { title: 'اتوماسیون', description: 'HubSpot, CRM Integration, Zapier' }
    ]
  },
  {
    title: 'مدیریت محصول و تیم',
    icon: 'target',
    items: [
      { title: 'متدولوژی‌های چابک', description: 'Scrum, Kanban, Agile Marketing' },
      { title: 'مدیریت پروژه', description: 'Jira, Confluence, Miro, Asana' },
      { title: 'نقش‌ها', description: 'Scrum Master, Product Owner' },
      { title: 'مهارت‌های نرم', description: 'رهبری تیم، حل تعارض، منتورینگ' }
    ]
  },
  {
    title: 'هوش مصنوعی (AI-Marketing)',
    icon: 'brain',
    items: [
      { title: 'AI Agent Design', description: 'خودکارسازی تعامل و پشتیبانی هوشمند' },
      { title: 'n8n Workflow', description: 'اتصال سرویس‌ها برای اتوماسیون مارکتینگ' },
      { title: 'دیتاماینینگ', description: 'پیش‌بینی رفتار مشتری با مدل‌های ML' },
      { title: 'AI Automation', description: 'بهینه‌سازی جریان تولید محتوا' }
    ]
  },
  {
    title: 'دواپس و زیرساخت MarTech',
    icon: 'shield',
    items: [
      { title: 'کانتینرسازی', description: 'Docker / Compose برای استقرار سریع' },
      { title: 'زیرساخت مقیاس‌پذیر', description: 'Kubernetes & CI/CD Pipelines' },
      { title: 'مانیتورینگ', description: 'Prometheus, Grafana برای پایداری سرویس' },
      { title: 'شبکه‌سازی', description: 'Traefik, Load Balancing' }
    ]
  },
  {
    title: 'توسعه نرم‌افزار',
    icon: 'code',
    items: [
      { title: 'Backend', description: 'Laravel (PHP), FastAPI (Python)' },
      { title: 'Frontend', description: 'Vue.js, Nuxt, Tailwind CSS' },
      { title: 'Database', description: 'MySQL, PostgreSQL, MongoDB, Redis' },
      { title: 'API Design', description: 'RESTful, GraphQL Expert' }
    ]
  },
  {
    title: 'بلاکچین و تحلیل مالی',
    icon: 'bar-chart-3',
    items: [
      { title: 'تحلیل داده مالی', description: 'Python (Pandas, NumPy, TA-Lib)' },
      { title: 'الگوریتمیک تریدینگ', description: 'Pine Script, MQL4/5 Development' },
      { title: 'Web3 & Blockchain', description: 'Solidity, Smart Contracts Architecture' }
    ]
  }
];

const EXPERIENCES = [
  { company: 'نیکان مهر پردازش افزا', role: 'MarTech Infrastructure Lead', period: 'تیر ۱۴۰۲ – حالا', description: 'مدیریت زیرساخت‌های مقیاس‌پذیر برای پلتفرم‌های تحلیل داده و مارکتینگ.' },
  { company: 'استارتاپ اکیپ', role: 'Growth Strategist & Scrum Master', period: 'آبان ۱۳۹۸ – تیر ۱۴۰۲', description: 'طراحی استراتژی‌های رشد و مدیریت فرآیندهای چابک در توسعه محصول.' },
  { company: 'نویان پردازش', role: 'Data Visualization Specialist', period: 'فروردین ۱۳۹۶ – آبان ۱۳۹۸', description: 'بصری‌سازی داده‌های رفتار کاربر برای بهینه‌سازی نرخ تبدیل.' },
  { company: 'تصمیم یاران', role: 'Senior Developer', period: 'اردیبهشت ۱۳۹۲ – اسفند ۱۳۹۶', description: 'توسعه سیستم‌های بک‌اند برای ابزارهای تحلیل بازار.' },
  { company: 'گروه فناوری راهبرد', role: 'Web Developer', period: 'تیر ۱۳۸۷ – اردیبهشت ۱۳۹۲', description: 'طراحی و توسعه پورتال‌های وب با تمرکز بر جذب مخاطب.' },
  { company: 'فریلنسر', role: 'Web Solutions Specialist', period: 'مهر ۱۳۸۴ – تیر ۱۳۸۷', description: 'اجرای پروژه‌های آنلاین برای کسب‌وکارهای نوپا.' }
];

const EDUCATION = [
  { degree: 'کارشناسی ارشد (در حال تحصیل)', major: 'مدیریت کارآفرینی', university: 'دانشگاه تهران (مجازی)', years: '۱۴۰۴ —' },
  { degree: 'کارشناسی', major: 'مهندسی نرم‌افزار کامپیوتر', university: 'پیام نور', years: '۱۳۸۰ – ۱۳۸۴' }
];

const LANGUAGES = [
  { name: 'آذری', level: 'زبان مادری' },
  { name: 'فارسی', level: 'زبان مادری' },
  { name: 'انگلیسی', level: 'Professional' },
  { name: 'ترکی استانبولی', level: 'متوسط' }
];

const TRAITS = [
  "آرام، منظم، پرانرژی",
  "همکاری‌محور و متمرکز بر یادگیری جمعی",
  "علاقه‌مند به مستندسازی حرفه‌ای استراتژی‌ها",
  "تفکر سیستم‌محور (مارکتینگ + تکنولوژی)",
  "حل مسئله با رویکرد داده‌محور و خلاق"
];
