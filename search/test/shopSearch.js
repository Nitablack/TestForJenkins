module.exports = {
    '@tags': ['search'],
    
    before(browser){ //хук before открывает и проверяет открытие нужной страницы
        browser 
            .page.shop() // обращаемся к pageObject
            .navigate()// эту функцию используем вместо url
            .waitForElementVisible('css selector','@welcome','Заголовок загружен') //вместо элементов используем их псевдонимы
            .assert.textContains('@welcome', 'Каталог', 'Каталог найден'); //проверка содержимого заголовка по его псевдониму
    },
    after(browser){ //хук after на закрытие браузера
        browser.end()
    },

    'Search for word': function (browser) { // ТК на поиск в виде функции
        let word = browser.globals.searchText; //используем глобальные переменные для поиска

        browser.page.shop().assert.notEmpty('@cardBody');//проверка из assertions на непустой заголовок

        browser 
            .page.shop() //обращаемся к pageObject    
            .search(word) // вызываем функцию поиска из pageCommands по слову из глобальных переменных            
            .waitForElementVisible('css selector','@welcome','Заголовок загружен')
            .waitForElementVisible('css selector','@cardBody','Результат поиска загружен')
            .assert.urlContains(`search=${word}`)
            .assert.titleContains('TestGym', 'title ok')
            .assert.textContains('@cardBody', word, `${word} найден`);
        browser 
            .page.shop() // берем объект страницы
            .section.topMenu //обращаемся к самому элементу меню
            .assert.textContains('@logIn', 'Войти');//и используем его элементы для теста    
    }
};


