const _1stCrewMemberstyle = document.styleSheets[0].cssRules[29];
const _2ndCrewMemberstyle = document.styleSheets[0].cssRules[30];
const _3rdCrewMemberstyle = document.styleSheets[0].cssRules[31];
const _4thCrewMemberstyle = document.styleSheets[0].cssRules[32];
const _1stdCrewMemberHoverstyle = document.styleSheets[0].cssRules[33];
const _2ndCrewMemberHoverstyle = document.styleSheets[0].cssRules[34];
const _3rdCrewMemberHoverstyle = document.styleSheets[0].cssRules[35];
const _4thCrewMemberHoverstyle = document.styleSheets[0].cssRules[36];


let memberRol = document.querySelector(".memberRol");
let memberName = document.querySelector(".memberName");
let memberpara = document.querySelector(".memberpara");
let imageDiv = document.querySelector(".imageDiv");

const thirdPage = async() => {
    let url = 'http://localhost:3000/crewPageContent';
    const res = await fetch(url);
    const data = await res.json();


    let _1stCrewMemberstyleFunc = function(){
        memberRol.innerHTML = data[0].DOUGLAS_HURLEY[0].memberRol;
    memberName.innerHTML = data[0].DOUGLAS_HURLEY[0].memberName;
    memberpara.innerHTML = data[0].DOUGLAS_HURLEY[0].memberpara;
    imageDiv.innerHTML = data[0].DOUGLAS_HURLEY[0].memberImage;
    _1stdCrewMemberHoverstyle.style = "";
    _2ndCrewMemberHoverstyle.style = "background: #85878B";
    _3rdCrewMemberHoverstyle.style = "background: #85878B";
    _4thCrewMemberHoverstyle.style = "background: #85878B";
    }

    _1stCrewMemberstyleFunc();

    

    let _1stCrewMember = document.querySelector("._1stCrewMember");
    _1stCrewMember.addEventListener("click", function(){
        _1stCrewMemberstyle.style = "background: white;";
        _2ndCrewMemberstyle.style = "background: #35383F;";
        _3rdCrewMemberstyle.style = "background: #35383F;";
        _4thCrewMemberstyle.style = "background: #35383F;";
        _1stCrewMemberstyleFunc();
    })

    let _2ndCrewMember = document.querySelector("._2ndCrewMember");
    _2ndCrewMember.addEventListener("click", function(){
        _1stCrewMemberstyle.style = "background: #35383F;";
        _2ndCrewMemberstyle.style = "background: white;";
        _3rdCrewMemberstyle.style = "background: #35383F;";
        _4thCrewMemberstyle.style = "background: #35383F;";
        _1stdCrewMemberHoverstyle.style = "background: #85878B";
        _2ndCrewMemberHoverstyle.style = "";
        _3rdCrewMemberHoverstyle.style = "background: #85878B";
        _4thCrewMemberHoverstyle.style = "background: #85878B";
        memberRol.innerHTML = data[1].MARK_SHUTTLEWORTH[0].memberRol;
        memberName.innerHTML = data[1].MARK_SHUTTLEWORTH[0].memberName;
        memberpara.innerHTML = data[1].MARK_SHUTTLEWORTH[0].memberpara;
        imageDiv.innerHTML = data[1].MARK_SHUTTLEWORTH[0].memberImage;
    })

    let _3rdCrewMember = document.querySelector("._3rdCrewMember");
    _3rdCrewMember.addEventListener("click", function(){
        _1stCrewMemberstyle.style = "background: #35383F;";
        _2ndCrewMemberstyle.style = "background: #35383F;";
        _3rdCrewMemberstyle.style = "background: white;";
        _4thCrewMemberstyle.style = "background: #35383F;";
        _1stdCrewMemberHoverstyle.style = "background: #85878B";
        _2ndCrewMemberHoverstyle.style = "background: #85878B";
        _3rdCrewMemberHoverstyle.style = "";
        _4thCrewMemberHoverstyle.style = "background: #85878B";
        memberRol.innerHTML = data[2].VICTOR_GLOVER[0].memberRol;
        memberName.innerHTML = data[2].VICTOR_GLOVER[0].memberName;
        memberpara.innerHTML = data[2].VICTOR_GLOVER[0].memberpara;
        imageDiv.innerHTML = data[2].VICTOR_GLOVER[0].memberImage;
    })

    let _4thCrewMember = document.querySelector("._4thCrewMember");
    _4thCrewMember.addEventListener("click", function(){
        _1stCrewMemberstyle.style = "background: #35383F;";
        _2ndCrewMemberstyle.style = "background: #35383F;";
        _3rdCrewMemberstyle.style = "background: #35383F;";
        _4thCrewMemberstyle.style = "background: white;";
        _1stdCrewMemberHoverstyle.style = "background: #85878B";
        _2ndCrewMemberHoverstyle.style = "background: #85878B";
        _3rdCrewMemberHoverstyle.style = "background: #85878B";
        _4thCrewMemberHoverstyle.style = "";
        memberRol.innerHTML = data[3].ANOUSHEH_ANSARI[0].memberRol;
        memberName.innerHTML = data[3].ANOUSHEH_ANSARI[0].memberName;
        memberpara.innerHTML = data[3].ANOUSHEH_ANSARI[0].memberpara;
        imageDiv.innerHTML = data[3].ANOUSHEH_ANSARI[0].memberImage;
    })

}

window.addEventListener('DOMContentLoaded', () => thirdPage());

let homeButton = document.querySelector(".Home-button");
    homeButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/index.html";
});

let DesButton = document.querySelector(".DES-button");
DesButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/destination.html";
});


let techButton = document.querySelector(".TECH-button");
    techButton.addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/technology.html";
});