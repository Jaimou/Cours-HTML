const root = document.querySelector('#root');
const cock = document.querySelector('#cock');
const button = document.createElement('button');
button.textContent = 'Vas-y clique moi batard';
root.appendChild(button);

// C'est la même chose que le () => 
function test(){
}

const fetchRandomDrink = async () => {
    const responseCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await responseCocktail.json();
}


function getIngredients(drink){
    const ingredients = document.createElement('ul');
    for(let i=1; i<=15; i++){
        if(drink['strIngredient'+i] !== null){
            const liste = document.createElement('li');
            liste.textContent = drink['strIngredient'+i];
            ingredients.appendChild(liste);
        }
    }
    return ingredients;
}

button.addEventListener('click', async () => { //() =>    --> Création d'une fonction fléchée
    cock.innerHTML="";

    const response = await fetchRandomDrink();
    const randomDrink = response.drinks[0];
    const h1 = document.createElement('h1');
    const cat = document.createElement('h2');
    const instructions = document.createElement('h3');
    const img = document.createElement('img');

    h1.textContent = randomDrink.strDrink;
    cat.textContent = randomDrink.strCategory;
    instructions.textContent = randomDrink.strInstructions;
    img.src = randomDrink.strDrinkThumb;

    cock.appendChild(h1);
    cock.appendChild(cat);
    cock.appendChild(instructions);
    cock.appendChild(getIngredients(randomDrink));
    cock.appendChild(img);
});

