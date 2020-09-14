function loadMenuBar() {
    const content = document.querySelector('#content');
    const menuBar = document.createElement('div');
    menuBar.setAttribute('id','menubar');
    const center = document.createElement('div');
    center.setAttribute('id','center');
    const logo = document.createElement('button');
    logo.textContent = 'Alex\'s Restaurant';
    logo.setAttribute('id', 'logo');
    const menu = ['home','menu','contact'];
    const ul = document.createElement('ul');
    let li = [];
    let listItem;
    let button;
    for (let i = 0; i < 3; i++){
        listItem = document.createElement('li');
        button = document.createElement('button');
        button.textContent = menu[i];
        listItem.appendChild(button);
        button.setAttribute('id',menu[i]);
        listItem.style = 'display: inline';                     
        button.style = 'display: inline;' + 
                       'color: darkred;' +
                       'width: 33%;' +
                       'height: 2.7em;' +
                       'font-size: large;' +
                       'user-select: none;' +
                       'text-align: center;' +
                       'float: left';
        ul.appendChild(listItem);
    }
    content.style = 'width: 100%;' +
                    'border: 2px solid #3b3b3b3;';
    menuBar.style = 'margin: 1% 0';
    logo.style =  'margin-left: 10%;' + 
                  'display: inline;' + 
                  'color: darkred;' +
                  'user-select: none' +
                  'background: white;' +
                  'font-size: 2em';
    ul.style =  'list-style-type: none;' +
                'margin: 0;' +
                'padding: 0;' +
                'width: 20%;' +
                'margin-right: 9.7%;' +
                'margin-top: 0.6%;' +
                'float: right;' + 
                'clear: left;';
    menuBar.appendChild(logo);
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
    img.setAttribute('src','./hero.jpg');
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