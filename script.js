document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
    loadContent();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function loadContent() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayDashboard(data.dashboard);
            displayProfile(data.profile);
            displayQuestionnaire(data.questionnaire);
            displayHelp(data.help);
            displayData(data.data);
        })
        .catch(error => console.error('Error loading content:', error));
}

function displayDashboard(data) {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = JSON.stringify(data, null, 2);
}

function displayProfile(data) {
    const profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = JSON.stringify(data, null, 2);
}

function displayQuestionnaire(data) {
    const questionnaireContent = document.getElementById('questionnaireContent');
    questionnaireContent.innerHTML = JSON.stringify(data, null, 2);
}

function displayHelp(data) {
    const helpContent = document.getElementById('helpContent');
    helpContent.innerHTML = JSON.stringify(data, null, 2);
}

function displayData(data) {
    const dataContent = document.getElementById('dataContent');
    dataContent.innerHTML = JSON.stringify(data, null, 2);
}
