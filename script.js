let name = document.getElementById("name");
let height = document.getElementById("height");
let mass = document.getElementById("mass");
let hair_color = document.getElementById("hair_color");
let skin_color = document.getElementById("skin_color");
let eye_color = document.getElementById("eye_color");
let birth_year = document.getElementById("birth_year");
let gender = document.getElementById("gender");

let btn = document.getElementById("btn").addEventListener("click", function(){
    let number = Math.floor(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${number}/`)
        .then(Response => Response.json())
        .then(Character_information => {

            name.textContent = `Name: ${Character_information.name}`;
            height.textContent = `Height: ${Character_information.height}`;
            mass.textContent = `Mass: ${Character_information.mass}`
            hair_color.textContent = `Hair color: ${Character_information.hair_color}`;
            skin_color.textContent = `Skin color: ${Character_information.skin_color}`;
            eye_color.textContent = `Eye color: ${Character_information.eye_color}`;
            birth_year.textContent = `Birth year: ${Character_information.birth_year}`;
            gender.textContent = `Gender: ${Character_information.gender}`;
        })
});
