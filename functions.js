let activePage = "skills";

function hide(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("Elementul nu exista");
    }
}

function show(id) {
    const elm = document.getElementById(id);
    elm.style.display = "";
}

function hidePreviousPage() {
    hide(activePage);
    const link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    link.classList.remove("active");
}

function showPage(pageId) {
    hidePreviousPage();
    show(pageId);
    const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`)
    link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function (e) {
        const link = e.target;
        if (link.matches("#top-menu-bar a")) {
            const id = link.getAttribute("data-page");
            showPage(id);
        }
    })
}

initMenu();

showPage(activePage);

function getHTMLSkills(skills) {
    return skills.map(function(skill) {
        return `<li class = "${skill.endorsements > 9 ? "favorite" : ""}"> 
        ${skill.name} <span>&middot; ${skill.endorsements} 
        </span> </li>`;
    }).join("");
}

function showSkills(skills) {
    const ul = document.querySelector("#skills ul");
    ul.innerHTML = getHTMLSkills(skills);;
}

fetch("data/skills.json")
    .then(function (r) {
        return r.json();
    })
    .then(function (allSkills) {
        allSkills.sort(function(s1, s2){
            return s2.endorsements - s1.endorsements;
            // return s1.name < s2.name ? -1 : 0;
        });

        showSkills(allSkills)
    });

    //Background Generator//
    var css = document.querySelector("h5");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.querySelector("body");

    function setGradient() {
        body.style.background = 
        "linear-gradient(" 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

        css.textContent = body.style.background + ";";
    }

    color1.addEventListener("input", setGradient);   
    color2.addEventListener("input", setGradient);

