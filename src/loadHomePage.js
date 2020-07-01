function loadMenuBar() {
    const content = document.querySelector('#content');
    const menuBar = document.createElement('div');
    menuBar.setAttribute('id','menubar');
    const center = document.createElement('div');
    center.setAttribute('id','center');
    const h1 = document.createElement('h1');
    h1.textContent = 'Alex\'s Restaurant';
    h1.setAttribute('id', 'logo');
    const menu = ['home','menu','contact'];
    const ul = document.createElement('ul');
    let li = [];
    let listItem;
    for (let i = 0; i < 3; i++){
        listItem = document.createElement('li');
        listItem.textContent = menu[i];
        listItem.setAttribute('id',menu[i]);
        listItem.style = 'display: inline;' + 
                         'margin-left: 10%;' +
                         'font-size: large;' +
                         'padding: 5%;' +
                         'padding-bottom: 12%;' +
                         'color: darkred;';
        ul.appendChild(listItem);
    }
    content.style = 'width: 100%;' +
                    'border: 2px solid #3b3b3b3;';
    menuBar.style = 'margin: 1% 0';
    h1.style =  'margin-left: 10%;' + 
                'display: inline;' + 
                'color: darkred;';
    ul.style =  'list-style-type: none;' +
                'margin: 0;' +
                'padding: 0;' +
                'margin-right: 17.1%;' +
                'margin-top: 0.6%;' +
                'float: right;' + 
                'clear: left;';
    menuBar.appendChild(h1);
    menuBar.appendChild(ul);
    content.appendChild(menuBar);
    content.appendChild(center);
}

function loadHomePage() {
    const center = document.querySelector('#center');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('div');
    const img = document.createElement('img');
    const footer = document.createElement('div');
    p.textContent = 'Come and indulge yourself with our delicious food!';
    button.textContent = 'BOOK NOW!';
    button.setAttribute('id','button');
    img.setAttribute('src','../restaurant-hero.jpg/');
    img.setAttribute('alt','a nice dish on the table');
    div.style = 'width: 100%;' +
                'height: 180px;' +
                'background-color: rgb(133,9,36);' +
                'color: white;' +
                'text-align: center;' +
                'border: none;';
    p.style =   'width: 45%;' +
                'padding: 3% 0;' +
                'margin: auto;' +
                'font-size: large;' +
                'text-align: center;';
    button.style = 'width: 150px;' +
                   'height: 50px;' +
                   'line-height: 50px;' +
                   'background-color: rgb(133,9,36);' +
                   'color: white;' +
                   'text-align: center;' +
                   'font-size: large;' +
                   'border: 2px solid white;' +
                   'margin: auto;';
    img.style = 'display: block;' +
                'width: 100%;';
    footer.style = 'width: 100%;' +
                   'height: 100px;' +
                   'background-color: rgb(133,9,36);';
    center.innerHTML = '';
    center.style =  'width: 80%;' +
                    'margin: auto;' + 
                    'border: 1px solid #1f1f1f;';
    div.appendChild(p);
    div.appendChild(button);
    center.appendChild(div);
    center.appendChild(img);
    center.appendChild(footer);
}

export { loadMenuBar, loadHomePage };