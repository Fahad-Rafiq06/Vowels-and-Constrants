var vowels = [];

var normals = [];

function addwords() {
    var cont = document.getElementById('input').value;
    cont = cont.toLowerCase();
    var value = true;
    if(cont == "" || cont == " "){
        alert("Enter value first")
        
    }
    else{
    for (var i = 0; i < cont.length; i++) {
        if (cont[i] == "a" || cont[i] == "e" || cont[i] == "i" || cont[i] == "o" || cont[i] == "u") {
            value = false;
            break;
        }
    }
    if (value == false) {
        vowels.push(cont)
        document.getElementById('a').innerHTML += "<li>" + cont + "</li>";
    }
    else {
        value = true;
        normals.push(cont)
        document.getElementById('b').innerHTML += "<li>" + cont + "</li>";
    }
}
}
