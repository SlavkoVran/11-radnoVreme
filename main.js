let tableHtml = '<table class="table table-striped"> <tr><th>Datum</th><th>Pocetak</th><th>Kraj</th></tr>';
document.getElementById("radnoVreme").innerHTML += tableHtml;
var danas = new Date();
vremeDolaska = [];
vremeOdlaska = [];
i = 0; 
j = 0;

function upisiVreme(){
    let danas = new Date();
    let upisi = document.getElementById("upisi");
    if (upisi.value == "Pocetak radnog vremena"){
        tableHtml += '<tr><td>' + danas.getDate() + "." + danas.getMonth()+1+
        "." + danas.getFullYear() + "." + "</td>" + "<td>" + danas.getHours() + "." 
        + danas.getMinutes() + ":" + danas.getSeconds() + "</td>";
        document.getElementById("radnoVreme").innerHTML = tableHtml;
         vremeDolaska[i] = danas.getTime();
         i++;
         upisi.value = "Kraj radnog vremena";
         upisi.setAttribute("class", "btn btn-warning");
         console.log(vremeDolaska);
    }
    else if( upisi.value == "Kraj radnog vremena"){
        tableHtml += "<td>" + danas.getHours() + ":" + danas.getMinutes() + ":" + danas.getSeconds() + "</td></tr>";
        document.getElementById("radnoVreme").innerHTML = tableHtml;
        vremeOdlaska[j] = danas.getTime();
        j++;
        upisi.value = "Pocetak radnog vremena";
        upisi.setAttribute("class", "btn btn-success");
        console.log(vremeOdlaska)
    }
}

function ukupno(){
zb = 0;
vreme = 0;
console.log(vremeOdlaska.length);
for (k = 0; k < vremeOdlaska.length; k++){ 
console.log(zb)
}
vreme = Number((zb/1000)/3600);
document.getElementById("ukupnoV").innerHTML = vreme + "h";

}

document.getElementById("btnUkupnoRadnoVreme").addEventListener("click", ukupno);
document.getElementById("upisi").addEventListener("click", upisiVreme);