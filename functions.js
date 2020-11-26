var activePage = "skills";

function hide(id) {
    var el = document.getElementById(id);

    if (el) {
        el.style.display = "none";
    } else {
        console.error("Elementul nu exista");
    }
}

function show(id) {
    var elm = document.getElementById(id);
    elm.style.display = "";
}

function hidePreviousPage() {
    hide(activePage);
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    link.classList.remove("active");
}

function showPage(pageId) {
    hidePreviousPage();
    show(pageId);
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`)
    link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-page");
            showPage(id);
        }
    })
}

initMenu();

showPage(activePage);

function sortSkills(skills) {
    skills.sort(function (first, second) {
        if (first.endorsements < second.endorsements) {
            return 1;
        }
        if (first.endorsements > second.endorsements) {
            return -1;
        }
        return 0
    })
}

function showSkills(skills) {
    var skillsLi = skills.map(function (skill) {
        var endorsements = ` <span>&middot; ${skill.endorsements}</span>`;
        return "<li>" + skill.name + endorsements + "</li>";
    });

    //TODO add "favorite" skill
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = skillsLi.join("");
}

fetch("data/skills.json")
    .then(function (r) {
        return r.json();
    })
    .then(function (allSkills) {
        sortSkills(allSkills)
        showSkills(allSkills)
    });

