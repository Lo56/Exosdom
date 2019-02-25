
//var li = document.querySelector('.compte-moi');
//console.log(li);

var p = document.getElementsByTagName('p').length;
console.log(p);
console.log("il y a " + p + " balises <p> dans le texte");



console.log("le contenu texte de l'élément portant l'id coucou est : ");
console.log(document.getElementById('coucou').innerHTML);

console.log("URL vers laquelle pointe le 3ème élément <a> de la page HTML est :");

console.log(document.getElementsByTagName('a')[2].href);



//Le nombre d'éléments portant la classe compte-moi :
var e = document.getElementsByClassName('compte-moi').length; 
console.log(e);
console.log("il y a "+ e + " occurrences de la classe 'compte-moi'");


var l = document.querySelectorAll("li.compte-moi").length; 
console.log(l);
console.log("il y a "+ l + " occurrences de <li> avec la classe 'compte-moi'");

var m = document.getElementsByTagName("div.ul[1].li[0]");
console.log(m);
console.log("le contenu caché du 1er <li> du 2è <lu> du <div> est : " + m );

