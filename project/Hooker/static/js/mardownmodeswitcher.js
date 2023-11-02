const btn = document.getElementById("theme-toggle");
const md = document.getElementById("readmeContent");

function readmeSwitcher() {
    if (document.documentElement.classList.contains("dark")) {
        md.classList.remove("markdownl");
        md.classList.add("markdownd");
    } else {
        md.classList.remove("markdownd");
        md.classList.add("markdownl");
    }
}
btn.addEventListener('click', function() {
    readmeSwitcher()
});
const btnlight = document.getElementById("theme-toggle-light-icon");

btnlight.addEventListener('click', function() {
    readmeSwitcher()
});