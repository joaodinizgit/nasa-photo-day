const mainPhoto = document.getElementById("main-photo");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

async function logJSONData() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=EUhzjha07LLtLmnzLdYkD6JV9eO8vx3IefV1SNfE ");
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData.date);

    mainPhoto.setAttribute("src", jsonData.hdurl);
    title.textContent = jsonData.title;
    date.textContent = jsonData.date;
    explanation.textContent = jsonData.explanation;
}

logJSONData();