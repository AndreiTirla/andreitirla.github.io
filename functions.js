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

function getHTMLSkills(skills) {
    var skillsLi = skills.map(function (skill) {
        var endorsements = ` <span>&middot; ${skill.endorsements}</span>`;
        return "<li>" + skill.name + endorsements + "</li>";
    });
    return skillsLi.join("");
}

function showSkills(skills) {
    var html = getHTMLSkills(skills);

    //TODO add "favorite" skill
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = html;
}

fetch("data/skills.json")
    .then(function (r) {
        return r.json();
    })
    .then(function (allSkills) {
        sortSkills(allSkills)
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

