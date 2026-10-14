document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "telugu"; // Default language

    const langToggleBtn = document.getElementById("langToggleBtn");
    
    // Elements to translate
    const heroTagline = document.getElementById("hero-tagline");
    const heroSubline = document.getElementById("hero-subline");
    const heroDesc = document.getElementById("hero-desc");
    const heroCta = document.getElementById("hero-cta");
    const worldsHeading = document.getElementById("worlds-heading");
    const worldsSub = document.getElementById("worlds-sub");
    const rootsTitle = document.getElementById("roots-title");
    const rootsDesc = document.getElementById("roots-desc");
    const navMenu = document.getElementById("nav-menu");
    const worldsGrid = document.getElementById("worldsGrid");

    function renderContent() {
        // Nav Menu
        const menuItems = siteData.nav.menu[currentLang];
        navMenu.innerHTML = menuItems.map(item => `<li><a href="#">${item}</a></li>`).join("");

        // Hero Section
        heroTagline.textContent = siteData.hero.tagline[currentLang];
        heroSubline.textContent = siteData.hero.subLine[currentLang];
        heroDesc.textContent = siteData.hero.description[currentLang];
        heroCta.textContent = siteData.hero.ctaButton[currentLang];

        // Worlds Heading
        worldsHeading.textContent = currentLang === "telugu" ? "మీకు నచ్చిన ప్రపంచంలోకి వెళ్లండి." : "Step into the world of your choice.";
        worldsSub.textContent = currentLang === "telugu" ? "ఒక్కో ప్రపంచం ఒక ప్రత్యేక అనుభవం. ఒక్కో ఆలోచనకు ఒక ప్రత్యేక దారి." : "Every world is a unique experience. A distinct path for every thought.";

        // Render Worlds Cards
        worldsGrid.innerHTML = siteData.worlds.map(world => `
            <a href="${world.link}" class="world-card">
                <span class="world-element">${currentLang === "telugu" ? world.elementTelugu : world.elementEnglish}</span>
                <h3>${currentLang === "telugu" ? world.nameTelugu : world.nameEnglish}</h3>
                <p>${currentLang === "telugu" ? world.descTelugu : world.descEnglish}</p>
            </a>
        `).join("");

        // Roots Section
        rootsTitle.textContent = siteData.roots[`title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`];
        rootsDesc.textContent = siteData.roots[`desc${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`];

        // Button text update
        langToggleBtn.textContent = currentLang === "telugu" ? "తెలుగు | EN" : "English | TE";
    }

    // Toggle Language Event
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "telugu" ? "english" : "telugu";
        renderContent();
    });

    // Initial Render
    renderContent();
});
