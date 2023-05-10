const mainPhoto = document.getElementById("main-photo");
const description = document.getElementById("description");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");

async function logJSONData() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=EUhzjha07LLtLmnzLdYkD6JV9eO8vx3IefV1SNfE");
    const jsonData = await response.json();

    mainPhoto.setAttribute("src", jsonData.hdurl);
    title.textContent = jsonData.title;
    date.textContent = jsonData.date;
    explanation.textContent = jsonData.explanation;
    console.log(jsonData);
    
    // Check if the photo have copyright
    if (jsonData.copyright != undefined) {
        const copyright = document.createElement("p");
        copyright.setAttribute("class", "copyrigth")
        copyright.textContent = `Image Credit/Copyright: ${jsonData.copyright}`;
        description.insertBefore(copyright, date);
    };
}

logJSONData();