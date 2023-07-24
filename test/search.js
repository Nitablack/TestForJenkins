module.exports = {
    '@tags': ['search'],

    before(browser){ //хук before открывает и проверяет открытие нужной страницы
        browser 
            .page.wiki() //обращаемся к pageObject
            .navigate() // эту функцию используем вместо url
            .waitForElementVisible('css selector','@welcome','Welcome title visible') //вместо элементов используем их псевдонимы
            .assert.textContains('@welcome', 'Добро пожаловать в Википедию', 'Welcome title correct'); //проверка содержимого заголовка
    },
    
    after(browser){ //хук after на закрытие браузера
        browser.end()
    },
    'Search for word': function (browser) {// ТК на первый поиск
        let word = browser.globals.searchText;//используем глобальные переменные для поиска

        browser.assert.notEmpty('.main-top-header'); //проверка из assertions на непустой заголовок

        browser
            .page.wiki() //обращаемся к pageObject
            .search(word) //вызываем функцию поиска из pageCommands по слову из глобальных переменных 
            .waitForElementVisible('css selector','@pageTitle','Page title here') //заменяем на псевдонимы элементов
            .assert.urlContains(`/wiki/${word}`)
            .assert.titleContains(`${word} — Википедия`, 'title ok')
            .assert.textContains('@pageTitle', word, `${word} title ok`);

        browser 
            .page.wiki() // берем объект страницы
            .section.topMenu //обращаемся к самому элементу меню
            .assert.textContains('@logIn','Войти')    //и используем его элементы для теста
    },    
};    

