function createContactPage(){
    const container = document.getElementById("container");
    const contactPage = document.createElement("div");
    contactPage.innerHTML =  '<div class="col-sm-12 col-md-12 col-lg-10 w-100 h-25">'+
    '<img src="./images/contact.jpg" class="rounded mx-auto d-block img-thumbnail w-50 h-25">'+
    '<h1 class="carousel-caption text-center font-italic text-primary bg-light">Contact </h1>'+
    '</div>'+
  '<div class="divider mt-3 mb-3"></div>'+
  '<div class="row">'+
      '<div class="col-sm-12 col-md-12 col-lg-6">'+
      '<h2 class="mark text-primary">You can celebrate your special days here!</h2>'+
        '<p class="text-secondary">Ye Olde Inn welcomes events, parties and celebrations.</p>'+
        '<p class="text-secondary">We are happy to host any event important for you.</p>'+
        '</div>'+
      '<div class="col col-sm-12 col-md-12 col-lg-6">'+
      '<h2 class="mark text-primary">Info</h2>'+
        '<p class="text-secondary">To make a reservation by phone, call:</p>'+
        '<p class="text-secondary">053* *** ****</p>'+
          '<p class="text-secondary">Or to make a reservation by email:</p>'+
           '<p class="text-secondary">eat@YeOldeInn.com</p>'+
           '</div>'+
      '</div>'+
    '<div class="divider mt-3 mb-3"></div>'+
    '<div class="col col-sm-12 col-md-12 col-lg-12">'+
      '<p>Check out my Github account for more content</p>'+
      '<a href="https://github.com/SadetTurhan">Sadet Turhan</a>'+
      '</div>';
      container.appendChild(contactPage);
};

export {createContactPage};