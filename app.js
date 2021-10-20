let ghiceste = '';
//let btp = document.querySelector(".buto");
let buton = document.querySelector(".buton");
let bdy=document.querySelector("body");
let textC = ``;
let textG = ``;
let textAll = ``;
let sanse = 7;
let fingame = false;

let joc = 0;
sanse = +7;



buton.innerHTML = "Play";





function play() {
    ghiceste = prompt("Introduceti cuvantul/cuvintele de ghicit: ");
    textG = "";

    textC = ghiceste;


    let x = document.querySelector(".gasite");
    x.innerHTML = filtrare(ghiceste, "");
    buton.innerHTML = `Alege o litera`;

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
    chks = chks.replaceAll(" ", "");
    
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
 let introd = document.querySelector(".introduse");



// x.innerHTML=filtrare( textG,textC);

let putCh = () => {
    let toShow =``;
    for (let i = 0; i < textAll.length; i++){
        toShow += ` ${textAll[i]},`;
    }
    return toShow.substring(0,toShow.length-1);
}

buton.addEventListener("click", () => {

    if (joc == 0) {
        

        play();
        joc = 1;
    } else {

        let litera = prompt("Introduceti inca o litera: ");
        
        if (textC.includes(litera) && textG.includes(litera) == false) {
        
            textG += litera;
            textAll += litera;
            x.innerHTML = filtrare(textC, textG);
            introd.innerHTML =`Ati ales pana acum: `+ putCh();

            if (checkFin()) {
                fingame = true;
                bdy.innerHTML = `
                <header>
                <h1>Hangman Game</h1>
                <section class="sanse">
                    <a href="/index.html">Back</a>
                </section>                    

                </header>
                <img class="win" src="https://media.giphy.com/media/l0HlSDiA6WUytl9oA/giphy.gif">
                <footer>
                <p>Hangman Game &copy; MininalistCode Inc. 2021</p>
                </footer>
            `;
            
            }
        } else {
            textAll += litera;
            alert("Ghinionnnnnn!!!!");
            sanse--;
            introd.innerHTML = `Ati ales pana acum: `+putCh();

            let sns = document.querySelector(".sanse");
            sns.innerHTML = `
                 Mai aveti ${sanse} vieti din 7
            `;
            //alert("Mai aveti " + sanse + " vieti");
            if (sanse == 0) {
                bdy.innerHTML = `
                <header>
                    <h1>Hangman Game</h1>
                    <section class="sanse">
                    <a href="/index.html">Back</a>
                    </section>                    
                </header>
                
            <img id="loose" src="https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif">
            <p id="guess">Asta trebuia sa ghicesti: ${textC}</p>
            <footer>
            <p>Hangman Game &copy; MininalistCode Inc. 2021</p>
            </footer>

            `;
            }
        }

        buton.innerHTML = "Alege Litera";
    }
});