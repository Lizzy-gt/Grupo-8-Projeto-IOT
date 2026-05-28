const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-button');
const toggleSystem = document.getElementById('toggle-system');
const odorToggle = document.getElementById('odor-toggle');
const trapToggle = document.getElementById('trap-toggle');

function showPage(pageKey) {
    pages.forEach(page => {
        page.classList.toggle('active', page.dataset.page === pageKey);
    });
    navButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.target === pageKey);
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', () => showPage(button.dataset.target));
});

if (toggleSystem) {
    let active = true;
    toggleSystem.addEventListener('click', () => {
        active = !active;
        toggleSystem.textContent = active ? 'Desativar todo o sistema' : 'Ativar todo o sistema';
        toggleSystem.classList.toggle('primary-button', active);
        toggleSystem.classList.toggle('secondary-button', !active);
    });
}

if (odorToggle) {
    odorToggle.addEventListener('change', () => {
        const state = odorToggle.checked ? 'Ativo' : 'Inativo';
        const chip = odorToggle.closest('.split-card').querySelector('.stat-chip');
        if (chip) chip.textContent = `Status: ${state}`;
    });
}

if (trapToggle) {
    trapToggle.addEventListener('change', () => {
        const heading = trapToggle.closest('.split-card').querySelector('h3');
        if (heading) {
            heading.textContent = trapToggle.checked ? 'Rede automatizada' : 'Sistema inativo';
        }
    });
}

showPage('inicio');
