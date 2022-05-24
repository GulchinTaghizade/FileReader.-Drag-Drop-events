let input = document.querySelector(".inpt");
let icon = document.querySelector(".fa-arrow-up-from-bracket");
let dropbox = document.querySelector(".dropElm");
let table = document.querySelector(".table");
let rmvicon = document.querySelector(".icon");
let counter = 1;

icon.onclick = function () {
    input.click();
};

dropbox.ondragover = e => { e.preventDefault() };


dropbox.ondrop = function drop(ev) {
    ev.preventDefault();
    uploadImg(ev.dataTransfer.files);
}

input.onchange = function drop(ev) {
    ev.preventDefault();
    uploadImg(ev.target.files);

}

if (table.lastElementChild.innerText.length == 0) {
    table.style.visibility = "hidden";
}



function uploadImg(files) {
    [...files].forEach(function (file) {
        let reader = new FileReader();
        reader.onloadend = function (ev) {
            let tablerow =
                `<tr class="trow">
                     <th scope="row" class="counter_row">${counter++}</th>
                     <td><img src="${ev.target.result}" alt="" style="width:200px"></td>
                     <td>${file.name}</td>
                     <td>${file.size}</td>
                     <td>
                     <button class = "icon" onclick="removeRow(this)"><i class="fa-solid fa-xmark"></i></button>
                       </td>
                 </tr>`
            table.lastElementChild.innerHTML += tablerow;
            table.style = "visibility:visible";
        };
        reader.readAsDataURL(file);
        console.log(rmvicon);

    })
};

let counter_second = 1;
function removeRow(icon) {
    let row = icon.parentNode.parentNode.rowIndex;
    table.deleteRow(row);
    if (table.lastElementChild.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
    counter_second = 0;
    let crows = document.querySelectorAll(".counter_row");
    [...crows].forEach(row => {
        counter_second++;
        row.innerText = counter_second;
    });
    counter--;
}

function removeAll(){
    table.lastElementChild.innerText.length=0;
    if (table.lastElementChild.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
    counter=1;
}



