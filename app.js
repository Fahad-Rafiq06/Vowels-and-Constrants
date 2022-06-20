var vowels = [];

var normals = [];

            function addwords() {
                var cont = document.getElementById('input').value;
                var value = true;


                for (var i = 0; i < cont.length; i++) {
                    if (cont[i] == "a" || cont[i] == "e" || cont[i] == "i" || cont[i] == "o" || cont[i] == "u") {
                        value = false;
                        

                        if (value == false) {
                            vowels.push(cont)
                            document.getElementById('a').innerHTML += "<li>" + cont + "</li>";
                            
                        }
                        else {
                            // value = true;
                            normals.push(cont)
                            document.getElementById('b').innerHTML += "<li>" + cont + "</li>";
                            console.log(normals)
                            
                        };
                        break;
                    }

                }
            }



// var vowels = [];

// var normals = [];

// var value = true;

// function addwords() {
//     var userValue = document.getElementById("store").value;
//     for (var i = 0; i <= userValue.length; i++) {
//         console.log(i)
//         if (userValue[i] == "a" || userValue[i] == "e" || userValue[i] == "i" || userValue[i] == "o" || userValue[i] == "u") {
//             vowels.push(userValue);
//             value = false;
//             console.log("vowels wins", vowels)
//             document.getElementById("vowels").innerText += "<li>" + userValue + "</li>"
//             break;
//         }
//         else {
//             normals.push(userValue);
//             value = true;
//             document.getElementById("normals").innerText += "<li>" + userValue + "</li>"
//             console.log("normal wins", normals);
//             break;

//         }


//     }
// }