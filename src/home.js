function createHomePage(){
    const container = document.getElementById("container");
    const homePageRendered = document.createElement("div");
    homePageRendered.innerHTML ='<div class="container" id="container">'+
        '<h1>Welcome, we are pleasured to see you among us!</h1>'+
        '<div class="row">'+
        '<div class="col-sm-9 col-md-6 col-lg-12">'+
            '<p>We are happy to serve people with great food and bad jokes. "Enjoying the moment and shaking the tables" has been our motto since 2013.</p>'+
            '</div>'+
            '<div class="col-sm-6 col-md-6 col-lg-6">'+
              '</div>'+
              '<img src="/home/sadet/repos/Restaurant-Page/src/homePagePhoto.jpg" class="img-thumbnail mx-auto" alt="Restaurant Image" width="80%" height="20%">'+
            '</div>'+
          '<hr>'+
        '<h3>Our Mission</h3>'+
        '<h4>Nothing brings people better together than good food!<br>Trying to give you and your <strong>friends</strong> the best experience is our goal.</h4>'+
        '<div class="row">'+
        '<div class="col-sm-3 col-md-3 col-lg-4">'+
            '<p>Taste our great coffees and shake of the stress of the day!</p>'+
                '<img src="/home/sadet/repos/Restaurant-Page/src/coffee.jpg" class="img-thumbnail" alt="coffee" width="100%" height="10%">'+
                '</div>'+
            '<div class="col-sm-3 col-md-3 col-lg-4">'+
            '<p>Give our desserts a try!</p>'+
                '<img src="/home/sadet/repos/Restaurant-Page/src/dessert.jpg" class="img-thumbnail" alt="Pie" width="100%" height="10%">'+
                '</div>'+
            '<div class="col-sm-3 col-md-3 col-lg-4">'+
            '<p>You hungry, we cook.You eat, We happy!</p>'+
                '<img src="/home/sadet/repos/Restaurant-Page/src/eating.jpg" class="img-thumbnail" alt="People Eating" width="100%" height="10%">'+
                '</div>'+
            '</div>'+
    '</div>';
    container.appendChild(homePageRendered);
};

export {createHomePage};