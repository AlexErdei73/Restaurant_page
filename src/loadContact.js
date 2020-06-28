function loadContact(){
    const center = document.querySelector('#center');
    center.innerHTML = '';
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'This is the contact!';
    div.style = 'border: 2px solid #3b3b3b';
    div.appendChild(p);
    center.appendChild(div);
}

export { loadContact }