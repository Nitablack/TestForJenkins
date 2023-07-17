/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Usage:
 *   browser.page.google.search()
 * 
 * See the example test using this object:
 *   specs/with-page-objects/google.js
 *
 * For more information on working with page objects, see:
 *   https://nightwatchjs.org/guide/concepts/page-object-model.html
 *
 */

const pageCommands = {
  search(word) {
    this
      .setValue('@searchBar', [word, browser.Keys.ENTER]); // ввод значения в поисковую строку и нажатие кнопки ENTER;        
    return this; // for command-chaining
  }
};

module.exports = {
  url: 'http://testshop.sedtest-school.ru/', //адрес нужной страницы

  commands: [pageCommands], //функции для управления тестом

  elements: { //элементы,находящиеся на странице
    welcome: 'h4',    
    searchBar: '[name="search"]',
    pageTitle: 'title',
    cardBody:'h5>.text-info'
  },
  
  sections:{  //добавляем секции
      topMenu:{ //секция с соответствующим  
          selector: '#navbarCollapse', //селектором и 
          elements:{  //элементами 
              main: '.nav-link', // Главная
              cart: '[href="/mycart/"]', //корзина
              favorite: '[href="/myfavorites/"]', //избранное
              logIn: '[href="/users/auth/"]'
          }
      }
  }
};
