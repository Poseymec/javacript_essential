
// declaration de la variable qui crée un nouvel objet XMLHttpRequest 
/*var xhr = new XMLHttpRequest();
//variable pour URL du fichier JSON
var url = './health_article.json';
//preparation de la requette GET 
xhr.open('GET', url, true);

xhr.responseType = 'json';

//definir ce qui va se passer si les données sont bien chargées

xhr.onload = function()
{
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


  articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });

}
xhr.send();*/

//creation de la variable xhr
const xhr = new XMLHttpRequest();

//url du fichier json
const url = "./client.json";

//preparation de la requette
xhr.open('GET' ,url ,true);

xhr.responseType = 'json';

//definir ce qui va se passer si les données sont bien chargées

xhr.onload = function()
{
    const clients = xhr.response.clients;
    const clientsDiv = document.getElementById('clients');

    clients.forEach(function(client){
        let clientDiv = document.createElement('div');
        clientDiv.classList.add('client');

        let name = document.createElement('h2');
        name.textContent = client.name;
        
        const rang = document.createElement('p');
        rang.textContent = client.id;

        let mail = document.createElement('h4');
        mail.textContent = client.email;

        let status = document.createElement('p');
        status.textContent = client.status;



        clientDiv.appendChild(name);
        clientDiv.appendChild(rang);
        clientDiv.appendChild(mail);
        clientDiv.appendChild(status);

        clientsDiv.appendChild(clientDiv);
    });

}
xhr.send();