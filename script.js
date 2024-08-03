const firstPage = async() => {
    let url = 'http://localhost:3000/homePageContent';
    let url2 = 'http://localhost:3000/destinationPageContent';

    const res = await fetch(url);
    const data = await res.json();

    const res2 = await fetch(url2);
    const data2 = await res2.json();

    const homePage = function(){
        
    let text = document.querySelector(".home-page-text span");

    text.innerHTML = data[0].firstLineSpan;
    text = document.querySelector(".from-space span");
    text.innerHTML = data[0].SPACE;
    text = document.querySelector(".para");
    text.innerHTML = data[0].text;
    text = document.querySelector(".explore span");
    text.innerHTML = data[0].explore;


    let upperDesButton = document.querySelector(".DES-button");
    let bottomDesButtom = document.querySelector(".explore2");
    let crewButton = document.querySelector(".CREW-button");

    upperDesButton.addEventListener("click", function(){
        window.location.href = data2[0].destinationPageurl;
    });
    bottomDesButtom.addEventListener("click", function(){
        window.location.href = data2[0].destinationPageurl;
    });
    crewButton.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/crew.html";
    });
    let techButton = document.querySelector(".TECH-button");
    techButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/technology.html";
});
    }

    homePage();
    
}

window.addEventListener('DOMContentLoaded', () => firstPage());