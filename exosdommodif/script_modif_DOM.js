// function changeTitles() {}

var title = document.querySelector("h1.jumbotron-heading").innerHTML = "Ce que j'ai appris à THP";
console.log(title);

var st = document.querySelector("p.lead").innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
console.log(st);


//  function changeCallToActions() {}

var bta = document.querySelector("a.btn-primary").innerHTML = "OK, je veux tester !";
console.log(bta);
var bta2 = document.querySelectorAll("a.btn-primary").href = "http://www.thehackingproject.org";
console.log(bta2);

var bta3 = document.querySelector("a.btn-secondary").innerHTML = "Non, merci !";
console.log(bta3);

var bta4 = document.querySelectorAll("a.btn-secondary").href = "https://www.pole-emploi.fr/accueil/";
console.log(bta4);


// function changeLogoName() {}

var l = document.querySelector(".navbar strong").innerHTML = "The THP Experience";
console.log(l);
var l = document.querySelector(".navbar strong").style = "font-size : 2em";
console.log(l);


// function populateImages() {}

var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
var im = document.getElementsByClassName("card-img-top");

for (var i = 0; i<im.length; i++)
  { im [i].src = imagesArray[i];}

  
 // function delete lastCards() {}

 let s = document.getElementsByClassName('card');
  for (i = 3 ; i > 0; i--) {
    s[s.length - 1].remove();
  }
