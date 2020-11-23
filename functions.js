var activePage= "skills";

function hide(id) {
    var el = document.getElementById(id);
    
    if(el) {
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
}

function showPage(pageId) {
    hidePreviousPage();
    show(pageId);
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target;
        if(link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    })
}

initMenu();

showPage(activePage);

var skills = [
    "html", 
    "CSS", 
    "JS"
];

var skillsLi = skills.map(function(skill){
    return "<li>" + skill.toUpperCase() + "</li>";
});



//TODO add "favorite" skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");