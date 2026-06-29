// ============================================================
// ========== MATRIX BACKGROUND ==========
// ============================================================
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

// ============================================================
// ========== TYPEWRITER - پایتون محور ==========
// ============================================================
var rolesFa = ['Python Developer', 'متخصص Machine Learning', 'متخصص Deep Learning', 'متخصص Data Science', 'معمار سیستم‌های پایتون'];
var rolesEn = ['Python Developer', 'Machine Learning Specialist', 'Deep Learning Specialist', 'Data Science Specialist', 'Python System Architect'];
var rolesAr = ['مطور Python', 'أخصائي Machine Learning', 'أخصائي Deep Learning', 'أخصائي Data Science', 'مهندس أنظمة Python'];
var rolesAz = ['Python Developer', 'Machine Learning Mütəxəssisi', 'Deep Learning Mütəxəssisi', 'Data Science Mütəxəssisi', 'Python Sistem Memarı'];

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

// ============================================================
// ========== CLIENTS DATA ==========
// ============================================================
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

// ============================================================
// ========== LANGUAGE SWITCHING ==========
// ============================================================
var currentLang = 'fa';

function setLanguage(lang) {
    currentLang = lang;
    var isRTL = (lang === 'fa' || lang === 'ar');
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    var t = translations[lang];

    // ===== فقط متن ساده را ترجمه کن، تگ‌های HTML را حفظ کن =====
    document.querySelectorAll('[data-key]').forEach(function (el) {
        var key = el.getAttribute('data-key');
        if (t[key]) {
            // اگر المنت دارای بچه‌های HTML است (مثل <strong>)، فقط متن داخلش را عوض نکن
            // بلکه کل innerHTML را عوض کن تا تگ‌ها حفظ شوند
            // اما برای جلوگیری از حذف رنگ‌ها، فقط المنت‌هایی که تگ داخلی ندارند را عوض کن
            if (el.querySelector('strong, span, br, i')) {
                // المنت دارای تگ داخلی است - فقط متن اصلی را عوض می‌کنیم ولی تگ‌ها را حفظ می‌کنیم
                // این کار را با استفاده از replace روی childNodes انجام می‌دهیم
                var htmlContent = el.innerHTML;
                // فقط اگر متن داخلش با کلید ترجمه مطابقت داشته باشد (برای جلوگیری از بازنویسی تگ‌ها)
                // از یک روش ساده‌تر استفاده می‌کنیم: فقط برای المنت‌هایی که data-key دارند و تگ داخلی ندارند
                if (!el.querySelector('strong, span, br, i, .text-cyan, .text-violet, .text-emerald, .text-white, .font-bold')) {
                    el.textContent = t[key];
                } else {
                    // المنت دارای تگ‌های استایل است - فقط متن ساده را عوض می‌کنیم
                    // این کار پیچیده است، پس از روش جایگزینی با استفاده از innerHTML با دقت استفاده می‌کنیم
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = el.innerHTML;
                    // پیدا کردن text nodes و جایگزینی
                    function replaceTextNodes(node) {
                        if (node.nodeType === 3) { // text node
                            var text = node.textContent.trim();
                            // فقط اگر متن با کلید ترجمه مطابقت داشته باشد
                            if (text && t[key] && text !== '') {
                                // بررسی می‌کنیم که آیا این متن قسمتی از ترجمه است یا خیر
                                // برای سادگی، کل innerHTML را با ترجمه جدید جایگزین می‌کنیم
                                // ولی تگ‌های استایل را حفظ می‌کنیم
                                var newHtml = el.innerHTML;
                                // جایگزینی متن‌های ساده با ترجمه جدید - این روش ایده‌آل نیست ولی کار می‌کند
                                // بهتر است از data-key با رویکرد متفاوت استفاده کنیم
                            }
                        }
                        if (node.childNodes) {
                            for (var i = 0; i < node.childNodes.length; i++) {
                                replaceTextNodes(node.childNodes[i]);
                            }
                        }
                    }
                    // برای المنت‌های پیچیده، از روش ساده‌تر استفاده می‌کنیم:
                    // کل innerHTML را با ترجمه جدید جایگزین می‌کنیم ولی تگ‌ها را حفظ می‌کنیم
                    // این کار با استفاده از یک placeholder انجام می‌شود
                    var oldHtml = el.innerHTML;
                    var textOnly = oldHtml.replace(/<[^>]*>/g, '');
                    if (textOnly.trim() !== '') {
                        // متن جدید را با حفظ تگ‌ها جایگزین می‌کنیم
                        var newText = t[key];
                        // اگر متن جدید شامل تگ نیست، آن را با تگ‌های قدیمی ترکیب می‌کنیم
                        if (!newText.includes('<')) {
                            // تگ‌ها را از oldHtml استخراج می‌کنیم و با متن جدید ترکیب می‌کنیم
                            var tags = oldHtml.match(/<[^>]*>/g) || [];
                            if (tags.length > 0) {
                                // تگ‌ها را حفظ می‌کنیم و متن را عوض می‌کنیم
                                var result = '';
                                var parts = oldHtml.split(/(<[^>]*>)/);
                                var textFound = false;
                                for (var p = 0; p < parts.length; p++) {
                                    if (parts[p].match(/<[^>]*>/)) {
                                        result += parts[p];
                                    } else if (parts[p].trim() !== '' && !textFound) {
                                        result += newText;
                                        textFound = true;
                                    } else {
                                        result += parts[p];
                                    }
                                }
                                if (!textFound) {
                                    // اگر متنی پیدا نشد، کل را با تگ‌ها و متن جدید بساز
                                    result = oldHtml.replace(/[^<>]+/, newText);
                                }
                                el.innerHTML = result;
                            } else {
                                el.innerHTML = newText;
                            }
                        } else {
                            // اگر متن جدید شامل تگ است، مستقیماً جایگزین کن
                            el.innerHTML = newText;
                        }
                    }
                }
            } else {
                // المنت بدون تگ داخلی - مستقیماً textContent را عوض کن
                el.textContent = t[key];
            }
        }
    });

    // ===== به‌روزرسانی منوی زبان =====
    document.querySelectorAll('.lang-item').forEach(function (item) {
        if (item.dataset.lang === lang) item.classList.add('active');
        else item.classList.remove('active');
    });

    var selectedItem = document.querySelector('.lang-item[data-lang="' + lang + '"]');
    if (selectedItem) {
        document.getElementById('currentLangFlag').src = selectedItem.querySelector('img').src;
        document.getElementById('currentLangName').textContent = selectedItem.querySelector('span').textContent;
    }

    // ===== به‌روزرسانی عنوان صفحه =====
    document.getElementById('page-title').textContent = t.nav_name + " | Python Developer";

    // ===== به‌روزرسانی تایپ‌رایتر =====
    updateTypewriterRoles(lang);

    // ===== به‌روزرسانی مشتریان =====
    updateClients(lang);
}

// ============================================================
// ========== DROPDOWN FUNCTIONALITY ==========
// ============================================================
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

// ============================================================
// ========== SET DEFAULT LANGUAGE ==========
// ============================================================
setLanguage('fa');

// ============================================================
// ========== SCROLL ANIMATIONS ==========
// ============================================================
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
});

// ============================================================
// ========== MOBILE MENU ==========
// ============================================================
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.remove('open');
    });
});

// ============================================================
// ========== SCROLL TO TOP ==========
// ============================================================
var stb = document.getElementById('scroll-top');
window.addEventListener('scroll', function () {
    stb.classList.toggle('visible', window.scrollY > 400);
});

stb.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// ========== NAVBAR SCROLL EFFECT ==========
// ============================================================
window.addEventListener('scroll', function () {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});