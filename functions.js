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

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
   
    for(var i = 0; i < pages.length; i++) {
        var id= pages[i].id;
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    show(pageId);
}

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target;
        if(link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}

initMenu();