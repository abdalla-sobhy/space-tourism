let terminology = document.querySelector(".terminology span");
let para = document.querySelector(".para");
let image = document.querySelector(".imageDiv");
const circle1 = document.styleSheets[0].cssRules[24];
const circle2 = document.styleSheets[0].cssRules[25];
const circle3 = document.styleSheets[0].cssRules[26];

const fourthPage = async() => {
    let url = 'http://localhost:3000/technologyPageContent';
    const res = await fetch(url);
    const data = await res.json();

    const numberOnefunc = function(){
        terminology.innerHTML = data[0].number1[0].terminology;
        para.innerHTML = data[0].number1[0].para;
        image.innerHTML = data[0].number1[0].image;
        circle1.style = "background: white; color: black;";
        circle2.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
        circle3.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
    }
    numberOnefunc();

    let numberOne = document.querySelector(".number1");
    numberOne.addEventListener("click", function(){
        numberOnefunc();
    })


    let numbertwo = document.querySelector(".number2");
    numbertwo.addEventListener("click", function(){
        terminology.innerHTML = data[1].number2[0].terminology;
        para.innerHTML = data[1].number2[0].para;
        image.innerHTML = data[1].number2[0].image;
        circle1.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
        circle2.style = "background: white; color: black;";
        circle3.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
    })

    let numberthree = document.querySelector(".number3");
    numberthree.addEventListener("click", function(){
        terminology.innerHTML = data[2].number3[0].terminology;
        para.innerHTML = data[2].number3[0].para;
        image.innerHTML = data[2].number3[0].image;
        circle1.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
        circle2.style = "background: transparent;color: white; border-color: white; border: 0.01rem solid white;";
        circle3.style = "background: white; color: black;";
    })

}

window.addEventListener('DOMContentLoaded', () => fourthPage());



let homeButton = document.querySelector(".Home-button");
    homeButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/index.html";
});
let DesButton = document.querySelector(".DES-button");
    DesButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/destination.html";
});
let crewButton = document.querySelector(".CREW-button");
    crewButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/crew.html";
});