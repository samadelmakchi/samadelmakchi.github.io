
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
    title: 'مدیریت چابک و مهارت‌های نرم',
    icon: 'rocket',
    items: [
      { title: 'متدولوژی‌ها', description: 'Scrum, Kanban, Agile, Lean, Scrumban, SAFe' },
      { title: 'نقش‌ها', description: 'Scrum Master, Product Owner' },
      { title: 'ابزارها', description: 'Jira, Confluence, Miro, Asana, Trello' },
      { title: 'رهبری', description: 'Coaching, Mentoring, مدیریت تعارض' }
    ]
  },
  {
    title: 'بازاریابی دیجیتال و رشد',
    icon: 'bar-chart-3',
    items: [
      { title: 'استراتژی', description: 'SEO, Google Ads, Content Marketing' },
      { title: 'تحلیل', description: 'Google Analytics, Hotjar, CRO' },
      { title: 'گیمیفیکیشن', description: 'طراحی با فریم‌ورک Octalysis' },
      { title: 'برندینگ', description: 'Storytelling و Brand Positioning' }
    ]
  },
  {
    title: 'هوش مصنوعی و اتوماسیون',
    icon: 'brain',
    items: [
      { title: 'AI Agents', description: 'طراحی Agentها برای خودکارسازی تصمیم‌گیری' },
      { title: 'n8n & Workflow', description: 'ساخت جریان‌های هوشمند و یکپارچه‌سازی' },
      { title: 'AI Coding', description: 'تولید و تست خودکار کد' },
      { title: 'Data Analysis', description: 'تحلیل داده‌ها با مدل‌های ML' }
    ]
  },
  {
    title: 'دواپس و زیرساخت',
    icon: 'shield',
    items: [
      { title: 'Containerization', description: 'Docker / Compose' },
      { title: 'Orchestration', description: 'Kubernetes (در حال یادگیری)' },
      { title: 'CI/CD', description: 'GitHub Actions, Jenkins' },
      { title: 'Networking', description: 'Traefik (Reverse Proxy, Load Balancing)' }
    ]
  },
  {
    title: 'توسعه نرم‌افزار و معماری',
    icon: 'code',
    items: [
      { title: 'Architecture', description: 'Microservices, Event-Driven, DDD' },
      { title: 'Backend', description: 'Laravel (PHP), FastAPI (Python), Node.js' },
      { title: 'Database', description: 'MySQL, PostgreSQL, MongoDB, Redis' },
      { title: 'Frontend', description: 'Vue, Nuxt, Tailwind, Inertia.js' }
    ]
  },
  {
    title: 'سیستم‌های مالی و بلاکچین',
    icon: 'globe-2',
    items: [
      { title: 'تحلیل مالی', description: 'Python (Pandas, NumPy, TA-Lib)' },
      { title: 'MetaTrader', description: 'MQL4, MQL5 Indicator & Expert' },
      { title: 'Blockchain', description: 'Solidity, DApp Architecture' }
    ]
  }
];

const EXPERIENCES = [
  { company: 'نیکان مهر پردازش افزا', role: 'DevOps Engineer', period: 'تیر ۱۴۰۲ – حالا', description: 'طراحی و پیاده‌سازی معماری میکروسرویس و مانیتورینگ سرویس‌ها' },
  { company: 'استارتاپ اکیپ', role: 'Project Manager & Scrum Master', period: 'آبان ۱۳۹۸ – تیر ۱۴۰۲', description: 'مدیریت پروژه‌ها و هدایت تیم‌های چندتخصصی در فرآیندهای Agile' },
  { company: 'نویان پردازش', role: 'Data Visualization Engineer', period: 'فروردین ۱۳۹۶ – آبان ۱۳۹۸', description: 'طراحی و توسعه داشبوردهای تحلیلی و تعاملی' },
  { company: 'تصمیم یاران', role: 'Backend Developer', period: 'اردیبهشت ۱۳۹۲ – اسفند ۱۳۹۶', description: 'توسعه APIهای مقیاس‌پذیر با PHP و Python' },
  { company: 'گروه فناوری راهبرد', role: 'Web Developer', period: 'تیر ۱۳۸۷ – اردیبهشت ۱۳۹۲', description: 'طراحی و توسعه سیستم‌ها و برنامه‌های وب' },
  { company: 'فریلنسر', role: 'Web Developer', period: 'مهر ۱۳۸۴ – تیر ۱۳۸۷', description: 'پروژه‌های مستقل طراحی و توسعه وب' }
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
  "علاقه‌مند به مستندسازی حرفه‌ای",
  "تفکر سیستم‌محور (کد + فرآیند + کسب‌وکار)",
  "حل مسئله با رویکرد داده‌محور و خلاق"
];
