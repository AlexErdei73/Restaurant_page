import { loadMenuBar, loadHomePage } from './loadHomePage.js';
import { loadMenu } from './loadMenu.js';
import { loadContact } from './loadContact.js';

loadMenuBar();
loadHomePage();

const buttons = document.querySelectorAll('button');
const logo = document.querySelector('button');
let button = document.querySelector('#button');
buttons.forEach(function(item) {
    item.addEventListener('click', onClick);
});
button.addEventListener('mouseenter' ,onMouseEnter);
button.addEventListener('mouseleave', onMouseLeave);

function onClick(e){
    const btn = e.target;
    console.log('click');
    styleMenu(btn);
    switch (btn.id) {
        case 'logo':
            loadHomePage();
            styleButton();
            break;
        case 'home': 
            loadHomePage();
            button = document.querySelector('#button');
            styleButton();
            break;
        case 'menu':
            loadMenu();
            break;
        case 'contact':
            loadContact();
            break;
        case 'button':
            loadContact();
            break;
    }
}

function onMouseEnter(e) {
    const button = e.target;
    button.style = 'width: 150px;' +
                    'height: 50px;' +
                    'line-height: 50px;' +
                    'background-color: white;' +
                    'color: darkred;' +
                    'text-align: center;' +
                    'font-size: large;' +
                    'border: 2px solid white;' +
                    'margin: auto;';  
}

function onMouseLeave(e) {
    const button = e.target;
    button.style = 'width: 150px;' +
                    'height: 50px;' +
                    'line-height: 50px;' +
                    'background-color: rgb(133,9,36);' +
                    'color: white;' +
                    'text-align: center;' +
                    'font-size: large;' +
                    'border: 2px solid white;' +
                    'margin: auto;';
}

function styleMenu(menuItem) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(item){
        item.style.background = 'white';
        item.style.color = 'darkred';
    })
    if (menuItem.id != 'logo') {
        menuItem.style.background = 'rgb(133, 9, 36)';
        menuItem.style.color = 'white';
    }
}

function styleButton() {
    button = document.querySelector('#button');
    button.addEventListener('click',onClick);
    button.addEventListener('mouseenter',onMouseEnter);
    button.addEventListener('mouseleave',onMouseLeave);
}