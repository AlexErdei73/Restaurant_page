function loadMenu(){
    let starters = [];

    const soup = foodItem('soup', '5.95');
    soup.mainLine = 'Soup of the day';
    soup.description = 'Crusty bread & butter';
    starters.push(soup);

    const club = foodItem('club', '13.50');
    club.mainLine = 'The Club';
    club.description = 'Classic triple-decker stack of grilled chicken, streaky bacon,' + 
                       'egg, tomato and crisp lettuce with fries';
    starters.push(club);

    const skewers = foodItem('skewers', '7.00');
    skewers.mainLine = 'Karaage chicken skewers';
    skewers.description = 'Lime and crème fraîche slaw, Korean BBQ sauce';
    starters.push(skewers);

    const veggie = foodItem('veggie', '12.95');
    veggie.mainLine = 'The veggie club';
    veggie.description = 'A three-decker feast layered with sweet roasted peppers,' + 
                         'grilled halloumi, egg, tomato and crisp lettuce with fries';
    starters.push(veggie);

    const calamari = foodItem('calamari', '6.50');
    calamari.mainLine = 'Crispy Calamari';
    calamari.description = 'Garlic and parsley crème fraîche';
    starters.push(calamari);

    const fishFinger = foodItem('fishFinger', '10.00');
    fishFinger.mainLine = 'Hand battered fish finger';
    fishFinger.description = 'Served on ciabatta with tartare sauce';
    starters.push(fishFinger);

    const pepper = foodItem('pepper', '6.75');
    pepper.mainLine = 'Soup of the day';
    pepper.description = 'Crusty bread & butter';
    starters.push(pepper);

    const falafel = foodItem('falafel', '8.50');
    falafel.mainLine = 'Sweet potato falafel wrap';
    falafel.description = '';
    starters.push(falafel);

    const cheese = foodItem('cheese', '6.50');
    cheese.mainLine = 'Mac ‘n’ cheese bites';
    cheese.description = 'Parsley crème fraîche';
    starters.push(cheese);

    const pickle = foodItem('pickle', '6.50');
    pickle.mainLine = 'Red Leicester & pickle';
    pickle.description = '';
    starters.push(pickle);
    
    const tuna = foodItem('tuna', '7.50');
    tuna.mainLine = 'Classic tuna mayo';
    tuna.description = '';
    starters.push(tuna);

    const ham = foodItem('ham', '6.50');
    ham.mainLine = 'Roasted ham, tomato and rocket';
    ham.description = '';
    starters.push(ham);

    let pastas = [];

    const margherita = foodItem('margherita', '10.95');
    margherita.mainLine = 'Margherita';
    margherita.description = 'Classic mozzarella and tomato sauce';
    pastas.push(margherita);

    const linguine = foodItem('linguine', '15.50');
    linguine.mainLine = 'Lincolnshire sausage linguine';
    linguine.description = 'Plum tomato sauce';
    pastas.push(linguine);

    const topping = foodItem('topping', '1.50 each');
    topping.mainLine = 'Top it off!';
    topping.description = 'Why not add additional toppings to customise your ' +
                          'pizza the way you like it. Pick from the list below, all ' +
                          'toppings';
    pastas.push(topping);

    const noodle = foodItem('noodle', '16.00');
    noodle.mainLine = 'Singapore noodles';
    noodle.description = 'Marinated chicken skewers, panggang sauce';
    pastas.push(noodle);

    const list = foodItem('list', '');
    list.mainLine = 'Chorizo | ham | pineapple | field mushroom | prawns |' +
                    'roasted peppers | jalapeños | extra cheese | anchovies';
    list.description = '';
    pastas.push(list);

    let salads = [];

    const cesar = foodItem('cesar', '10.95');
    cesar.mainLine = 'Classic Caesar salad';
    cesar.description = 'Baby gem lettuce, parmesan, croutons,' +
                        'anchovies and Caesar dressing';
    salads.push(cesar);

    const addSkewer = foodItem('addSkewer', '4.00');
    addSkewer.mainLine = 'Add panggang chicken skewer';
    addSkewer.description = '';
    salads.push(addSkewer);

    const addHalloumi = foodItem('addHalloumi', '4.00');
    addHalloumi.mainLine = 'Add grilled halloumi';
    addHalloumi.description = '';
    salads.push(addHalloumi);

    let main = [];

    const fish = foodItem('fish', '15.95');
    fish.mainLine = 'Classic fish and chips ';
    fish.description = 'Traditional batter, mushy peas, creamy tartare sauce' +
                       'and a big portion of chips';
    main.push(fish);

    const dhansak = foodItem('dhansak', '14.00');
    dhansak.mainLine = 'Butternut gobi dhansak ';
    dhansak.description = 'White and wild rice, chapati and mango chutney';
    main.push(dhansak);

    const scampi = foodItem('scampi', '17.50');
    scampi.mainLine = 'Scottish scampi and fries';
    scampi.description = 'Apple and avocado salad';
    main.push(scampi);

    const makhani = foodItem('makhani', '15.50');
    makhani.mainLine = 'Chicken murgh makhani';
    makhani.description = 'White and wild rice, chapati and mango chutney / ' +
                          'Add naan bread £2.50    Add onion & kale bhaji £2.50';
    main.push(makhani);

    const risotto = foodItem('risotto', '15.50');
    risotto.mainLine = 'Roasted mushroom risotto';
    risotto.description = 'Finished with Italian style hard cheese / ' +
                          'Panggang chicken skewer, grilled halloumi  £4.00 each';
    main.push(risotto);

    const burger = foodItem('burger', '14.50');
    burger.mainLine = 'Classic beef burger';
    burger.description = '8oz beef burger, tomato salsa and coleslaw';
    main.push(burger);

    const grill = foodItem('grill', '24.00');
    grill.mainLine = 'Mixed grill ';
    grill.description = 'Lamb chop, pork sausage, gammon steak,' + 
                        '4 oz rump steak, egg, chips and peas / ' + 
                        'Add chicken  £2.00';
    main.push(grill);

    const chicken = foodItem('chicken', '14.50');
    chicken.mainLine = 'Cajun buttermilk chicken';
    chicken.description = 'Guacamole and tomato salsa';
    main.push(chicken);

    const salmon = foodItem('salmon', '18.50');
    salmon.mainLine = 'Grilled salmon';
    salmon.description = 'New potatoes, broccoli and roasted tomato';
    main.push(salmon);

    const vegiBurger = foodItem('vegiBurger', '14.50');
    vegiBurger.mainLine = 'Moving mountain vegan cheeseburger';
    vegiBurger.description = 'Guacamole and tomato salsa';
    main.push(vegiBurger);

    let desserts = [];

    const tart = foodItem('tart', '6.50');
    tart.mainLine = 'Chocolate and orange tart';
    tart.description = 'Raspberry sorbet';
    desserts.push(tart);

    const brownie = foodItem('brownie', '6.50');
    brownie.mainLine = 'Chocolate brownie';
    brownie.description = 'Chocolate ice cream';
    desserts.push(brownie);

    const sponge = foodItem('sponge', '6.50');
    sponge.mainLine = 'Salted caramel sponge roulade';
    sponge.description = 'Caramel sauce, vanilla ice cream';
    desserts.push(sponge);
    
    const iceCream = foodItem('iceCream', '4.50');
    iceCream.mainLine = 'Selection of Great British ice creams';
    iceCream.description = '';
    desserts.push(iceCream);

    const center = document.querySelector('#center');
    center.innerHTML = '';
    const divTitle = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'Food to make you happy';
    divTitle.style = 'width: 100%;' +
                     'background-color: rgb(133, 9, 36);' +
                     'color: white;' +
                     'text-align: center;' +
                     'border: none;';
    p.style =   'width: 45%;' +
                'padding: 3% 0;' +
                'margin: auto;' +
                'font-size: large;';
    center.style =  'width: 80%;' +
                    'margin: auto;' + 
                    'border: 1px solid darkred;';
    divTitle.appendChild(p);
    center.appendChild(divTitle);
    populateMenu(starters, 'Starters & sandwiches');
    populateMenu(pastas, 'Pizza & Pasta');
    populateMenu(salads, 'Salad');
    populateMenu(main, 'Everyone’s favourites');
    populateMenu(desserts, 'Finish with a treat');
}

function foodItem(name, price) {
    let mainLine = '';
    let description = '';
    return { name, price, mainLine, description} 
}

function populateMenu(foodItems, title){
    let h3;
    let h3Price;
    let para;
    let divItem;
    const divLeft = document.createElement('div');
    const divRight = document.createElement('div');
    foodItems.forEach((item, index) => {
        h3 = document.createElement('h3');
        h3Price = document.createElement('h3');
        h3.textContent = item.mainLine;
        h3Price.textContent = '£' + item.price;
        h3.style = 'margin: none;' + 
                   'padding: none;' +
                   'float: left;';
        h3Price.style = 'float: right;';
        para = document.createElement('p');
        para.textContent = item.description;
        para.style = 'margin: none;' +
                     'padding: none;' +
                     'font-size: small;' + 
                     'clear: both;';
        if (index % 2) {
            divItem = divRight;
        } else {
            divItem = divLeft;
        }
        divItem.appendChild(h3);
        if (item.price != '') {
            divItem.appendChild(h3Price);
        }
        divItem.appendChild(para);
    });
    divLeft.style =  'width: 44.5%;' +
                     'margin-right: 2%;' +
                     'margin-left: 3%;' +
                     'display: inline-block;';
    divRight.style = 'width: 44.5%;' +
                     'margin-right: 3%;' +
                     'margin-left: 2%;' +
                     'display: inline-block;' +
                     'float: right;';
    showTitle(title);
    center.appendChild(divLeft);
    center.appendChild(divRight);
}

function showTitle(title){
    const divDecor1 = document.createElement('div');
    const divDecor2 = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    h2.style = 'display: block;' +
               'width: 40%;' +
               'margin: 3% auto;' +
               'text-align: center;' +
               'color: darkred;';
    divDecor1.style = 'width: 90%;' +
                      'margin: 1px auto;' +
                      'border: 1px solid darkred;';
    divDecor2.style = 'width: 90%;' +
                      'margin: 1px auto;' +
                      'border: 1px solid darkred;';
    center.appendChild(divDecor1);
    center.appendChild(h2);
    center.appendChild(divDecor2);
}

export { loadMenu }