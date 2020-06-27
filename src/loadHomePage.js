function loadHomePage() {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    h1.textContent = 'Alex\'s Restaurant';
    p.textContent = 'Come and indulge yourself with our delicious food!';
    img.setAttribute('src','../restaurant-hero.jpg/');
    img.setAttribute('alt','a nice dish on the table');
    content.style = 'width: 100%;' +
                    'border: 2px solid #3b3b3b;';
    h1.style =  'margin-left: 10%';
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
    content.appendChild(h1);
    div.appendChild(p);
    content.appendChild(div);
    content.appendChild(img);
}

export { loadHomePage };