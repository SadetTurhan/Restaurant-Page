function navBar(){
    const nav = document.getElementById("nav");
    nav.innerHTML = '<nav class="navbar navbar-light bg-light navbar-expand-lg">'+
    '<a href="#" class="navbar-brand">Ye Olde Inn</a>'+
    '<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">'+
        '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarCollapse">'+
        '<ul class="navbar-nav">'+
            '<li class="navbar-item">'+
                '<button class="btn" id="homeButton">Home</button>'+
            '</li>'+
            '<li class="navbar-item">'+
                '<button class="btn" id="menuButton">Menu</button>'+
            '</li>'+
            '<li class="navbar-item">'+
                '<button class="btn" id="contactButton">Contact</button>'+
            '</li>'+
        '</ul>'+
    '</div>'+
    '</nav>';
}

export {navBar};