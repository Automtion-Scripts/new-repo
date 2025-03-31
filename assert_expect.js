// module.exports={
//     "assert_expect" : function(browser){
//         browser
//             .url("https://saucelabs.com/test-automation-tool-demon.com/")
//             .pause(6000)
            
//             .click('#__next > header > div > div > div.MuiStack-root.css-1r5to7m > div > button > div > img') //css by default
//             .pause(4000)
            
//             .click('#__next > header > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-pmtfjl > div.MuiStack-root.css-1s3nsi8 > div > div.MuiBox-root.css-4cxybv > a > button')
//             .pause(3000)

//             .assert.visible('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-0 > span') // whether the element is present or not
            
//             .click('#__next > header > div > div > div.MuiStack-root.css-1r5to7m > div > button > div > img') //css by default
//             .pause(4000)
        
//             .click('#__next > header > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-pmtfjl > div.MuiStack-root.css-1s3nsi8 > div > div.MuiBox-root.css-4cxybv > a > button')
//             .pause(3000)

//             .assert.containsText('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-y1gt6f > h2', 'Talk to an Expert') // we are checking what contains is present in the element and also it is not a case sensitive
//             .pause(2000)

//             }
//         }



module.exports={
    "expect" : function(browser){
        browser
            .url("https://saucelabs.com/test-automation-tool-demon.com/")
            .pause(6000)
            
            .click('#__next > header > div > div > div.MuiStack-root.css-1r5to7m > div > button > div > img') //css by default
            .pause(4000)
            
            .click('#__next > header > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-pmtfjl > div.MuiStack-root.css-1s3nsi8 > div > div.MuiBox-root.css-4cxybv > a > button')
            .pause(3000)

            .expect.element('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-0 > span').to.be.visible // whether the element is present or not
            
            // .click('#__next > header > div > div > div.MuiStack-root.css-1r5to7m > div > button > div > img') //css by default
            // .pause(4000)
        
            // .click('#__next > header > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-pmtfjl > div.MuiStack-root.css-1s3nsi8 > div > div.MuiBox-root.css-4cxybv > a > button')
            // .pause(3000)

            // .expect.element('#form_3766 > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-6.MuiGrid-grid-lg-5.css-1lrp86k > div > div.MuiBox-root.css-y1gt6f > h2', 'Talk to an Expert').to.be.visible // we are checking what contains is present in the element and also it is not a case sensitive
            // .pause(2000)

            }
        }