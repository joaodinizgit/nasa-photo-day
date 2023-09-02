const mainPhoto = document.getElementById("main-photo");
const description = document.getElementById("description");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const date = document.getElementById("date");
const video = document.getElementById("video");

async function logJSONData() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    const jsonData = await response.json();

    // Check media type(Video or Image)
    if (jsonData.media_type == "video") {
        video.setAttribute("src", jsonData.url)
        video.setAttribute("style", "display:block");
    }else {
        mainPhoto.setAttribute("src", jsonData.hdurl);
    }
    title.textContent = jsonData.title;
    date.textContent = jsonData.date;
    explanation.textContent = jsonData.explanation;
    
    // Check if the photo have copyright and show if so.
    if (jsonData.copyright != undefined) {
        const copyright = document.createElement("p");
        copyright.setAttribute("class", "copyrigth")
        copyright.textContent = `Image Credit/Copyright: ${jsonData.copyright}`;
        description.insertBefore(copyright, date);
    };
}

logJSONData();