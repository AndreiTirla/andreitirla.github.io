function hide(id) {
    // document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    // console.log("hide:" + id, el);
    
    if(el) {
        el.style.display = "none";
    } else {
        console.error("Elementul nu exista");
    }
}

function show(id) {
    var elm = document.getElementById(id);
    console.log("show:" + id);

    if(elm) {
        elm.style.display = "";
    } else {
        console.error("Elementul nu exista!");
    }
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
// for (initializare; conditie; post execute)
    for(var i = 0; i < pages.length; i++) {
        var id= pages[i].id;
        console.info("i=", i, pages[i]);
        hide(id);
    }
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

