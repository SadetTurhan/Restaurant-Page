function createHomePage(){
    const container = document.getElementById("container");
    const homePageRendered = document.createElement("div");
    homePageRendered.innerHTML ='<div class="container" id="container">'+
        '<h1>Welcome, we are pleasured to see you among us!</h1>'+
        '<div class="row align-items-start">'+
        '<div class="col-12 col-sm-12 col-md-6 col-lg-12">'+
            '<p>We are happy to serve people with great food and bad jokes. "Enjoying the moment and shaking the tables" has been our motto since 2013.</p>'+
            '</div>'+
              '<img src="./images/homePagePhoto.jpg" class="img-thumbnail mx-auto" alt="Restaurant Image" width="80%" height="20%">'+
            '</div>'+
          '<hr>'+
        '<h3>Our Mission</h3>'+
        '<h4>Nothing brings people better together than good food!<br>Trying to give you and your <strong>friends</strong> the best experience is our goal.</h4>'+
        '<div class="row align-items-start d-flex flex-column flex-lg-row flex-md-row flex-sm-column">'+
        '<div class="col-10 col-sm-12 col-md-4 col-lg-4">'+
            '<p>Taste our great coffees and shake of the stress of the day!</p>'+
                '<img src="./images/coffee.jpg" class="img-thumbnail" alt="coffee" width="200%" height="10%">'+
                '</div>'+
            '<div class="col-10 col-sm-12 col-md-4 col-lg-4">'+
            '<p>Give our desserts a try!</p>'+
                '<img src="./images/dessert.jpg" class="img-thumbnail" alt="Pie" width="200%" height="10%">'+
                '</div>'+
            '<div class="col-10 col-sm-12 col-md-4 col-lg-4">'+
            '<p>You hungry, we cook.You eat, We happy!</p>'+
                '<img src="./images/eating.jpg" class="img-thumbnail" alt="People Eating" width="200%" height="10%">'+
                '</div>'+
            '</div>'+
    '</div>';
    container.appendChild(homePageRendered);
};

export {createHomePage};