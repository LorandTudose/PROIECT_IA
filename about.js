//TRECUT
let reztrecut = document.getElementById("rez_trecut");
let trecut_but = document.getElementById("trecut_but");
let trecut_but2 = document.getElementById("trecut_but2");

trecut_but2.style.display = 'none';
reztrecut.style.display = 'none';

function inapoi(){
    window.location.href = "index.html";
}

function apare_contt(){
    reztrecut.style.display = "revert";
    reztrecut.animate([
        {transform: 'translateY(-100px)'},
        {transform: 'translateY(0px)'},],
    {
        duration: 50
    });
    trecut_but.style.display = 'none';
    
    trecut_but2.style.display = "revert";
    trecut_but2.animate([
        {transform: 'rotate(360deg)' },
        
    ],{
        duration : 90
    }
     );
    
}
function dispare_contt(){
    reztrecut.style.display = "none";
    trecut_but.style.display = 'revert';
    trecut_but.animate([
        {transform: 'rotate(-180deg)' },],{
        duration : 90
    }); 
    trecut_but2.style.display = "none";
}


//PREZENT

let rezprezent = document.getElementById("rez_prezent");
let prezent_but = document.getElementById("prezent_but");
let prezent_but2 = document.getElementById("prezent_but2");

prezent_but2.style.display = 'none';
rezprezent.style.display = 'none';

function apare_contp(){
    rezprezent.style.display = 'revert';
    rezprezent.animate([
        {transform: 'translateY(-100px)'},
        {transform: 'translateY(0px)'},],
    {
        duration: 50
    });
    prezent_but2.style.display = 'revert';
    prezent_but2.animate([
        {transform: 'rotate(360deg)' },
        
    ],{
        duration : 90
    }
     ); 
     rezprezent.style.opacity = '1';
     prezent_but.style.display = 'none';
}

function dispare_contp(){

   rezprezent.style.display = 'none';
    prezent_but.style.display = 'revert';
    prezent_but.animate([
        {transform: 'rotate(-180deg)' },],{
        duration : 90
    }); 
    prezent_but2.style.display = 'none';    
}


//VIITOR

let rezviitor = document.getElementById("rez_viitor");
let viitor_but = document.getElementById("viitor_but");
let viitor_but2 = document.getElementById("viitor_but2");
let textviitor = document.getElementById("viitor").innerText;

rezviitor.style.display = 'none';
viitor_but2.style.display = 'none';

function apare_contv(){
    rezviitor.style.display = 'revert';
    rezviitor.animate([
        {transform: 'translateY(-100px)'},
        {transform: 'translateY(0px)'},],
    {
        duration: 50
    });
    viitor_but.style.display = 'none';
    viitor_but2.style.display = 'revert';
    viitor_but2.animate([
        {transform: 'rotate(360deg)' },
        
    ],{
        duration : 90
    }
     );
 console.log(textviitor);
   textviitor.animate([
    {transform: scale(1.5)},],
    {
        duration : 90
    });
}

function dispare_contv(){
    rezviitor.style.display = 'none';
    viitor_but.style.display = 'revert';
    viitor_but.animate([
        {transform: 'rotate(-180deg)' },],{
        duration : 90
    }); 
    viitor_but2.style.display = 'none';
}