'use strict';

//
function randomHolomem(items) {
    //alert("clicked!");
    let i = 0;
    i = Math.floor(Math.random() * items.length);
    document.getElementById("holoname-jp").innerHTML = holomem[i].JPname;
    document.getElementById("holoname-en").innerHTML = holomem[i].ENname;
    console.log(holomem[i].image);
    document.getElementById("holoimg-official").src = holomem[i].image;
}