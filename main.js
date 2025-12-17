
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initializations
    lucide.createIcons();
    document.getElementById('copyright').innerText = `© ${new Date().getFullYear()} - تمامی حقوق محفوظ است.`;

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 4. Populate Social Links
    const socialContainer = document.getElementById('social-links');
    SOCIAL_LINKS.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = `${link.color} text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform`;
        a.innerHTML = `<i data-lucide="${link.icon}" size="18"></i><span>${link.name}</span>`;
        socialContainer.appendChild(a);
    });

    // 5. Populate Skills
    const skillsGrid = document.getElementById('skills-grid');
    SKILL_CATEGORIES.forEach(cat => {
        const card = document.createElement('div');
        card.className = "bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all group";
        
        let itemsHtml = cat.items.map(item => `
            <li class="flex items-start gap-3">
                <i data-lucide="check-circle-2" class="text-indigo-500 mt-1 flex-shrink-0" size="18"></i>
                <div>
                    <p class="font-bold text-slate-800 text-sm">${item.title}</p>
                    <p class="text-slate-500 text-xs mt-0.5 leading-relaxed">${item.description}</p>
                </div>
            </li>
        `).join('');

        card.innerHTML = `
            <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors text-indigo-500">
                    <i data-lucide="${cat.icon}"></i>
                </div>
                <h3 class="font-black text-xl text-slate-800">${cat.title}</h3>
            </div>
            <ul class="space-y-4">
                ${itemsHtml}
            </ul>
        `;
        skillsGrid.appendChild(card);
    });

    // 6. Populate Experiences
    const expList = document.getElementById('experience-list');
    EXPERIENCES.forEach(exp => {
        const item = document.createElement('div');
        item.className = "relative md:pr-16 group";
        item.innerHTML = `
            <div class="absolute -right-2 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>
            <div class="bg-slate-50 p-6 md:p-8 rounded-3xl border border-transparent group-hover:border-indigo-200 transition-all">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                        <h3 class="text-xl font-black text-slate-900">${exp.role}</h3>
                        <p class="text-indigo-600 font-bold">${exp.company}</p>
                    </div>
                    <div class="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-500">
                        ${exp.period}
                    </div>
                </div>
                <p class="text-slate-600 leading-relaxed">${exp.description}</p>
            </div>
        `;
        expList.appendChild(item);
    });

    // 7. Populate Education
    const eduList = document.getElementById('education-list');
    EDUCATION.forEach(edu => {
        const item = document.createElement('div');
        item.className = "flex gap-4";
        item.innerHTML = `
            <div class="w-1 bg-indigo-500 rounded-full h-auto"></div>
            <div>
                <h3 class="font-black text-lg text-white">${edu.degree} - ${edu.major}</h3>
                <p class="text-slate-400 font-medium">${edu.university}</p>
                <p class="text-indigo-400 text-sm font-bold mt-1">${edu.years}</p>
            </div>
        `;
        eduList.appendChild(item);
    });

    // 8. Populate Languages
    const langGrid = document.getElementById('language-grid');
    LANGUAGES.forEach(lang => {
        const item = document.createElement('div');
        item.className = "bg-white/5 border border-white/10 p-4 rounded-2xl";
        item.innerHTML = `
            <p class="font-bold text-white text-sm">${lang.name}</p>
            <p class="text-slate-400 text-xs">${lang.level}</p>
        `;
        langGrid.appendChild(item);
    });

    // 9. Populate Traits
    const traitList = document.getElementById('traits-list');
    TRAITS.forEach(trait => {
        const item = document.createElement('div');
        item.className = "flex items-center gap-3 text-slate-300 text-sm";
        item.innerHTML = `
            <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
            ${trait}
        `;
        traitList.appendChild(item);
    });

    // Re-initialize icons for dynamic content
    lucide.createIcons();
});
