/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage.js */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu.js */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadContact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContact.js */ \"./src/loadContact.js\");\n\n\n\n\nObject(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadMenuBar\"])();\nObject(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\n\nconst li = document.querySelectorAll('li');\nconst h1 = document.querySelector('h1');\nlet button = document.querySelector('#button');\nconsole.log(button);\nli.forEach(function(item) {\n    item.addEventListener('click', onClick);\n});\nh1.addEventListener('click', onClick);\nbutton.addEventListener('click',onClick);\nbutton.addEventListener('mouseenter',onMouseEnter);\nbutton.addEventListener('mouseleave',onMouseLeave);\n\nfunction onClick(e){\n    const li = e.target;\n    styleMenu(li);\n    switch (li.id) {\n        case 'logo':\n            Object(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\n            styleButton();\n            break;\n        case 'home': \n            Object(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\n            button = document.querySelector('#button');\n            styleButton();\n            break;\n        case 'menu':\n            Object(_loadMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"loadMenu\"])();\n            break;\n        case 'contact':\n            Object(_loadContact_js__WEBPACK_IMPORTED_MODULE_2__[\"loadContact\"])();\n            break;\n        case 'button':\n            Object(_loadContact_js__WEBPACK_IMPORTED_MODULE_2__[\"loadContact\"])();\n            break;\n    }\n}\n\nfunction onMouseEnter(e) {\n    const button = e.target;\n    button.style = 'width: 150px;' +\n                    'height: 50px;' +\n                    'line-height: 50px;' +\n                    'background-color: white;' +\n                    'color: darkred;' +\n                    'text-align: center;' +\n                    'font-size: large;' +\n                    'border: 2px solid white;' +\n                    'margin: auto;';  \n}\n\nfunction onMouseLeave(e) {\n    const button = e.target;\n    button.style = 'width: 150px;' +\n                    'height: 50px;' +\n                    'line-height: 50px;' +\n                    'background-color: rgb(133,9,36);' +\n                    'color: white;' +\n                    'text-align: center;' +\n                    'font-size: large;' +\n                    'border: 2px solid white;' +\n                    'margin: auto;';\n}\n\nfunction styleMenu(listItem) {\n    const li = document.querySelectorAll('li');\n    li.forEach(function(item){\n        item.style.background = 'white';\n        item.style.color = 'darkred';\n    })\n    if (listItem.id != 'logo') {\n        listItem.style.background = 'rgb(133, 9, 36)';\n        listItem.style.color = 'white';\n    }\n}\n\nfunction styleButton() {\n    button = document.querySelector('#button');\n    button.addEventListener('click',onClick);\n    button.addEventListener('mouseenter',onMouseEnter);\n    button.addEventListener('mouseleave',onMouseLeave);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/*! exports provided: loadContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadContact\", function() { return loadContact; });\nfunction loadContact(){\n    const center = document.querySelector('#center');\n    center.innerHTML = '';\n    const div = document.createElement('div');\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Book your table now!';\n    div.style = 'width: 100%;' +\n                'height: 300px;' +\n                'background-color: rgb(133, 9, 36);' +\n                'color: white;' +\n                'text-align: center;' +\n                'border: none;';\n    h2.style =  'width: 45%;' +\n                'padding: 3% 0;' +\n                'margin: auto;';\n    const phoneIcon = document.createElement('img');\n    phoneIcon.setAttribute('src', './index.png');\n    phoneIcon.setAttribute('width','50px');\n    phoneIcon.style = 'float: left;' +\n                      'clear: both;';\n    const phoneNumber = document.createElement('div');\n    phoneNumber.textContent = '07496034244';\n    phoneNumber.style = 'height: 50px;' +\n                        'line-height: 50px;' +\n                        'text-align: center;' +\n                        'font-size: x-large;' + \n                        'float: right;';\n    const container = document.createElement('div');\n    container.style = 'width: 40%;' +\n                      'height: 50px;' +\n                      'margin: 20px auto;';\n    container.appendChild(phoneIcon);\n    container.appendChild(phoneNumber);                  \n    const mailIcon = document.createElement('img');\n    mailIcon.setAttribute('src', './mail.jpg');\n    mailIcon.setAttribute('width','50px');\n    mailIcon.style = 'float: left;' + \n                     'clear: both;';\n    const mail = document.createElement('div');\n    mail.textContent = 'mralexerdei@yahoo.co.uk';\n    mail.style = 'height: 50px;' +\n                 'line-height: 50px;' +\n                 'text-align: center;' +\n                 'font-size: x-large;' + \n                 'float: right;';\n    const containerMail = document.createElement('div');\n    containerMail.style = 'width: 40%;' +\n                          'height: 50px;' +\n                          'margin: 20px auto;';\n    const img = document.createElement('img');\n    img.setAttribute('src','./dessert.jpeg');\n    img.setAttribute('alt','Nice dessert');\n    img.style = 'display: block;' +\n                'width: 100%;';\n    containerMail.appendChild(mailIcon);\n    containerMail.appendChild(mail);                 \n    div.appendChild(h2);\n    div.appendChild(container);\n    div.appendChild(containerMail);\n    center.appendChild(div);\n    center.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack:///./src/loadContact.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/*! exports provided: loadMenuBar, loadHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMenuBar\", function() { return loadMenuBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\nfunction loadMenuBar() {\n    const content = document.querySelector('#content');\n    const menuBar = document.createElement('div');\n    menuBar.setAttribute('id','menubar');\n    const center = document.createElement('div');\n    center.setAttribute('id','center');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Alex\\'s Restaurant';\n    h1.setAttribute('id', 'logo');\n    const menu = ['home','menu','contact'];\n    const ul = document.createElement('ul');\n    let li = [];\n    let listItem;\n    for (let i = 0; i < 3; i++){\n        listItem = document.createElement('li');\n        listItem.textContent = menu[i];\n        listItem.setAttribute('id',menu[i]);\n        listItem.style = 'display: inline;' + \n                         'margin-left: 10%;' +\n                         'font-size: large;' +\n                         'padding: 5%;' +\n                         'padding-bottom: 12%;' +\n                         'color: darkred;';\n        ul.appendChild(listItem);\n    }\n    content.style = 'width: 100%;' +\n                    'border: 2px solid #3b3b3b3;';\n    menuBar.style = 'margin: 1% 0';\n    h1.style =  'margin-left: 10%;' + \n                'display: inline;' + \n                'color: darkred;';\n    ul.style =  'list-style-type: none;' +\n                'margin: 0;' +\n                'padding: 0;' +\n                'margin-right: 17.1%;' +\n                'margin-top: 0.6%;' +\n                'float: right;' + \n                'clear: left;';\n    menuBar.appendChild(h1);\n    menuBar.appendChild(ul);\n    content.appendChild(menuBar);\n    content.appendChild(center);\n}\n\nfunction loadHomePage() {\n    const center = document.querySelector('#center');\n    const div = document.createElement('div');\n    const p = document.createElement('p');\n    const button = document.createElement('div');\n    const img = document.createElement('img');\n    const footer = document.createElement('div');\n    p.textContent = 'Come and indulge yourself with our delicious food!';\n    button.textContent = 'BOOK NOW!';\n    button.setAttribute('id','button');\n    img.setAttribute('src','./restaurant-hero.jpg/');\n    img.setAttribute('alt','a nice dish on the table');\n    div.style = 'width: 100%;' +\n                'height: 180px;' +\n                'background-color: rgb(133,9,36);' +\n                'color: white;' +\n                'text-align: center;' +\n                'border: none;';\n    p.style =   'width: 45%;' +\n                'padding: 3% 0;' +\n                'margin: auto;' +\n                'font-size: large;' +\n                'text-align: center;';\n    button.style = 'width: 150px;' +\n                   'height: 50px;' +\n                   'line-height: 50px;' +\n                   'background-color: rgb(133,9,36);' +\n                   'color: white;' +\n                   'text-align: center;' +\n                   'font-size: large;' +\n                   'border: 2px solid white;' +\n                   'margin: auto;';\n    img.style = 'display: block;' +\n                'width: 100%;';\n    footer.style = 'width: 100%;' +\n                   'height: 100px;' +\n                   'background-color: rgb(133,9,36);';\n    center.innerHTML = '';\n    center.style =  'width: 80%;' +\n                    'margin: auto;' + \n                    'border: 1px solid #1f1f1f;';\n    div.appendChild(p);\n    div.appendChild(button);\n    center.appendChild(div);\n    center.appendChild(img);\n    center.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack:///./src/loadHomePage.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/*! exports provided: loadMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMenu\", function() { return loadMenu; });\nfunction loadMenu(){\n    let starters = [];\n\n    const soup = foodItem('soup', '5.95');\n    soup.mainLine = 'Soup of the day';\n    soup.description = 'Crusty bread & butter';\n    starters.push(soup);\n\n    const club = foodItem('club', '13.50');\n    club.mainLine = 'The Club';\n    club.description = 'Classic triple-decker stack of grilled chicken, streaky bacon,' + \n                       'egg, tomato and crisp lettuce with fries';\n    starters.push(club);\n\n    const skewers = foodItem('skewers', '7.00');\n    skewers.mainLine = 'Karaage chicken skewers';\n    skewers.description = 'Lime and crème fraîche slaw, Korean BBQ sauce';\n    starters.push(skewers);\n\n    const veggie = foodItem('veggie', '12.95');\n    veggie.mainLine = 'The veggie club';\n    veggie.description = 'A three-decker feast layered with sweet roasted peppers,' + \n                         'grilled halloumi, egg, tomato and crisp lettuce with fries';\n    starters.push(veggie);\n\n    const calamari = foodItem('calamari', '6.50');\n    calamari.mainLine = 'Crispy Calamari';\n    calamari.description = 'Garlic and parsley crème fraîche';\n    starters.push(calamari);\n\n    const fishFinger = foodItem('fishFinger', '10.00');\n    fishFinger.mainLine = 'Hand battered fish finger';\n    fishFinger.description = 'Served on ciabatta with tartare sauce';\n    starters.push(fishFinger);\n\n    const pepper = foodItem('pepper', '6.75');\n    pepper.mainLine = 'Soup of the day';\n    pepper.description = 'Crusty bread & butter';\n    starters.push(pepper);\n\n    const falafel = foodItem('falafel', '8.50');\n    falafel.mainLine = 'Sweet potato falafel wrap';\n    falafel.description = '';\n    starters.push(falafel);\n\n    const cheese = foodItem('cheese', '6.50');\n    cheese.mainLine = 'Mac ‘n’ cheese bites';\n    cheese.description = 'Parsley crème fraîche';\n    starters.push(cheese);\n\n    const pickle = foodItem('pickle', '6.50');\n    pickle.mainLine = 'Red Leicester & pickle';\n    pickle.description = '';\n    starters.push(pickle);\n    \n    const tuna = foodItem('tuna', '7.50');\n    tuna.mainLine = 'Classic tuna mayo';\n    tuna.description = '';\n    starters.push(tuna);\n\n    const ham = foodItem('ham', '6.50');\n    ham.mainLine = 'Roasted ham, tomato and rocket';\n    ham.description = '';\n    starters.push(ham);\n\n    let pastas = [];\n\n    const margherita = foodItem('margherita', '10.95');\n    margherita.mainLine = 'Margherita';\n    margherita.description = 'Classic mozzarella and tomato sauce';\n    pastas.push(margherita);\n\n    const linguine = foodItem('linguine', '15.50');\n    linguine.mainLine = 'Lincolnshire sausage linguine';\n    linguine.description = 'Plum tomato sauce';\n    pastas.push(linguine);\n\n    const topping = foodItem('topping', '1.50 each');\n    topping.mainLine = 'Top it off!';\n    topping.description = 'Why not add additional toppings to customise your ' +\n                          'pizza the way you like it. Pick from the list below, all ' +\n                          'toppings';\n    pastas.push(topping);\n\n    const noodle = foodItem('noodle', '16.00');\n    noodle.mainLine = 'Singapore noodles';\n    noodle.description = 'Marinated chicken skewers, panggang sauce';\n    pastas.push(noodle);\n\n    const list = foodItem('list', '');\n    list.mainLine = 'Chorizo | ham | pineapple | field mushroom | prawns |' +\n                    'roasted peppers | jalapeños | extra cheese | anchovies';\n    list.description = '';\n    pastas.push(list);\n\n    let salads = [];\n\n    const cesar = foodItem('cesar', '10.95');\n    cesar.mainLine = 'Classic Caesar salad';\n    cesar.description = 'Baby gem lettuce, parmesan, croutons,' +\n                        'anchovies and Caesar dressing';\n    salads.push(cesar);\n\n    const addSkewer = foodItem('addSkewer', '4.00');\n    addSkewer.mainLine = 'Add panggang chicken skewer';\n    addSkewer.description = '';\n    salads.push(addSkewer);\n\n    const addHalloumi = foodItem('addHalloumi', '4.00');\n    addHalloumi.mainLine = 'Add grilled halloumi';\n    addHalloumi.description = '';\n    salads.push(addHalloumi);\n\n    let main = [];\n\n    const fish = foodItem('fish', '15.95');\n    fish.mainLine = 'Classic fish and chips ';\n    fish.description = 'Traditional batter, mushy peas, creamy tartare sauce' +\n                       'and a big portion of chips';\n    main.push(fish);\n\n    const dhansak = foodItem('dhansak', '14.00');\n    dhansak.mainLine = 'Butternut gobi dhansak ';\n    dhansak.description = 'White and wild rice, chapati and mango chutney';\n    main.push(dhansak);\n\n    const scampi = foodItem('scampi', '17.50');\n    scampi.mainLine = 'Scottish scampi and fries';\n    scampi.description = 'Apple and avocado salad';\n    main.push(scampi);\n\n    const makhani = foodItem('makhani', '15.50');\n    makhani.mainLine = 'Chicken murgh makhani';\n    makhani.description = 'White and wild rice, chapati and mango chutney / ' +\n                          'Add naan bread £2.50    Add onion & kale bhaji £2.50';\n    main.push(makhani);\n\n    const risotto = foodItem('risotto', '15.50');\n    risotto.mainLine = 'Roasted mushroom risotto';\n    risotto.description = 'Finished with Italian style hard cheese / ' +\n                          'Panggang chicken skewer, grilled halloumi  £4.00 each';\n    main.push(risotto);\n\n    const burger = foodItem('burger', '14.50');\n    burger.mainLine = 'Classic beef burger';\n    burger.description = '8oz beef burger, tomato salsa and coleslaw';\n    main.push(burger);\n\n    const grill = foodItem('grill', '24.00');\n    grill.mainLine = 'Mixed grill ';\n    grill.description = 'Lamb chop, pork sausage, gammon steak,' + \n                        '4 oz rump steak, egg, chips and peas / ' + \n                        'Add chicken  £2.00';\n    main.push(grill);\n\n    const chicken = foodItem('chicken', '14.50');\n    chicken.mainLine = 'Cajun buttermilk chicken';\n    chicken.description = 'Guacamole and tomato salsa';\n    main.push(chicken);\n\n    const salmon = foodItem('salmon', '18.50');\n    salmon.mainLine = 'Grilled salmon';\n    salmon.description = 'New potatoes, broccoli and roasted tomato';\n    main.push(salmon);\n\n    const vegiBurger = foodItem('vegiBurger', '14.50');\n    vegiBurger.mainLine = 'Moving mountain vegan cheeseburger';\n    vegiBurger.description = 'Guacamole and tomato salsa';\n    main.push(vegiBurger);\n\n    let desserts = [];\n\n    const tart = foodItem('tart', '6.50');\n    tart.mainLine = 'Chocolate and orange tart';\n    tart.description = 'Raspberry sorbet';\n    desserts.push(tart);\n\n    const brownie = foodItem('brownie', '6.50');\n    brownie.mainLine = 'Chocolate brownie';\n    brownie.description = 'Chocolate ice cream';\n    desserts.push(brownie);\n\n    const sponge = foodItem('sponge', '6.50');\n    sponge.mainLine = 'Salted caramel sponge roulade';\n    sponge.description = 'Caramel sauce, vanilla ice cream';\n    desserts.push(sponge);\n    \n    const iceCream = foodItem('iceCream', '4.50');\n    iceCream.mainLine = 'Selection of Great British ice creams';\n    iceCream.description = '';\n    desserts.push(iceCream);\n\n    const center = document.querySelector('#center');\n    center.innerHTML = '';\n    const divTitle = document.createElement('div');\n    const p = document.createElement('p');\n    p.textContent = 'Food to make you happy';\n    divTitle.style = 'width: 100%;' +\n                     'background-color: rgb(133, 9, 36);' +\n                     'color: white;' +\n                     'text-align: center;' +\n                     'border: none;';\n    p.style =   'width: 45%;' +\n                'padding: 3% 0;' +\n                'margin: auto;' +\n                'font-size: large;';\n    center.style =  'width: 80%;' +\n                    'margin: auto;' + \n                    'border: 1px solid darkred;';\n    divTitle.appendChild(p);\n    center.appendChild(divTitle);\n    populateMenu(starters, 'Starters & sandwiches');\n    populateMenu(pastas, 'Pizza & Pasta');\n    populateMenu(salads, 'Salad');\n    populateMenu(main, 'Everyone’s favourites');\n    populateMenu(desserts, 'Finish with a treat');\n}\n\nfunction foodItem(name, price) {\n    let mainLine = '';\n    let description = '';\n    return { name, price, mainLine, description} \n}\n\nfunction populateMenu(foodItems, title){\n    let h3;\n    let h3Price;\n    let para;\n    let divItem;\n    const divLeft = document.createElement('div');\n    const divRight = document.createElement('div');\n    foodItems.forEach((item, index) => {\n        h3 = document.createElement('h3');\n        h3Price = document.createElement('h3');\n        h3.textContent = item.mainLine;\n        h3Price.textContent = '£' + item.price;\n        h3.style = 'margin: none;' + \n                   'padding: none;' +\n                   'float: left;';\n        h3Price.style = 'float: right;';\n        para = document.createElement('p');\n        para.textContent = item.description;\n        para.style = 'margin: none;' +\n                     'padding: none;' +\n                     'font-size: small;' + \n                     'clear: both;';\n        if (index % 2) {\n            divItem = divRight;\n        } else {\n            divItem = divLeft;\n        }\n        divItem.appendChild(h3);\n        if (item.price != '') {\n            divItem.appendChild(h3Price);\n        }\n        divItem.appendChild(para);\n    });\n    divLeft.style =  'width: 44.5%;' +\n                     'margin-right: 2%;' +\n                     'margin-left: 3%;' +\n                     'display: inline-block;';\n    divRight.style = 'width: 44.5%;' +\n                     'margin-right: 3%;' +\n                     'margin-left: 2%;' +\n                     'display: inline-block;' +\n                     'float: right;';\n    showTitle(title);\n    center.appendChild(divLeft);\n    center.appendChild(divRight);\n}\n\nfunction showTitle(title){\n    const divDecor1 = document.createElement('div');\n    const divDecor2 = document.createElement('div');\n    const h2 = document.createElement('h2');\n    h2.textContent = title;\n    h2.style = 'display: block;' +\n               'width: 40%;' +\n               'margin: 3% auto;' +\n               'text-align: center;' +\n               'color: darkred;';\n    divDecor1.style = 'width: 90%;' +\n                      'margin: 1px auto;' +\n                      'border: 1px solid darkred;';\n    divDecor2.style = 'width: 90%;' +\n                      'margin: 1px auto;' +\n                      'border: 1px solid darkred;';\n    center.appendChild(divDecor1);\n    center.appendChild(h2);\n    center.appendChild(divDecor2);\n}\n\n\n\n//# sourceURL=webpack:///./src/loadMenu.js?");

/***/ })

/******/ });