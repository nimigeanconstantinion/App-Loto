let ghiceste = '';
let btp = document.querySelector(".buto");
let bttn = document.querySelector(".buton");
let bdy=document.querySelector("body");
let textC = ``;
let textG = ``;
let sanse = 7;
let fingame = false;
sanse = +7;
btp.addEventListener("click", () => {
    play();
})


function play() {
    ghiceste = prompt("Introduceti cuvantul/cuvintele de ghicit: ");
    textG = "";

    textC = ghiceste;
    btp.style.display="none";

    let x = document.querySelector(".gasite");
    x.innerHTML = filtrare(ghiceste, "");
    bttn.style.display = "flex";
    bttn.style.justifycontent = "center";
    bttn.style.alignitems="center";
    bttn.innerHTML = 'Alege o litera';
    ;

    
}



function filtrare(textCautat, textGasit) {
    
    let text = ``;
    let alese = ``;
    for (let i = 0; i < textCautat.length; i++) {
        if (textCautat.charAt(i) != " " && textGasit.includes(textCautat[i])) {
            text += `<div>${textCautat[i]}</div>`;
        } else if (textGasit.includes(textCautat[i]) == false &&textCautat.charAt(i) != " ") {
            text += `<div></div>`;
        } else {
            text += `<div class="spatiu"> </div>`;
        }
    }
    console.log(text);
    return text;
}


function checkFin() {
    let chks = textC;
    chks = chks.replace(" ", "");
    
    for (let i = 0; i < textG.length; i++){
        chks=chks.replaceAll(textG[i], "");
        
    }
    if (chks.length == 0) {
        return true;
    } else {
        return false;
    }
}


// let textG = "";

// let textC = "Ana are mere";

 let x = document.querySelector(".gasite");



// x.innerHTML=filtrare( textG,textC);

bttn.addEventListener("click", () => {
    let litera = prompt("Introduceti inca o litera: ");

    if (textC.includes(litera) && textG.includes(litera) == false) {
        
        textG += litera;

        x.innerHTML = filtrare(textC, textG);
        if (checkFin()) {
            fingame = true;
            bdy.innerHTML = `
            <h1>Hangman Game</h1>
            <img src="https://media.giphy.com/media/2gtoSIzdrSMFO/giphy.gif">
            `;        
        }
    }else{

        alert("Ghinionnnnnn!!!!");
        sanse--;
        alert("Mai aveti "+sanse+" vieti");
        if (sanse == 0) {
            bdy.innerHTML = `
            <h1>Hangman Game</h1>
            <h1>YOU LOOSE!!!</h1>
            <img id="loose" src="https://media.giphy.com/media/ybQIv0CsYm1XY9A8Dm/giphy.gif">
            <p>Asta trebuia sa ghicesti:</p>
            <p>${textC}</p>
            `;
        }
    }
});