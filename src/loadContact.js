function loadContact(){
    const center = document.querySelector('#center');
    center.innerHTML = '';
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Book your table now!';
    div.style = 'width: 100%;' +
                'height: 300px;' +
                'background-color: rgb(133, 9, 36);' +
                'color: white;' +
                'text-align: center;' +
                'border: none;';
    h2.style =  'width: 45%;' +
                'padding: 3% 0;' +
                'margin: auto;';
    const phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', '../index.png');
    phoneIcon.setAttribute('width','50px');
    phoneIcon.style = 'float: left;' +
                      'clear: both;';
    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = '07496034244';
    phoneNumber.style = 'height: 50px;' +
                        'line-height: 50px;' +
                        'text-align: center;' +
                        'font-size: x-large;' + 
                        'float: right;';
    const container = document.createElement('div');
    container.style = 'width: 40%;' +
                      'height: 50px;' +
                      'margin: 20px auto;';
    container.appendChild(phoneIcon);
    container.appendChild(phoneNumber);                  
    const mailIcon = document.createElement('img');
    mailIcon.setAttribute('src', '../mail.jpg');
    mailIcon.setAttribute('width','50px');
    mailIcon.style = 'float: left;' + 
                     'clear: both;';
    const mail = document.createElement('div');
    mail.textContent = 'mralexerdei@yahoo.co.uk';
    mail.style = 'height: 50px;' +
                 'line-height: 50px;' +
                 'text-align: center;' +
                 'font-size: x-large;' + 
                 'float: right;';
    const containerMail = document.createElement('div');
    containerMail.style = 'width: 40%;' +
                          'height: 50px;' +
                          'margin: 20px auto;';
    containerMail.appendChild(mailIcon);
    containerMail.appendChild(mail);                 
    div.appendChild(h2);
    div.appendChild(container);
    div.appendChild(containerMail);
    center.appendChild(div);
}

export { loadContact }