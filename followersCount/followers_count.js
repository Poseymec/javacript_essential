

let count = 0;// variable de compte

//fonction increaseCount qui permet de compter les followers
function increaseCount()
{
    count++;
    countDisplay();
    checkCountValue(); 

}

//fonction displayCount qui permet d'afficher le nombre de folowers
function countDisplay()
{
    document.getElementById('countDisplay').innerHTML=count;
}

// fonction checkCountValue pour compter les followers et envoyer un message d'alert

function checkCountValue()
{
    if(count === 10)
    {
        alert("Your Instagram post gained 10 followers! congratulations:!");

    }
    else if(count === 20)
    {
        alert("Your Instagram post gained 20 followers!keep it up!")
    }

}


