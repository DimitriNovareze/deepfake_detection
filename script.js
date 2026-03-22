/* ═══════════════════════════════════════════════════
   DEEPFAKE WATCH — script.js  v4.0
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Dates ─────────────────────────────────────
    const now = new Date();

    const dateEl = document.getElementById('currentDate');
    if (dateEl) dateEl.textContent = now.toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = now.getFullYear();

    // ── Navigation ────────────────────────────────
    const navBtns = document.querySelectorAll('.nav-btn');
    const pages   = document.querySelectorAll('.page');

    function showPage(id) {
        pages.forEach(p  => p.classList.remove('active'));
        navBtns.forEach(b => b.classList.remove('active'));
        const target = document.getElementById('page-' + id);
        if (target) target.classList.add('active');
        const btn = document.querySelector(`.nav-btn[data-page="${id}"]`);
        if (btn) btn.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navBtns.forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));

    // ── Veille — filtre ───────────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articles   = document.querySelectorAll('.veille-article');
    const countEl    = document.getElementById('veilleCount');

    function updateCount() {
        const n = [...articles].filter(a => !a.classList.contains('hidden')).length;
        if (countEl) countEl.textContent = `${n} article${n > 1 ? 's' : ''}`;
    }

    function applyFilter(cat) {
        articles.forEach(a => a.classList.toggle('hidden', cat !== 'all' && a.dataset.cat !== cat));
        updateCount();
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    updateCount();

});