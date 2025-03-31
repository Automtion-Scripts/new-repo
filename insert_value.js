module.exports={
    "insert_value" : function(browser){
        browser
            .url("https://saucelabs.com/test-automation-tool-demon.com/")
            .pause(6000)
            
            .click('#__next > header > div > div > div.MuiStack-root.css-1r5to7m > div > button > div > img') //css by default
            .pause(4000)
            
            .click('#__next > header > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-pmtfjl > div.MuiStack-root.css-1s3nsi8 > div > div.MuiBox-root.css-4cxybv > a > button')
            .pause(3000)

            // .assert.not.visible('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-0 > span') // whether the element is present or not

            .assert.containsText('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-y1gt6f > h2', 'Talk to an Expert') // we are checking what contains is present in the element and also it is not a case sensitive
            .pause(2000)


            .setValue('#Email', 'test@gmail.com')
            .pause(2000)

            .setValue('#Company', 'Test Company')
            .pause(2000)

            // .click('#Solution_Interest__c option:nth-child(2)')
            // .pause(1000)
    

            .setValue("#Solution_Interest__c", "Mobile Application testing")
            .pause(2000)

            .click('#LblmktoCheckbox_44280_0')

            .click('#mktoForm_3766 > div.mktoButtonRow > span > button')

            .end();
    }
}