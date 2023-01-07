function createMenuPage(){
    const container = document.getElementById("container");
    const homePageRendered = document.createElement("div");
    homePageRendered.innerHTML ='<div class="container">'+
    '<div class="row align-items-start">'+
        '<div class="card col-12 col-sm-12 col-md-12 col-lg-6 card w-50 h-50 d-inline-block" style="width: 1rem;">'+
        '<img class="card-img-top h-50 d-inline-block" src="/home/sadet/repos/Restaurant-Page/src/lasagna.jpg" alt="Card image cap">'+
          '<div class="card-body">'+
          '<h5 class="card-title">Lasagna</h5>'+
            '<p class="card-text">Homemade Lasagna.</p>'+
            '</div>'+
          '<ul class="list-group list-group-flush">'+
           '<button class="list-group-item btn">Ye Olde Inn Style</li>'+
            '<button class="list-group-item btn">Classic</li>'+
            '</ul>'+
          '</div>'+
          '<div class="card col-12 col-sm-12 col-md-12 col-lg-6 w-50 h-50 d-inline-block" style="width: 1rem;">'+
        '<img class="card-img-top" src="/home/sadet/repos/Restaurant-Page/src/omelette.jpg" alt="Card image cap">'+
      '<div class="card-body">'+
      '<h5 class="card-title">Omelette Du Fromage</h5>'+
          '<p class="card-text">Give the french omelette a try.</p>'+
          '<ul class="list-group list-group-flush">'+
      '<button class="list-group-item btn">Ye Olde Inn Style</li>'+
          '<button class="list-group-item btn">Extra Cheese</li>'+
          '</ul>'+
      '</div>'+
    '</div>'+
  '<div class="card col-12 col-sm-12 col-md-12 col-lg-6 card w-50 h-50 d-inline-block" style="width: 1rem;">'+
      '<img class="card-img-top" src="/home/sadet/repos/Restaurant-Page/src/kebap.jpg" alt="Card image cap">'+
        '<div class="card-body">'+
        '<h5 class="card-title">Kebap</h5>'+
          '<p class="card-text">Traditional Kebap.</p>'+
          '</div>'+
        '<ul class="list-group list-group-flush">'+
         '<button class="list-group-item btn">Ye Olde Inn Style</li>'+
          '<button class="list-group-item btn">Extra Spicy</li>'+
          '</ul>'+
        '</div>'+
        '<div class="card col-12 col-sm-12 col-md-12 col-lg-6 w-50 h-50 d-inline-block" style="width: 1rem;">'+
        '<img class="card-img-top h-25" src="/home/sadet/repos/Restaurant-Page/src/burger.jpg" alt="Card image cap">'+
          '<div class="card-body">'+
          '<h5 class="card-title">Burger</h5>'+
              '<p class="card-text">A burger a day(Or maybe a bit less).</p>'+
              '<ul class="list-group list-group-flush">'+
          '<button class="list-group-item btn">Ye Olde Inn Style</li>'+
              '<button class="list-group-item btn">Extra Cheese</li>'+
              '</ul>'+
          '</div>'+
          '</div>';
    container.appendChild(homePageRendered);
};
export {createMenuPage};