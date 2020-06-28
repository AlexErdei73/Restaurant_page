function loadMenuBar() {
    const content = document.querySelector('#content');
    const menuBar = document.createElement('div');
    menuBar.setAttribute('id','menubar');
    const center = document.createElement('div');
    center.setAttribute('id','center');
    const h1 = document.createElement('h1');
    h1.textContent = 'Alex\'s Restaurant';
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
                         'font-size: large;';
        ul.appendChild(listItem);
    }
    content.style = 'width: 100%;' +
                    'border: 2px solid #3b3b3b;';
    menuBar.style = 'margin: 1% 0';
    h1.style =  'margin-left: 10%;' + 
                'display: inline;';
    ul.style =  'list-style-type: none;' +
                'margin: 0;' +
                'padding: 0;' +
                'margin-right: 14%;' +
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
    const img = document.createElement('img');
    p.textContent = 'Come and indulge yourself with our delicious food!';
    img.setAttribute('src','../restaurant-hero.jpg/');
    img.setAttribute('alt','a nice dish on the table');
    div.style = 'width: 80%;' +
                'margin: auto;' +
                'background-color: #1f1f1f;' +
                'color: white;' +
                'text-align: center;' +
                'border: none;';
    p.style =   'width: 45%;' +
                'padding: 3% 0;' +
                'margin: auto;' +
                'font-size: large;';
    img.style = 'display: block;' +
                'width: 80%;' +
                'margin: 10% auto;' +
                'margin-top: 0;';
    center.innerHTML = '';
    div.appendChild(p);
    center.appendChild(div);
    center.appendChild(img);
}

export { loadMenuBar, loadHomePage };