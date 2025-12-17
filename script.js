// ================================
// AUTO DARK / LIGHT (SYSTEM MODE)
// ================================
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme() {
    document.body.classList.toggle('dark', prefersDark.matches);
}

setTheme();
prefersDark.addEventListener('change', setTheme);

// ================================
// LINK MANAGEMENT
// ================================
const links = {
    instagram: "https://instagram.com/aadtyrst",
    whatsapp: "https://wa.me/62895402634106",
    linkedin: "https://www.linkedin.com/in/muhamad-aditya-restu-prawira-7865a6397",
    portfolio: "Personal Website.html",
    email: "mailto:mhmadaditya59@gmail.com"
};

document.getElementById("ig").href = links.instagram;
document.getElementById("wa").href = links.whatsapp;
document.getElementById("port").href = links.portfolio;
document.getElementById("mail").href = links.email;
document.getElementById("linkedin").href = links.linkedin;

// ================================
// OPEN LINK NEW TAB (OPSIONAL)
// ================================
document.querySelectorAll(".link").forEach(link => {
    link.target = "_blank";
});
