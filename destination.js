let moonafter = document.styleSheets[0].cssRules[20];
let marsafter = document.styleSheets[0].cssRules[22];
let euoraafter = document.styleSheets[0].cssRules[24];
let titanafter = document.styleSheets[0].cssRules[26];
const secondtPage = async() => {
        
    let url = 'http://localhost:3000/destinationPageContent';

    const res = await fetch(url);
    const data = await res.json();    
    
    let planetImage = document.querySelector(".planetImage");
    planetImage.innerHTML = `<img src=${data[1].moon[0].planetImage} alt="couldn't find the image"/>`

    let planetName = document.querySelector(".planetName");
    planetName.innerHTML = data[1].moon[0].planetName;
    planetText = document.querySelector(".planetPara");
    planetText.innerHTML = data[1].moon[0].planetPara;

    let planetinfo = document.querySelector(".distance span");
    planetinfo.innerHTML = data[1].moon[0].planetAvgDisValue;
    planetinfo = document.querySelector(".travil_time span");
    planetinfo.innerHTML = data[1].moon[0].planetTravelTimeValue;

    let moonButton = document.querySelector(".moonhover");
    moonButton.addEventListener("click", function(){

        let planetImage = document.querySelector(".planetImage");
        planetImage.innerHTML = `<img src=${data[1].moon[0].planetImage} alt="couldn't find the image"/>`
    
        let planetName = document.querySelector(".planetName");
        planetName.innerHTML = data[1].moon[0].planetName;
        planetText = document.querySelector(".planetPara");
        planetText.innerHTML = data[1].moon[0].planetPara;
    
        let planetinfo = document.querySelector(".distance span");
        planetinfo.innerHTML = data[1].moon[0].planetAvgDisValue;
        planetinfo = document.querySelector(".travil_time span");
        planetinfo.innerHTML = data[1].moon[0].planetTravelTimeValue;

        
        moonafter.style = "background: white;"; 
        marsafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        euoraafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        titanafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
    })

    let marsButton = document.querySelector(".marshover");
    marsButton.addEventListener("click", function(){

        let planetImage = document.querySelector(".planetImage");
        planetImage.innerHTML = `<img src=${data[2].mars[0].planetImage} alt="couldn't find the image"/>`
    
        let planetName = document.querySelector(".planetName");
        planetName.innerHTML = data[2].mars[0].planetName;
        planetText = document.querySelector(".planetPara");
        planetText.innerHTML = data[2].mars[0].planetPara;
    
        let planetinfo = document.querySelector(".distance span");
        planetinfo.innerHTML = data[2].mars[0].planetAvgDisValue;
        planetinfo = document.querySelector(".travil_time span");
        planetinfo.innerHTML = data[2].mars[0].planetTravelTimeValue;
        
        moonafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        marsafter.style = "background: white;"; 
        euoraafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        titanafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
    })

    let europaButton = document.querySelector(".europahover");
    europaButton.addEventListener("click", function(){

        let planetImage = document.querySelector(".planetImage");
        planetImage.innerHTML = `<img src=${data[3].europa[0].planetImage} alt="couldn't find the image"/>`
    
        let planetName = document.querySelector(".planetName");
        planetName.innerHTML = data[3].europa[0].planetName;
        planetText = document.querySelector(".planetPara");
        planetText.innerHTML = data[3].europa[0].planetPara;
    
        let planetinfo = document.querySelector(".distance span");
        planetinfo.innerHTML = data[3].europa[0].planetAvgDisValue;
        planetinfo = document.querySelector(".travil_time span");
        planetinfo.innerHTML = data[3].europa[0].planetTravelTimeValue;
        
        moonafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;";
        marsafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        euoraafter.style = "background: white;"; 
        titanafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        let planetNameStyle = document.styleSheets[0].cssRules[36];
        planetNameStyle.style = "color: white; font-size: 7rem; line-height: 13rem;"
    })


    let titanButton = document.querySelector(".titanhover");
    titanButton.addEventListener("click", function(){

        let planetImage = document.querySelector(".planetImage");
        planetImage.innerHTML = `<img src=${data[4].titan[0].planetImage} alt="couldn't find the image"/>`
    
        let planetName = document.querySelector(".planetName");
        planetName.innerHTML = data[4].titan[0].planetName;
        planetText = document.querySelector(".planetPara");
        planetText.innerHTML = data[4].titan[0].planetPara;
    
        let planetinfo = document.querySelector(".distance span");
        planetinfo.innerHTML = data[4].titan[0].planetAvgDisValue;
        planetinfo = document.querySelector(".travil_time span");
        planetinfo.innerHTML = data[4].titan[0].planetTravelTimeValue;
        
        moonafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;";
        marsafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        euoraafter.style = "transform: scale(0, 1); transition: transform 0.3s ease;"; 
        titanafter.style = "background: white;"; 
    })
}

window.addEventListener('DOMContentLoaded', () => secondtPage());

let homeButton = document.querySelector(".Home-button");
    homeButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/index.html";
});

let crewButton = document.querySelector(".CREW-button");
    crewButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/crew.html";
});

let techButton = document.querySelector(".TECH-button");
    techButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/technology.html";
});