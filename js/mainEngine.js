$("header").append("<div class='glitch-window'></div>"); 
$("h1.glitched").clone().appendTo(".glitch-window");

clearScreen();

document.querySelector('.luckyButton').addEventListener('click', function () { 
    clearScreen();
    var randomBackpack = Math.floor(Math.random() * 8);
    var finalBackpack = document.querySelector('.backpackCanvas');
    finalBackpack.style.display = 'block';
    finalBackpack.src = './img/randomBackpack' + randomBackpack + '.jpg';

    switch (randomBackpack) { 
        case 0: var showBackpack = document.querySelector('.infoCanvas0'); showBackpack.style.display = 'block'; break;
        case 1: var showBackpack = document.querySelector('.infoCanvas1'); showBackpack.style.display = 'block'; break;
        case 2: var showBackpack = document.querySelector('.infoCanvas2'); showBackpack.style.display = 'block'; break;
        case 3: var showBackpack = document.querySelector('.infoCanvas3'); showBackpack.style.display = 'block'; break;
        case 4: var showBackpack = document.querySelector('.infoCanvas4'); showBackpack.style.display = 'block'; break;
        case 5: var showBackpack = document.querySelector('.infoCanvas5'); showBackpack.style.display = 'block'; break;
        case 6: var showBackpack = document.querySelector('.infoCanvas6'); showBackpack.style.display = 'block'; break;
        case 7: var showBackpack = document.querySelector('.infoCanvas7'); showBackpack.style.display = 'block'; break;
    }
}); 

function clearScreen() { 
    for (let i = 0; i < 8; i++) {
        document.querySelector('.backpackCanvas').style.display = 'none';
        document.querySelector('.infoCanvas' + i).style.display = 'none';
    }
}