module.exports = {
    before(browser){ //хук before открывает и проверяет открытие нужной страницы
        browser 
            .page.shop() //ссылка на page
            .navigate()//переход на адрес сайта
            .waitForElementVisible('@welcome','Заголовок загружен') //проверка отображения заголовка
            .assert.textContains('@welcome', 'Каталог', 'Каталог найден'); //проверка содержимого заголовка
    },
    after(browser){ //хук after на закрытие браузера
        browser.end()
    },

    'Search for X': function (browser) { // первый ТК на первый поиск
        browser 
            .page.shop() //ссылка на page    
            .search('X') // ввод значения в поисковую строку и нажатие кнопки ENTER            
            .waitForElementVisible('@welcome','Заголовок загружен')
            .waitForElementVisible('@cardBody','Результат поиска загружен')
            .assert.urlContains('search=X')
            .assert.titleContains('TestGym', 'title ok')
            .assert.textContains('@cardBody', 'X', 'X найден');
        browser 
            .page.shop() 
            .section.topMenu 
            .assert.textContains('@logIn', 'Войти');
    /*},
    'Search for X': function (browser) {  // второй ТК на повторный поиск

        browser 
        .setValue('[name="search"]', ['X',browser.Keys.ENTER]); // ввод значения в поисковую строку и нажатие кнопки ENTER

        browser  //проверка корректного результата поиска
            .waitForElementVisible('css selector','h4','Заголовок загружен')
            .assert.urlContains('search=X')
            .assert.titleContains('TestGym', 'title ok')
            .assert.textContains('h5>.text-info', 'X', 'X найден');   */     
    }
};


