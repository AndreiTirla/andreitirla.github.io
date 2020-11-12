function hide(id) {
    // document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    console.log("hide:" + id, el);
    
    if(el) {
        el.style.display = "none";
    } else {
        console.error("Elementul nu exista");
    }
}

function show(id) {
    var elm = document.getElementById(id);
    console.log("hide:" + id);

    if(elm) {
        elm.style.display = "";
    } else {
        console.error("Elementul nu exista!");
    }
}

function hideAllPages() {
    hide("home");
    hide("skills");
    hide("projects");
    hide("languages");
}

function showHome() {
    hideAllPages();
    show("home");
}

function showSkills() {
    hideAllPages();
    show("skills");
}

function showProjects() {
    hideAllPages();
    show("projects");
}

function showLanguages() {
    hideAllPages();
    show("languages");
}

