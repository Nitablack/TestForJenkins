module.exports = {
  '@disabled': true,

  after(browser) {
    browser.end();
  },

  'Disabled Test pack': function (browser) {
    console.log('Test group 1')
  },
};
