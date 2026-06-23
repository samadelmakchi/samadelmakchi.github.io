// Matrix background
(function () {
    var bg = document.getElementById('matrix-bg');
    var chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var cols = Math.floor(window.innerWidth / 20);
    for (var i = 0; i < cols; i++) {
        var col = document.createElement('div');
        col.className = 'matrix-col';
        col.style.left = (i / cols * 100) + '%';
        col.style.animationDuration = (10 + Math.random() * 10) + 's';
        col.style.animationDelay = (Math.random() * 5) + 's';
        var lines = 15 + Math.floor(Math.random() * 5);
        var text = '';
        for (var j = 0; j < lines; j++) text += chars[Math.floor(Math.random() * chars.length)] + '\n';
        col.textContent = text;
        bg.appendChild(col);
    }
})();

// Typewriter with language support
var rolesFa = ['توسعه‌دهنده Backend', 'مهندس DevOps', 'متخصص Docker/Kubernetes', 'طراح معماری میکروسرویس', 'متخصص CI/CD'];
var rolesEn = ['Backend Developer', 'DevOps Engineer', 'Docker/K8s Expert', 'Microservices Architect', 'CI/CD Specialist'];
var rolesAr = ['مطور Backend', 'مهندس DevOps', 'خبير Docker/Kubernetes', 'مصمم معمارية الخدمات المصغرة', 'أخصائي CI/CD'];
var rolesAz = ['Backend Tərtibatçısı', 'DevOps Mühəndisi', 'Docker/K8s Eksperti', 'Mikroservis Memarı', 'CI/CD Mütəxəssisi'];

var el = document.getElementById('typewriter');
var ri = 0, ci = 0, deleting = false;
var currentRoles = rolesFa;

function updateTypewriterRoles(lang) {
    if (lang === 'fa') currentRoles = rolesFa;
    else if (lang === 'en') currentRoles = rolesEn;
    else if (lang === 'ar') currentRoles = rolesAr;
    else if (lang === 'az') currentRoles = rolesAz;
    else currentRoles = rolesEn;
    ri = 0; ci = 0; deleting = false;
    el.textContent = '';
    tick();
}

function tick() {
    var current = currentRoles[ri];
    if (!deleting) {
        el.textContent = current.substring(0, ci + 1);
        ci++;
        if (ci === current.length) { setTimeout(function () { deleting = true; tick(); }, 2000); return; }
        setTimeout(tick, 80);
    } else {
        el.textContent = current.substring(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; ri = (ri + 1) % currentRoles.length; setTimeout(tick, 500); return; }
        setTimeout(tick, 40);
    }
}
tick();

// Clients data
var clientsData = {
    fa: ['طب آفرین', 'نیکان مهر', 'تیراژه چاپ تبریز', 'ماشین‌سازی آقایاری', 'مرکز رشد دانشگاه آزاد', 'دانشگاه شهید مدنی', 'دانشگاه علوم پزشکی تبریز', 'پاکت نیما'],
    en: ['Teb Afarin', 'Nikan Mehr', 'Tirajeh Tabriz Print', 'Aghayari Machinery', 'Azad University Growth Center', 'Shahid Madani University', 'Tabriz University of Medical Sciences', 'Paket Nima'],
    ar: ['طب آفرين', 'نيكان مهر', 'طباعة تيراج تبريز', 'آلات أغاياري', 'مركز نمو جامعة آزاد', 'جامعة الشهيد مدني', 'جامعة تبريز للعلوم الطبية', 'باكت نيما'],
    az: ['Teb Afərin', 'Nikan Mehr', 'Tiraje Təbriz Çap', 'Ağayari Maşınqayırma', 'Azad Universiteti İnkişaf Mərkəzi', 'Şəhid Madani Universiteti', 'Təbriz Tibb Elmləri Universiteti', 'Paket Nima']
};

function updateClients(lang) {
    var clients = clientsData[lang] || clientsData.fa;
    var container = document.getElementById('clientsList');
    container.innerHTML = '';
    clients.forEach(function (client) {
        var badge = document.createElement('div');
        badge.className = 'client-badge';
        badge.textContent = client;
        container.appendChild(badge);
    });
}

// Language switching
var currentLang = 'fa';

function setLanguage(lang) {
    currentLang = lang;
    var isRTL = (lang === 'fa' || lang === 'ar');
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    var t = translations[lang];
    document.querySelectorAll('[data-key]').forEach(function (el) {
        var key = el.getAttribute('data-key');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('.lang-item').forEach(function (item) {
        if (item.dataset.lang === lang) item.classList.add('active');
        else item.classList.remove('active');
    });
    var selectedItem = document.querySelector('.lang-item[data-lang="' + lang + '"]');
    if (selectedItem) {
        document.getElementById('currentLangFlag').src = selectedItem.querySelector('img').src;
        document.getElementById('currentLangName').textContent = selectedItem.querySelector('span').textContent;
    }
    document.getElementById('page-title').textContent = t.nav_name + " | DevOps Engineer";
    updateTypewriterRoles(lang);
    updateClients(lang);
}

// Dropdown functionality
document.getElementById('langBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('langMenu').classList.toggle('show');
});
document.querySelectorAll('.lang-item').forEach(function (item) {
    item.addEventListener('click', function () {
        setLanguage(this.dataset.lang);
        document.getElementById('langMenu').classList.remove('show');
    });
});
document.addEventListener('click', function () {
    document.getElementById('langMenu').classList.remove('show');
});
setLanguage('fa');

// Scroll animations
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
});

// Mobile menu
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.remove('open');
    });
});

// Scroll to top
var stb = document.getElementById('scroll-top');
window.addEventListener('scroll', function () {
    stb.classList.toggle('visible', window.scrollY > 400);
});
stb.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', function () {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});