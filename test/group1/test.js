module.exports = {
  after(browser) {
    browser.end();
  },

  'Test': function (browser) {
    console.log('Test group 1');
  },


  'Disabled Test': ''+function (browser) {
    console.log('Disabled Test Should not print this')
  }

};
