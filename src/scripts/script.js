const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-button');
const toggleSystem = document.getElementById('toggle-system');
const odorToggle = document.getElementById('odor-toggle');
const trapToggle = document.getElementById('trap-toggle');
const profileButton = document.querySelector('.profile-button');
const profileMenuContainer = document.querySelector('.profile-menu-container');
const profileOptions = document.querySelectorAll('.profile-option');

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

// Profile menu functionality
if (profileButton) {
    profileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        profileMenuContainer.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (profileMenuContainer && !profileMenuContainer.contains(e.target)) {
        profileMenuContainer.classList.remove('active');
    }
});

// Profile options handlers
profileOptions.forEach(option => {
    option.addEventListener('click', () => {
        const text = option.textContent.trim();
        if (text.includes('Perfil')) {
            alert('Abrir perfil do usuário');
        } else if (text.includes('Configurações')) {
            alert('Abrir configurações');
        } else if (text.includes('Sair')) {
            alert('Fazendo logout...');
            // window.location.href = '/logout'; // Descomente para logout real
        }
        profileMenuContainer.classList.remove('active');
    });
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
