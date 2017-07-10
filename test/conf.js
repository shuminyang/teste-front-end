exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function() {
        browser.driver.manage().timeouts().implicitlyWait(60000);        
    },
    specs: ['pagInicial.js', 'pagDetalhe.js']
};