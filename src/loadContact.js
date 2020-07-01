function loadContact(){
    const center = document.querySelector('#center');
    center.innerHTML = '';
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'This is the contact!';
    div.style = 'width: 100%;' +
                'background-color: #1f1f1f;' +
                'color: white;' +
                'text-align: center;' +
                'border: none;';
    p.style =   'width: 45%;' +
                'padding: 3% 0;' +
                'margin: auto;' +
                'font-size: large;';
    div.appendChild(p);
    center.appendChild(div);
}

export { loadContact }