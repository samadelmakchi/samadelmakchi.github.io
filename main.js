// ============================================================
// ========== MATRIX BACKGROUND ==========
// ============================================================
(function() {
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
// ========== TYPEWRITER - Python Focused ==========
// ============================================================
var rolesEn = ['Python Developer', 'Machine Learning Specialist', 'Deep Learning Specialist', 'Data Science Specialist', 'Python System Architect'];
var rolesFa = ['Python Developer', 'متخصص Machine Learning', 'متخصص Deep Learning', 'متخصص Data Science', 'معمار سیستم‌های پایتون'];
var rolesAr = ['مطور Python', 'أخصائي Machine Learning', 'أخصائي Deep Learning', 'أخصائي Data Science', 'مهندس أنظمة Python'];
var rolesAz = ['Python Developer', 'Machine Learning Mütəxəssisi', 'Deep Learning Mütəxəssisi', 'Data Science Mütəxəssisi', 'Python Sistem Memarı'];
var rolesTr = ['Python Geliştirici', 'Machine Learning Uzmanı', 'Deep Learning Uzmanı', 'Data Science Uzmanı', 'Python Sistem Mimarı'];
var rolesAm = ['Python Ծրագրավորող', 'Machine Learning Մասնագետ', 'Deep Learning Մասնագետ', 'Data Science Մասնագետ', 'Python Համակարգերի Ճարտարապետ'];
var rolesRu = ['Python Разработчик', 'Специалист Machine Learning', 'Специалист Deep Learning', 'Специалист Data Science', 'Архитектор Python Систем'];
var rolesGe = ['Python დეველოპერი', 'Machine Learning სპეციალისტი', 'Deep Learning სპეციალისტი', 'Data Science სპეციალისტი', 'Python სისტემების არქიტექტორი'];
var el = document.getElementById('typewriter');
var ri = 0,
	ci = 0,
	deleting = false;
var currentRoles = rolesEn;

function updateTypewriterRoles(lang) {
	if (lang === 'en') currentRoles = rolesEn;
	else if (lang === 'fa') currentRoles = rolesFa;
	else if (lang === 'ar') currentRoles = rolesAr;
	else if (lang === 'az') currentRoles = rolesAz;
	else if (lang === 'tr') currentRoles = rolesTr;
	else if (lang === 'am') currentRoles = rolesAm;
	else if (lang === 'ru') currentRoles = rolesRu;
	else if (lang === 'ge') currentRoles = rolesGe;
	else currentRoles = rolesEn;
	ri = 0;
	ci = 0;
	deleting = false;
	el.textContent = '';
	tick();
}

function tick() {
	var current = currentRoles[ri];
	if (!deleting) {
		el.textContent = current.substring(0, ci + 1);
		ci++;
		if (ci === current.length) {
			setTimeout(function() {
				deleting = true;
				tick();
			}, 2000);
			return;
		}
		setTimeout(tick, 80);
	} else {
		el.textContent = current.substring(0, ci - 1);
		ci--;
		if (ci === 0) {
			deleting = false;
			ri = (ri + 1) % currentRoles.length;
			setTimeout(tick, 500);
			return;
		}
		setTimeout(tick, 40);
	}
}
tick();
// ============================================================
// ========== CLIENTS DATA ==========
// ============================================================
var clientsData = {
	en: ['Teb Afarin', 'Nikan Mehr', 'Tirajeh Tabriz Print', 'Aghayari Machinery', 'Azad University Growth Center', 'Shahid Madani University', 'Tabriz University of Medical Sciences', 'Paket Nima'],
	fa: ['طب آفرین', 'نیکان مهر', 'تیراژه چاپ تبریز', 'ماشین‌سازی آقایاری', 'مرکز رشد دانشگاه آزاد', 'دانشگاه شهید مدنی', 'دانشگاه علوم پزشکی تبریز', 'پاکت نیما'],
	ar: ['طب آفرين', 'نيكان مهر', 'طباعة تيراج تبريز', 'آلات أغاياري', 'مركز نمو جامعة آزاد', 'جامعة الشهيد مدني', 'جامعة تبريز للعلوم الطبية', 'باكت نيما'],
	az: ['Teb Afərin', 'Nikan Mehr', 'Tiraje Təbriz Çap', 'Ağayari Maşınqayırma', 'Azad Universiteti İnkişaf Mərkəzi', 'Şəhid Madani Universiteti', 'Təbriz Tibb Elmləri Universiteti', 'Paket Nima'],
	tr: ['Teb Afarin', 'Nikan Mehr', 'Tiraje Tebriz Matbaa', 'Ağayari Makine', 'Azad Üniversitesi Büyüme Merkezi', 'Şehit Madani Üniversitesi', 'Tebriz Tıp Bilimleri Üniversitesi', 'Paket Nima'],
	am: ['Տեբ Աֆարին', 'Նիկան Մեհր', 'Տիրաջե Թավրիզ Տպագրություն', 'Աղայարի Մեքենաշինություն', 'Ազատ Համալսարանի Աճի Կենտրոն', 'Շահիդ Մադանի Համալսարան', 'Թավրիզի Բժշկական Գիտությունների Համալսարան', 'Պակետ Նիմա'],
	ru: ['Теб Афарин', 'Никан Мехр', 'Тирадже Тебриз Принт', 'Агайари Машинери', 'Центр Развития Университета Азад', 'Университет Шахид Мадани', 'Тебризский Университет Медицинских Наук', 'Пакет Нима'],
	ge: ['ტებ აფარინი', 'ნიკან მეჰრი', 'ტირაჯე თავრიზის ბეჭდვა', 'აღაიარი მანქანათმშენებლობა', 'აზადის უნივერსიტეტის ზრდის ცენტრი', 'შაჰიდ მადანის უნივერსიტეტი', 'თავრიზის სამედიცინო მეცნიერებების უნივერსიტეტი', 'პაკეტ ნიმა']
};

function updateClients(lang) {
	var clients = clientsData[lang] || clientsData.en;
	var container = document.getElementById('clientsList');
	container.innerHTML = '';
	clients.forEach(function(client) {
		var badge = document.createElement('div');
		badge.className = 'client-badge';
		badge.textContent = client;
		container.appendChild(badge);
	});
}
// ============================================================
// ========== LANGUAGE SWITCHING - با حفظ تگ‌های HTML ==========
// ============================================================
var currentLang = 'en';

function setLanguage(lang) {
	currentLang = lang;
	var isRTL = (lang === 'fa' || lang === 'ar');
	document.documentElement.lang = lang;
	document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
	var t = translations[lang];
	// ===== ترجمه با حفظ تگ‌های HTML =====
	document.querySelectorAll('[data-key]').forEach(function(el) {
		var key = el.getAttribute('data-key');
		if (t && t[key]) {
			el.innerHTML = t[key];
		}
	});
	// ===== به‌روزرسانی منوی زبان =====
	document.querySelectorAll('.lang-item').forEach(function(item) {
		if (item.dataset.lang === lang) item.classList.add('active');
		else item.classList.remove('active');
	});
	var selectedItem = document.querySelector('.lang-item[data-lang="' + lang + '"]');
	if (selectedItem) {
		document.getElementById('currentLangFlag').src = selectedItem.querySelector('img').src;
		document.getElementById('currentLangName').textContent = selectedItem.querySelector('span').textContent;
	}
	// ===== به‌روزرسانی عنوان صفحه =====
	if (t) {
		document.getElementById('page-title').textContent = t.nav_name + " | Python Developer";
	}
	// ===== به‌روزرسانی تایپ‌رایتر =====
	updateTypewriterRoles(lang);
	// ===== به‌روزرسانی مشتریان =====
	updateClients(lang);
}
// ============================================================
// ========== DROPDOWN FUNCTIONALITY ==========
// ============================================================
document.getElementById('langBtn').addEventListener('click', function(e) {
	e.stopPropagation();
	document.getElementById('langMenu').classList.toggle('show');
});
document.querySelectorAll('.lang-item').forEach(function(item) {
	item.addEventListener('click', function() {
		setLanguage(this.dataset.lang);
		document.getElementById('langMenu').classList.remove('show');
	});
});
document.addEventListener('click', function() {
	document.getElementById('langMenu').classList.remove('show');
});
// ============================================================
// ========== SET DEFAULT LANGUAGE TO ENGLISH ==========
// ============================================================
setLanguage('en');
// ============================================================
// ========== SCROLL ANIMATIONS ==========
// ============================================================
var observer = new IntersectionObserver(function(entries) {
	entries.forEach(function(e) {
		if (e.isIntersecting) e.target.classList.add('visible');
	});
}, {
	threshold: 0.1
});
document.querySelectorAll('.fade-up').forEach(function(el) {
	observer.observe(el);
});
// ============================================================
// ========== MOBILE MENU ==========
// ============================================================
document.getElementById('menu-btn').addEventListener('click', function() {
	document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(function(a) {
	a.addEventListener('click', function() {
		document.getElementById('mobile-menu').classList.remove('open');
	});
});
// ============================================================
// ========== SCROLL TO TOP ==========
// ============================================================
var stb = document.getElementById('scroll-top');
window.addEventListener('scroll', function() {
	stb.classList.toggle('visible', window.scrollY > 400);
});
stb.addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
// ============================================================
// ========== NAVBAR SCROLL EFFECT ==========
// ============================================================
window.addEventListener('scroll', function() {
	document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});
