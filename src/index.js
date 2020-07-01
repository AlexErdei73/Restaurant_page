import { loadMenuBar, loadHomePage } from './loadHomePage.js';
import { loadMenu } from './loadMenu.js';
import { loadContact } from './loadContact.js';

loadMenuBar();
loadHomePage();

const li = document.querySelectorAll('li');
const h1 = document.querySelector('h1');
li.forEach(function(item) {
    item.addEventListener('click', onClick);
});
h1.addEventListener('click', onClick);

function onClick(e){
    const li = e.target;
    styleMenu(li);
    switch (li.id) {
        case 'logo':
            loadHomePage();
            break;
        case 'home': 
            loadHomePage();
            break;
        case 'menu':
            loadMenu();
            break;
        case 'contact':
            loadContact();
            break;
    }
}

function styleMenu(listItem) {
    const li = document.querySelectorAll('li');
    li.forEach(function(item){
        item.style.background = 'white';
        item.style.color = '#3b3b3b';
    })
    if (listItem.id != 'logo') {
        listItem.style.background = '#1f1f1f';
        listItem.style.color = 'white';
    }
}