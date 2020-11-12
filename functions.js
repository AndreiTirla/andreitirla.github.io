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

function showHome() {
    hide("skills");
    hide("projects");
    hide("languages");
    show("home");
}

function showSkills() {
    hide("home");
    hide("projects");
    hide("languages");
    show("skills");
}

function showProjects() {
    hide("home");
    hide("skills");
    hide("languages");
    show("projects");
}

function showLanguages() {
    hide("home");
    hide("skills");
    hide("projects");
    show("languages");
}

