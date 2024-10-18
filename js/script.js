let image = document.getElementById("img-cont");
let rightButton = document.getElementById("right-button");
let leftButton = document.getElementById("left-button");

rightButton.addEventListener("click", () => {
    if(image.innerHTML === '<img src="icons/panel1.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel2.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel2.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel3.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel3.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel4.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel4.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel5.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel5.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel6.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel6.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel1.jpg" id="img">'
    }
}); 

leftButton.addEventListener("click", () => {
    if(image.innerHTML === '<img src="icons/panel1.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel6.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel6.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel5.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel5.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel4.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel4.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel3.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel3.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel2.jpg" id="img">'
    } else if(image.innerHTML === '<img src="icons/panel2.jpg" id="img">') {
        image.innerHTML = '<img src="icons/panel1.jpg" id="img">'
    }
});