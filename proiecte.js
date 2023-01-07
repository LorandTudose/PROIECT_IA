function inapoi(){
    window.location.href = "index.html";
}

var formular = document.getElementById("formular");

var form_creat = document.createElement('form');
form_creat.setAttribute("action", ""); 
form_creat.setAttribute("method", "post"); 
formular.appendChild(form_creat);

var heading = document.createElement('h2'); 
heading.innerHTML = "Contacteaza-ma ";
form_creat.appendChild(heading);    

var heading_1 = document.createElement('h2'); 
heading_1.innerHTML = "!";
form_creat.appendChild(heading_1);
heading_1.setAttribute('id', 'exclamare');
var linie_mijl = document.createElement('hr'); 
form_creat.appendChild(linie_mijl);

var break_1 = document.createElement('br');
form_creat.appendChild(break_1);

var nume = document.createElement('label'); 
nume.innerHTML = "Numele tau : "; 
form_creat.appendChild(nume);

var input_nume = document.createElement('input'); 
input_nume.setAttribute("type", "text");
input_nume.setAttribute("name", "dnume");
form_creat.appendChild(input_nume);

var break_1 = document.createElement('br');
form_creat.appendChild(break_1);

var email = document.createElement('label');
email.innerHTML = "Email-ul tau : ";
form_creat.appendChild(email);

var input_email = document.createElement('input'); 
input_email.setAttribute("type", "text");
input_email.setAttribute("name", "demail");
form_creat.appendChild(input_email);

var email_break = document.createElement('br');
form_creat.appendChild(email_break);

var input_mesaj = document.createElement('label'); 
input_mesaj.innerHTML = "Mesajul tau : ";
form_creat.appendChild(input_mesaj);

var input_text = document.createElement('textarea');
input_text.setAttribute("name", "dmessage");
form_creat.appendChild(input_text);

var mesaj_break = document.createElement('br');
form_creat.appendChild(mesaj_break);

var trimite = document.createElement('input'); 
trimite.setAttribute("type", "submit");
trimite.setAttribute("name", "dtrimite");
trimite.setAttribute("value", "Trimite");
trimite.setAttribute('id' , 'trimite_but');
form_creat.appendChild(trimite);
trimite.setAttribute('id' , 'trimite_but');

trimite.onclick = function(){
    alert("Mesajul tau a fost trimit spre nicaieri pentru ca aceasta pagina nu contine pHp!");
}